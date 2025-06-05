"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import classess from "./view.module.css";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";

const ViewUniversity = () => {
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
  const [showAll, setShowAll] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fetchProduct = async () => {
    const res = await fetch(
      "http://localhost:5000/admin/addupBord/getbyid/" + id
    );
    console.log(res.status);

    const data = await res.json();
    setUniversityList(data);
    console.log(data);
    setFilterListing(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchreviewsDAta = async () => {
    const res = await fetch(
      "http://localhost:5000/reviews/getbyuniversity/" + id
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
                src={universityList.SchoolimageLogo}
                alt="logo"
              />
            </div>
            <div className="flex-col ">
              <h1 className=" text-3xl uppercase font-semibold">
                {universityList.SchoolName}
              </h1>
              <p className="text-md font-semibold">
                {universityList.SchoolAddress}
              </p>
            </div>
          </div>
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
            <div className="text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700">
              Courses
            </div>
            <div className="text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700">
              Fee
            </div>
            <div className="text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700">
              Admission 2024
            </div>
            <div className="text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700">
              Reviews
            </div>
          </div>
          <div className="flex justify-end items-center w-[30%] ">
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
            {universityList.SchoolName} Latest Updates and News
          </h1>

          {/* Always visible first info */}
          <h1 className="text-lg text-red-500 font-semibold ml-10 mt-2">
            {universityList.head1}
          </h1>
          <p className="text-md font-medium text-gray-600 mt-2 ml-10">
            {universityList.info1}
          </p>

          {/* Show this only when expanded */}
          {isExpanded && (
            <>
              <h1 className="text-lg text-red-500 font-semibold ml-10 mt-2">
                {universityList.head2}
              </h1>
              <p className="text-md font-medium text-gray-600 ml-10 mt-2">
                {universityList.info2}
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
      <hr className="mt-3" />

      <div className="container mx-[10%] mt-5 w-[80%]">
        <div className="row card py-3 mb-4 px-4 border-none shadow">
          <div className="col-md-8">
            <h2 className="text-2xl text-blue-500 hover:text-blue-800 mb-5 md:ml-10 font-semibold">
              Reviews And Ratings
            </h2>
            {/* <p className="fs-4 mb-2 ">akhilesh</p> */}
            {ratingForm()}
          </div>
        </div>
        <div className="">{ReviewsData()}</div>
      </div>
      <div className="w-[100%] bg-gray-600 text-center text-white py-5">
        <h1 className="text-lg md:text-3xl font-semibold">PARENTS SPEAK</h1>
        <h1 className="text-lg md:text-3xl font-semibold">OUR TEASTIMONIALS</h1>
      </div>
      <div className="container mx-[11%] mt-5 w-[78%] bg-blue-600 text-white p-5 md:px-14 rounded-md">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="flex  ">
              <div className="flex flex-row justify-evenly items-center w-full">
                <div className="p-5 flex flex-col justify-center items-start w-[85%]">
                  <div>
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                  </div>
                  <h1 className="mt-3 text-lg font-semibold">
                    "{universityList.parentSay1}"
                  </h1>
                  <h1 className="mt-2 text-md">Parent-Name: {universityList.parentName1}</h1>
                  <h1 className="">Student-Name: {universityList.studentName1}</h1>
                  <h1 className=" mb-4 ">Class: {universityList.studentClass1}</h1>
                </div>
                <div className="border-2 flex justify-center w-[180px] h-[180px] items-center rounded-full border-white">
                  <img
                    className="w-[165px] h-[165px] rounded-full "
                    src={universityList.parentImage1}
                  />
                </div>
              </div>
            </div>
            <div className="flex  ">
              <div className="flex flex-row justify-evenly items-center w-full ">
                <div className="p-5 flex flex-col justify-center items-start w-[85%]">
                  <div>
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                  </div>
                  <h1 className="mt-3 text-lg font-semibold">
                    "{universityList.parentSay2}"
                  </h1>
                  <h1 className="mt-2 text-md">Parent-Name: {universityList.parentName2}</h1>
                  <h1 className="">Student-Name: {universityList.studentName2}</h1>
                  <h1 className=" mb-4 ">Class: {universityList.studentClass2}</h1>
                </div>
                <div className="border-2 flex justify-center w-[180px] h-[180px] items-center rounded-full border-white">
                  <img
                    className="w-[165px] h-[165px] rounded-full "
                    src={universityList.parentImage2}
                  />
                </div>
              </div>
            </div>
            <div className="flex  ">
              <div className="flex flex-row justify-evenly items-center w-full">
                <div className="p-5 flex flex-col justify-center items-start w-[85%]">
                  <div>
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                  </div>
                  <h1 className="mt-3 text-lg font-semibold">
                    "{universityList.parentSay3}"
                  </h1>
                  <h1 className="mt-2 text-md">Parent-Name: {universityList.parentName3}</h1>
                  <h1 className="">Student-Name: {universityList.studentName3}</h1>
                  <h1 className=" mb-4 ">Class: {universityList.studentClass3}</h1>
                </div>
                <div className="border-2 flex justify-center w-[180px] h-[180px]  items-center rounded-full border-white">
                  <img
                    className="w-[165px] h-[165px] rounded-full "
                    src={universityList.parentImage3}
                    alt="parent testimonial"
                  />
                </div>
              </div>
            </div>
            <div className="flex  ">
              <div className="flex flex-row justify-evenly items-center w-full">
                <div className="p-5 flex flex-col justify-center w-[85%] items-start">
                  <div>
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                    <StarIcon style={{ color: "#FFD43B", fontSize: "25px" }} />
                  </div>
                  <h1 className="mt-3 text-lg font-semibold">
                   " {universityList.parentSay4}"
                  </h1>
                  <h1 className="mt-2 text-md">Parent-Name: {universityList.parentName4}</h1>
                  <h1 className="">Student-Name: {universityList.studentName4}</h1>
                  <h1 className=" mb-4 ">Class: {universityList.studentClass4}</h1>
                </div>
                <div className="border-2 flex justify-center w-[180px] h-[180px] items-center rounded-full border-white">
                  <img
                    className="w-[165px] h-[165px] rounded-full "
                    src={universityList.parentImage4}
                    alt="parent testimonial"
                  />
                </div>
              </div>
            </div>
            {/* <div>
              <div>
                <div>
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                  <StarIcon style={{ color: "#FFD43B", fontSize: "30px" }} />
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ViewUniversity;

// AIzaSyD36yH9dndofDSRPd10A6Qjex7KTgg2KPg
