"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { FaIndianRupeeSign } from "react-icons/fa6";
import classess from "./viewba.module.css";
import StarRatings from "react-star-ratings";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ViewCollege = () => {
  const { id } = useParams();
  const [universityList, setUniversityList] = useState([]);
  const [filterListing, setFilterListing] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const reviewRef = useRef();
  const [rating, setRating] = useState(3);
  const [reviews, setreviews] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
//   const [locationName, setLocationName] = useState("");
//   const [loading, setLoading] = useState(true);

  const [showAll, setShowAll] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const sectionRefs = useRef({
    info: null,
    courses: null,
    fee: null,
    Admission2024: null,
    reviews: null,
  });

  const scrollToSection = (section) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchProduct = async () => {
    const res = await fetch(
      "http://localhost:5000/admin/addcollege/getbyid/" + id
    );
    const data = await res.json();
    setUniversityList(data);
    setFilterListing(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchreviewsDAta = async () => {
    const res = await fetch(
      "http://localhost:5000/reviews/getbycollege/" + id
    );
    if (res.status === 200) {
      const data = await res.json();
      setreviews(data);
    }
  };

  useEffect(() => {
    fetchreviewsDAta();
  }, []);

  const filterByCategory = (product) => {
    const filteredListing = filterListing.filter((col) =>
      col.l.toLowerCase().includes(product.toLowerCase())
    );
    setUniversityList(filteredListing);
  };

  const ratingForm = () => {
    if (currentUser !== null) {
      return (
        <div className="md:flex flex-wrap flex-col justify-start items-start mb-5  md:ml-10">
          <StarRatings
            rating={rating}
            starRatedColor="orange"
            changeRating={setRating}
            numberOfStars={5}
          />
          <textarea
            className="bg-blue-100 w-[30%] mt-3 pl-2 border outline-none border-blue-400"
            placeholder="Please give me Feedback"
            ref={reviewRef}
          ></textarea>
          <button
            className="bg-blue-900 text-white px-2 font-serif rounded mt-5"
            onClick={submitReview}
          >
            Submit Review
          </button>
        </div>
      );
    } else {
      return <p>login to give review</p>;
    }
  };

  const submitReview = async () => {
    const res = await fetch("http://localhost:5000/reviews/add", {
      method: "POST",
      body: JSON.stringify({
        comment: reviewRef.current.value,
        rating: rating,
        user: currentUser.id,
        college: id,
        
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      fetchreviewsDAta();
    }
  };

  const ReviewsData = () => {
    if (reviews.length === 0) {
      return (
        <h1 className="text-center fw-bold" style={{ color: "seagreen" }}>
          No Data Found
        </h1>
      );
    }

    const sortedReviews = [...reviews].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    const visibleReviews = showAll ? sortedReviews : sortedReviews.slice(0, 5);

    return (
      <div>
        {visibleReviews.map((rev) => {
          const formattedDate = new Date(rev.createdAt).toLocaleDateString(
            "en-IN",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          );

          return (
            <div className="row h-50 shadow mb-4 py-3" key={rev._id}>
              <div className="col-md-1 ml-5 flex justify-start gap-4 items-center">
                <img
                  className="w-16 h-16 rounded-full"
                  src={
                    rev.user?.avatar ||
                    "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                  }
                  alt="user avatar"
                />
                <p className="text-muted mb-1 text-lg font-semibold text-gray-700">
                  {rev.user?.name}
                </p>
                <p
                  className="text-gray-800 text-md font-semibold"
                  style={{ fontFamily: "cursive" }}
                >
                  {rev.rating} ★
                </p>
              </div>
              <div className="col-md-9 ml-5">
                <p className="font-semibold" style={{ fontFamily: "cursive" }}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{ color: i < rev.rating ? "#ffc107" : "#dcdcdc" }}
                    >
                      ★
                    </span>
                  ))}
                </p>
                <div className="flex justify-start items-center mb-2 gap-2">
                  <p
                    className="fw-semibold fs-5"
                    style={{ fontFamily: "serif" }}
                  >
                    {rev.user?.email || "Anonymous"}
                  </p>
                  |<p className="text-sm text-gray-500">{formattedDate}</p>
                </div>
                <p>{rev.comment}</p>
              </div>
            </div>
          );
        })}

        {reviews.length > 5 && (
          <div className="text-center mt-3">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 w-full h-full overflow-x-scroll">
      <div className="w-full relative">
        <div className=" ">
          <img
            className="w-[100%] h-[300px]"
            src="https://image-static.collegedunia.com/public/asset/img/homepage/banner/Aligarh1642584978.webp"
            alt=""
          />
        </div>
        <div className={classess.div1}>
          <div className="flex ml-[10%] mt-[5%]  text-white">
            <div className="flex">
              <img
                className="h-[80px] w-[90px] rounded-md mr-5"
                src={universityList.image}
                alt="logo"
              />
            </div>
            <div className="flex-col ">
              <h1 className=" text-3xl uppercase font-semibold">
                {universityList.collegeName}
              </h1>
              <p className="text-md font-semibold">
                {universityList.collegeAddress}
              </p>
              <h1>
                <a
                  href={universityList.linkCollege}
                  className="text-blue-600 text-md font-semibold"
                >
                  View University
                </a>
              </h1>
            </div>
          </div>
          {/* google map add */}

          {/* <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        {!isReplaced ? (
                            <button
                                onClick={handleButtonClick}
                                style={{
                                    padding: '15px 20px',
                                    fontSize: '16px',
                                    backgroundColor: '#4396f3',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    marginRight: "40px",

                                }}
                            >
                                <FontAwesomeIcon icon={faLocationDot} />
                               
                            </button>
                        ) : (
                            <div
                                style={{
                                    marginTop: '20px',
                                    padding: '15px',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    backgroundColor: '#f9f9f9',
                                
                                }}
                            >
                                <div >
                                    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                                        <GoogleMap
                                            mapContainerStyle={containerStyle}
                                            center={defaultCenter}
                                            zoom={10}
                                        >
                                      
                                            <Marker position={defaultCenter} />
                                            <button onClick={handleButtonClick} className='absolute z-10 border w-6 h-6 rounded-[50%] -right-0 -top-0 font-bold text-red-800 text-md hover:text-white hover:bg-red-700 '>X</button>
                                        </GoogleMap>
                                    </LoadScript>
                                </div>
                            </div>
                        )}
                    </div> */}
          {/* end google map */}
        </div>
        <hr className="border-2 border-gray-700 " />
        <div className="flex justify-between  items-center h-[50px] w-[90%] mx-[5%]">
          <div className="flex justify-between h-[50px] w-[40%]  items-center">
            <button
              onClick={(e) => filterByCategory("IntroHead")}
              className="text-md ml-3 font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700"
            >
              Info
            </button>
            <div
              className="text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700"
              onClick={() => scrollToSection("courses")}
            >
              Courses
            </div>
            <div
              className="text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700"
              onClick={() => scrollToSection("fee")}
            >
              Fee
            </div>
            <div className="text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700">
              Admission2024
            </div>
            <div
              className="text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700"
              onClick={() => scrollToSection("reviews")}
            >
              Reviews
            </div>
          </div>
          <div className="flex justify-end items-center w-[20%] ">
            <div className="mr-7 text-lg text-blue-400">
              {universityList.phone}
            </div>
            <div className="text-lg text-blue-400">{universityList.email}</div>
          </div>
        </div>
        <hr className="mb-2" />
      </div>
      <div className="md:w-[80%] w-[100%] overflow-x-scroll md:p-5 md:mx-[10%] mb-5 rounded-md relative bg-orange-50">
        <div className="w-[1000px]">
          {/* Always visible title */}
          <h1 className="text-xl font-semibold ml-10 mt-2">
            {universityList.universityName} Latest Updates and News
          </h1>

          {/* Always visible first info */}
          <h1 className="text-xl text-red-500 font-semibold ml-10 mt-2">
            {universityList.IntroHead}
          </h1>
          <p className="text-lg font-medium text-gray-600 ml-40">
            {universityList.intro}
          </p>

          {/* Show this only when expanded */}
          {isExpanded && (
            <>
              <h1 className="text-xl text-red-500 font-semibold ml-10 mt-2">
                {universityList.IntroHead1}
              </h1>
              <p className="text-lg font-medium text-gray-600 ml-40 pb-4">
                {universityList.introHeading}
              </p>
              <pre
                style={{
                  backgroundColor: "transparent",
                  padding: "10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                  overflow: "auto",
                }}
              ></pre>
            </>
          )}

          {/* Toggle button */}
          <button
            onClick={toggleExpand}
            className="absolute lg:right-48 right-1 bottom-0"
            style={{
              marginTop: "20px",
              padding: "1px 10px",
              color: isExpanded ? "#e63946" : "#006d77",
              cursor: "pointer",
            }}
          >
            {isExpanded ? "Read less..." : "...See more"}
          </button>
        </div>
      </div>

      <div
        ref={(el) => (sectionRefs.current.fee = el)}
        className="md:w-[80%]  max-w-[100%] md:p-5 md:mx-[10%] mb-8 overflow-x-auto  rounded-lg bg-white"
      >
        {/* <div className='overflow-x-auto w-[1220px]'> */}
        <h1 className="text-xl font-semibold ml-10 mt-2 ">
          {universityList.universityName} Fee & Eligibility
        </h1>
        <h1 className="text-xl font-semibold ml-10 mb-3 mt-2 ">
          {" "}
          Full Time Course
        </h1>
        <div className=" border-t border-t-indigo-500 border-x border-x-indigo-500 ml-10 rounded-ss-lg rounded-se-lg w-[1000px]  rounded-lg">
          <div className="flex justify-start items-center rounded-ss-lg rounded-se-lg  bg-indigo-200 text-lg font-semibold">
            <div className="w-[20%] border-r border-r-indigo-500 ml-3 py-2">
              Course
            </div>
            <div className="w-[20%] border-r border-r-indigo-500 ml-3 py-2">
              Fees
            </div>
            <div className="w-[27%] border-r border-r-indigo-500 ml-3 py-2">
              Eligibility
            </div>
            <div className="w-[28%] border-r rounded-lg ml-3 py-2 ">
              ApplicationDate
            </div>
          </div>
          <div className="flex  h-[100px]   bg-gray-100 text-lg  font-semibold ">
            <div className="flex w-[21.2%] border-r border-b    border-b-indigo-500 border-r-indigo-500   justify-start items-center">
              <div className="ml-3 text-gray-500">{universityList.Course1}</div>
            </div>
            <div className="flex w-[21.3%]  border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center">
              <div className="  ml-3 text-md font-semibold text-[#1e4d2b] ">
                <FaIndianRupeeSign className="inline-block text-sm font-light mb-1" />
                {universityList.Fee1}(1st Year Fees)
              </div>
            </div>
            <div className="flex w-[28.3%]   border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center">
              <div className="ml-3 text-gray-500">
                {universityList.Eligibility1}
              </div>
            </div>
            <div className="flex w-[29.2%] border-b border-b-indigo-500  justify-start items-center">
              <div className="  ml-3 text-gray-500">
                {universityList.ApplicationDate1}
              </div>
            </div>
          </div>
          <div className="flex  h-[100px]   bg-gray-100 text-lg font-semibold ">
            <div className="flex w-[21.2%] border-r border-b   border-b-indigo-500 border-r-indigo-500   justify-start items-center">
              <div className="ml-3 text-gray-500">{universityList.Course2}</div>
            </div>
            <div className="flex w-[21.3%]  border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center">
              <div className="  ml-3 text-md text-[#1e4d2b]">
                <FaIndianRupeeSign className="inline-block text-sm font-light mb-1" />
                {universityList.Fee2}(1st Year Fees)
              </div>
            </div>
            <div className="flex w-[28.3%]   border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center">
              <div className="ml-3 text-gray-500">
                {universityList.Eligibility2}
              </div>
            </div>
            <div className="flex w-[29.2%] border-b border-b-indigo-500  justify-start items-center">
              <div className="  ml-3 text-gray-500">
                {universityList.ApplicationDate2}
              </div>
            </div>
          </div>
          <div className="flex  h-[100px]   bg-gray-100 text-lg font-semibold ">
            <div className="flex w-[21.2%] border-r border-b   border-b-indigo-500 border-r-indigo-500   justify-start items-center">
              <div className="ml-3 text-gray-500">{universityList.Course3}</div>
            </div>
            <div className="flex w-[21.3%]  border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center">
              <div className="  ml-3 text-md text-[#1e4d2b]">
                <FaIndianRupeeSign className="inline-block text-sm font-light mb-1" />
                {universityList.Fee3}(1st Year Fees)
              </div>
            </div>
            <div className="flex w-[28.3%]   border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center">
              <div className="ml-3 text-gray-500">
                {universityList.Eligibility3}
              </div>
            </div>
            <div className="flex w-[29.2%] border-b border-b-indigo-500  justify-start items-center">
              <div className="  ml-3 text-gray-500">
                {universityList.ApplicationDate3}
              </div>
            </div>
          </div>
          <div className="flex  h-[100px]   bg-gray-100 text-lg font-semibold ">
            <div className="flex w-[21.2%] border-r border-b   border-b-indigo-500 border-r-indigo-500   justify-start items-center">
              <div className="ml-3 text-gray-500">{universityList.Course4}</div>
            </div>
            <div className="flex w-[21.3%]  border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center">
              <div className="text-md  ml-3 text-[#1e4d2b]">
                <FaIndianRupeeSign className="inline-block text-sm font-light mb-1" />
                {universityList.Fee4}(1st Year Fees)
              </div>
            </div>
            <div className="flex w-[28.3%]   border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center">
              <div className="ml-3 text-gray-500">
                {universityList.Eligibility4}
              </div>
            </div>
            <div className="flex w-[29.2%] border-b border-b-indigo-500  justify-start items-center">
              <div className="  ml-3 text-gray-500">
                {universityList.ApplicationDate4}
              </div>
            </div>
          </div>
          <div className="flex  h-[100px]   bg-gray-100 text-lg font-semibold ">
            <div className="flex w-[21.2%] border-r border-b rounded-es-lg  border-b-indigo-500 border-r-indigo-500   justify-start items-center">
              <div className="ml-3 text-gray-500">{universityList.Course5}</div>
            </div>
            <div className="flex w-[21.3%]  border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center">
              <div className="text-md  ml-3 text-[#1e4d2b]">
                <FaIndianRupeeSign className="inline-block text-sm font-light mb-1" />
                {universityList.Fee5}(1st Year Fees)
              </div>
            </div>
            <div className="flex w-[28.3%]   border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center">
              <div className="ml-3 text-gray-500">
                {universityList.Eligibility5}
              </div>
            </div>
            <div className="flex w-[29.2%] border-b border-b-indigo-500  rounded-ee-lg justify-start items-center">
              <div className="  ml-3 text-gray-500">
                {universityList.ApplicationDate5}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div
        ref={(el) => (sectionRefs.current.courses = el)}
        className="w-[80%]  p-5 mx-[10%] mb-5 rounded-md bg-orange-50"
      >
        <h1 className="text-xl font-semibold mb-2 ml-10">
          Course Offered By {universityList.universityName} 2024
        </h1>
        <p className="text-sm font-light ml-10">
          Select Degree and Streams to See Course Fees and Admission Details.
        </p>
        <div className="flex ml-10 mt-4  justify-start items-center">
          <h1 className="text-lg">Streams:</h1>
          <div className="ml-5 flex justify-start items-center">
            <button className=" border rounded-3xl py-1 px-3 text-md text-gray-700">
              General
            </button>
            <button className=" border rounded-3xl py-1 px-3 text-md text-gray-700 ml-6">
              Computer Science
            </button>
            <button className=" border rounded-3xl py-1 px-3 text-md text-gray-700 ml-6">
              Computer
            </button>
            <button className=" border rounded-3xl py-1 px-3 text-md text-gray-700 ml-6">
              Mathematics
            </button>
            <button className=" border rounded-3xl py-1 px-3 text-md text-gray-700 ml-6">
              Economic
            </button>
            <button className=" border rounded-3xl py-1 px-3 text-md text-gray-700 ml-6">
              Management
            </button>
          </div>
        </div>
        <div className="flex ml-10 mt-4  justify-start items-center">
          <h1 className="text-lg">Courses:</h1>
          <div className="ml-5 flex justify-start items-center">
            <button className=" border rounded-3xl py-1 px-4 text-md text-gray-700">
              {universityList.Course1}
            </button>
            <button className=" border rounded-3xl py-1 px-4 text-md text-gray-700 ml-6">
              {universityList.Course2}{" "}
            </button>
            <button className=" border rounded-3xl py-1 px-4 text-md text-gray-700 ml-6">
              {universityList.Course3}
            </button>
            <button className=" border rounded-3xl py-1 px-4 text-md text-gray-700 ml-6">
              {universityList.Course4}
            </button>
            <button className=" border rounded-3xl py-1 px-4 text-md text-gray-700 ml-6">
              {universityList.Course5}
            </button>
            {/* <button className=' border rounded-3xl py-1 px-3 text-lg text-gray-700 ml-6'>Management</button> */}
          </div>
        </div>
      </div>
      <hr className="mt-3" />

      <div
        ref={(el) => (sectionRefs.current.reviews = el)}
        className="container mx-[10%] mt-5 w-[80%]"
      >
        <div className="row card py-3 mb-4 px-4 border-none shadow">
          <div className="col-md-8">
            <h2 className="text-2xl text-blue-500 hover:text-blue-800 mb-5 md:ml-10 font-semibold">
              Reviews And Ratings
            </h2>
            {ratingForm()}
          </div>
        </div>
        <div className="">{ReviewsData()}</div>
      </div>
      <h1 className="w-[80%]  mt-8 mx-[10%] text-4xl font-semibold">Gallary</h1>
      <div className="grid w-[80%]  mt-8 mx-[10%] grid-cols-2 sm:grid-cols-4  gap-2">
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
        <img
          className="w-full size-40 object-cover"
          src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Gallery Image"
        />
      </div>
      <div className="w-[80%] mx-[10%] py-10 sm:px-6  lg:py-14 ">
        {/* Title */}
        <div className="max-w-2xl   mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            Our leadership
          </h2>
          <p className="mt-1 text-gray-600 ">Creative people</p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200  ">
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full size-20"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800 ">David Forren</h3>
                <p className="text-xs uppercase text-gray-500 ">
                  Founder / CEO
                </p>
              </div>
            </div>
            <p className="mt-3 text-gray-500 ">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
            {/* Social Brands */}
            <div className="mt-3 space-x-1">
              <a
                className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                href="#"
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                href="#"
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                </svg>
              </a>
            </div>
            {/* End Social Brands */}
          </div>
          {/* End Col */}
          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200">
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full size-20"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800 ">Amil Evara</h3>
                <p className="text-xs uppercase text-gray-500 ">
                  UI/UX Designer
                </p>
              </div>
            </div>
            <p className="mt-3 text-gray-500 ">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
            {/* Social Brands */}
            <div className="mt-3 space-x-1">
              <a
                className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none  "
                href="#"
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none  dark:focus:bg-neutral-700"
                href="#"
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                href="#"
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                </svg>
              </a>
            </div>
            {/* End Social Brands */}
          </div>

          {/* End Col */}
        </div>
      </div>
    </div>
  );
};

export default ViewCollege;

// AIzaSyD36yH9dndofDSRPd10A6Qjex7KTgg2KPg
