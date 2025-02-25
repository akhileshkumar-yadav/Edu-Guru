'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiFindReplaceLine } from "react-icons/ri";
import classess from './viewuni.module.css'
import { FaRegStar } from "react-icons/fa";
import StarRatings from 'react-star-ratings';


const ViewUniversity = () => {
    const { id } = useParams();
    const [universityList, setUniversityList] = useState([]);
    const [filterListing, setFilterListing] = useState([])
    const [isExpanded, setIsExpanded] = useState(false);
    const reviewRef = useRef();
    const [rating, setRating] = useState(3);
    const [reviews, setreviews] = useState([])
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };


    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/admin/adduniversity/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        setUniversityList(data);
        console.log(data)
        setFilterListing(data)
    };
    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchreviewsDAta = async () => {
        const res = await fetch("http://localhost:5000/reviews/getbyuniversity/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setreviews(data)
        }
    }

    useEffect(() => {
        fetchreviewsDAta()
    }, [])


    const filterByCategory = (product) => {
        console.log(product);
        const filteredListing = filterListing.filter(col => col.l.toLowerCase().includes(product.toLowerCase()))
        setUniversityList(filteredListing)

    }

    const ratingForm = () => {
        if (currentUser !== null) {
            return <div>
                <StarRatings
                    rating={rating}
                    starRatedColor="orange"
                    changeRating={setRating}
                    numberOfStars={5}
                />
                <textarea className='bg-blue-100 w-full mt-3' ref={reviewRef}></textarea>
                <button className='bg-blue-900 text-white px-2 font-serif rounded' onClick={submitReview}>Submit Review</button>
            </div>
        } else {
            return <p>login to give review</p>
        }
    }

    const submitReview = async () => {
        const res = await fetch('http://localhost:5000/reviews/add', {
            method: 'POST',
            body: JSON.stringify({
                comment: reviewRef.current.value,
                rating: rating,
                user: currentUser._id,
                college: id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 200) {
            console.log('review submitted');
            enqueueSnackbar('Review submitted', { variant: 'success' });
            fetchreviewsDAta();
        } else {
            console.log(err);
        }
    }

    const ReviewsData = () => {
        if (reviews.length === 0) {
            return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
        }

        return reviews.map((rev) => (
            <>

                <div className="row h-50 shadow mb-4 py-3">
                    <div className="col-md-1">
                        <img className='w-16 h-16 rounded-full' src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="" />

                    </div>
                    <div className="col-md-9">
                        <p className='text-warning ' style={{ fontFamily: "cursive" }}>{rev.rating}Star</p>
                        <p className=' fw-semibold fs-5  ' style={{ fontFamily: "serif" }}>{currentUser.name}</p>
                        <p className=' '>{rev.comment}</p>
                    </div>

                    <div className="col-md-2 my-auto">
                        {/* <button className="bg-red-600  text-white rounded-lg px-4 py-1"  onClick={() => {deletefunction(rev._id)}}>Delete</button> */}

                    </div>
                </div>



            </>
        ))
    }

    return (
        <div className='bg-gray-100 w-full h-full overflow-x-scroll'>
            <div className='w-full relative'>
                <div className=' '>
                    <img className='w-[100%] h-[300px]' src="https://image-static.collegedunia.com/public/asset/img/homepage/banner/Aligarh1642584978.webp" alt="" />
                </div>
                <div className={classess.div1}>
                    <div className='flex ml-[10%] mt-[5%]  text-white'>
                        <div className='flex'>
                            <img className='h-[80px] w-[90px] rounded-md mr-5' src={universityList.image} alt="logo" />
                        </div>
                        <div className='flex-col '>
                            <h1 className=' text-3xl uppercase font-semibold'>{universityList.universityName}</h1>
                            <p className='text-md font-semibold'>{universityList.universityAddress}</p>
                            <h1> 
                             <a href={universityList.linkUniversity} className='text-blue-600 text-md font-semibold'>View University</a> 
                            </h1>

                        </div>
                    </div>
                    {/* google map add */}

                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
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
                                    marginRight:"40px",

                                }}
                            >
                                <FontAwesomeIcon icon={faLocationDot} />
                                {/* <FontAwesomeIcon icon="fa-solid fa-location-crosshairs" /> */}
                            </button>
                        ) : (
                            <div
                                style={{
                                    marginTop: '20px',
                                    padding: '15px',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    backgroundColor: '#f9f9f9',
                                    // position:'relative'
                                }}
                            >
                                <div className=''>
                                    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                                        <GoogleMap
                                            mapContainerStyle = {containerStyle}
                                            center={defaultCenter}
                                            zoom={10}
                                        >
                                            {/* Example: Marker */}
                                            <Marker position={defaultCenter} />
                                            <button onClick={handleButtonClick} className='absolute z-10 border w-6 h-6 rounded-[50%] -right-0 -top-0 font-bold text-red-800 text-md hover:text-white hover:bg-red-700 '>X</button>
                                        </GoogleMap>
                                    </LoadScript>
                                </div>
                             </div>
                        )}
                    </div>
                    {/* end google map */}
                </div>
                <hr className='border-2 border-gray-700 ' />
                <div className='flex justify-between  items-center h-[50px] w-[90%] mx-[5%]'>
                    <div className='flex justify-between h-[50px] w-[40%]  items-center'>
                        <button onClick={(e) => filterByCategory('IntroHead')} className='text-md ml-3 font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700' >
                            Info
                        </button>
                        <div className='text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700'>Courses</div>
                        <div className='text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700'>Fee</div>
                        <div className='text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700'>Admission 2024</div>
                        <div className='text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700'>Reviews</div>
                    </div>
                    <div className='flex justify-end items-center w-[20%] '>
                        <div className='mr-7 text-lg text-blue-400'>
                            {universityList.phone}
                        </div>
                        <div className='text-lg text-blue-400'>
                            {universityList.email}
                        </div>
                    </div>
                </div>
                <hr className='mb-2' />
            </div>
            <div className='md:w-[80%] w-[100%] overflow-x-scroll  md:p-5 md:mx-[10%] mb-5 rounded-md relative bg-orange-50'>
                <div className='w-[1000px]'>
                    <h1 className='text-xl font-semibold ml-10 mt-2'>{universityList.universityName}Latest Updates and News</h1>
                    <h1 className='text-xl text-red-500 font-semibold ml-10 mt-2'>{universityList.IntroHead}</h1>
                    <p className='text-lg font-medium text-gray-600 ml-40'>{universityList.intro}</p>
                    <h1 className='text-xl text-red-500 font-semibold ml-10 mt-2 '>{universityList.IntroHead1}</h1>
                    <p className='text-lg font-medium text-gray-600 ml-40 pb-4'>{universityList.introHeading}</p>
                    {isExpanded && (
                        <pre className=''
                            style={{
                                backgroundColor: "transparent",
                                padding: '10px',
                                marginTop: '20px',
                                borderRadius: '5px',
                                // border: '1px solid #ddd',
                                overflow: 'auto',
                            }}
                        >
                            {`
                            //    ${universityList.introHeading}
                             
                              `}
                        </pre>
                    )}
                    <button
                        onClick={toggleExpand}
                        className='absolute lg:right-48 right-1 bottom-0 '
                        style={{

                            marginTop: '20px',
                            padding: '1px 10px',
                            color: isExpanded ? '#e63946' : '#006d77',
                            // color: '#fff',
                            // border: 'none',
                            // borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        {isExpanded ? 'Read less... ' : '...See more'}
                    </button>
                </div>
            </div>
            <div className='md:w-[80%]  max-w-[100%] md:p-5 md:mx-[10%] mb-8 overflow-x-auto  rounded-lg bg-white'>
                {/* <div className='overflow-x-auto w-[1220px]'> */}
                <h1 className='text-xl font-semibold ml-10 mt-2 '>{universityList.universityName} Fee & Eligibility</h1>
                <h1 className='text-xl font-semibold ml-10 mb-3 mt-2 '> Full Time Course</h1>
                <div className=' border-t border-t-indigo-500 border-x border-x-indigo-500 ml-10 rounded-ss-lg rounded-se-lg w-[1000px]  rounded-lg'>
                    <div className='flex justify-start items-center rounded-ss-lg rounded-se-lg  bg-indigo-200 text-lg font-semibold'>
                        <div className='w-[20%] border-r border-r-indigo-500 ml-3 py-2'>Course</div>
                        <div className='w-[20%] border-r border-r-indigo-500 ml-3 py-2'>Fees</div>
                        <div className='w-[27%] border-r border-r-indigo-500 ml-3 py-2'>Eligibility</div>
                        <div className='w-[28%] border-r rounded-lg ml-3 py-2 '>ApplicationDate</div>
                    </div>
                    <div className='flex  h-[100px]   bg-gray-100 text-lg  font-semibold '>
                        <div className='flex w-[21.2%] border-r border-b    border-b-indigo-500 border-r-indigo-500   justify-start items-center'>
                            <div className='ml-3 text-gray-500'>{universityList.Course1}</div>
                        </div>
                        <div className='flex w-[21.3%]  border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center'>
                            <div className='  ml-3 text-md font-semibold text-[#1e4d2b] '><FaIndianRupeeSign className='inline-block text-sm font-light mb-1' />{universityList.Fee1}(1st Year Fees)</div>
                        </div>
                        <div className='flex w-[28.3%]   border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center'>
                            <div className='ml-3 text-gray-500'>{universityList.Eligibility1}</div>
                        </div>
                        <div className='flex w-[29.2%] border-b border-b-indigo-500  justify-start items-center'>
                            <div className='  ml-3 text-gray-500'>{universityList.ApplicationDate1}</div>
                        </div>
                    </div>
                    <div className='flex  h-[100px]   bg-gray-100 text-lg font-semibold '>
                        <div className='flex w-[21.2%] border-r border-b   border-b-indigo-500 border-r-indigo-500   justify-start items-center'>
                            <div className='ml-3 text-gray-500'>{universityList.Course2}</div>
                        </div>
                        <div className='flex w-[21.3%]  border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center'>
                            <div className='  ml-3 text-md text-[#1e4d2b]'><FaIndianRupeeSign className='inline-block text-sm font-light mb-1' />{universityList.Fee2}(1st Year Fees)</div>
                        </div>
                        <div className='flex w-[28.3%]   border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center'>
                            <div className='ml-3 text-gray-500'>{universityList.Eligibility2}</div>
                        </div>
                        <div className='flex w-[29.2%] border-b border-b-indigo-500  justify-start items-center'>
                            <div className='  ml-3 text-gray-500'>{universityList.ApplicationDate2}</div>
                        </div>
                    </div>
                    <div className='flex  h-[100px]   bg-gray-100 text-lg font-semibold '>
                        <div className='flex w-[21.2%] border-r border-b   border-b-indigo-500 border-r-indigo-500   justify-start items-center'>
                            <div className='ml-3 text-gray-500'>{universityList.Course3}</div>
                        </div>
                        <div className='flex w-[21.3%]  border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center'>
                            <div className='  ml-3 text-md text-[#1e4d2b]'><FaIndianRupeeSign className='inline-block text-sm font-light mb-1' />{universityList.Fee3}(1st Year Fees)</div>
                        </div>
                        <div className='flex w-[28.3%]   border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center'>
                            <div className='ml-3 text-gray-500'>{universityList.Eligibility3}</div>
                        </div>
                        <div className='flex w-[29.2%] border-b border-b-indigo-500  justify-start items-center'>
                            <div className='  ml-3 text-gray-500'>{universityList.ApplicationDate3}</div>
                        </div>
                    </div>
                    <div className='flex  h-[100px]   bg-gray-100 text-lg font-semibold '>
                        <div className='flex w-[21.2%] border-r border-b   border-b-indigo-500 border-r-indigo-500   justify-start items-center'>
                            <div className='ml-3 text-gray-500'>{universityList.Course4}</div>
                        </div>
                        <div className='flex w-[21.3%]  border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center'>
                            <div className='text-md  ml-3 text-[#1e4d2b]'><FaIndianRupeeSign className='inline-block text-sm font-light mb-1' />{universityList.Fee4}(1st Year Fees)</div>
                        </div>
                        <div className='flex w-[28.3%]   border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center'>
                            <div className='ml-3 text-gray-500'>{universityList.Eligibility4}</div>
                        </div>
                        <div className='flex w-[29.2%] border-b border-b-indigo-500  justify-start items-center'>
                            <div className='  ml-3 text-gray-500'>{universityList.ApplicationDate4}</div>
                        </div>
                    </div>
                    <div className='flex  h-[100px]   bg-gray-100 text-lg font-semibold '>
                        <div className='flex w-[21.2%] border-r border-b rounded-es-lg  border-b-indigo-500 border-r-indigo-500   justify-start items-center'>
                            <div className='ml-3 text-gray-500'>{universityList.Course5}</div>
                        </div>
                        <div className='flex w-[21.3%]  border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center'>
                            <div className='text-md  ml-3 text-[#1e4d2b]'><FaIndianRupeeSign className='inline-block text-sm font-light mb-1' />{universityList.Fee5}(1st Year Fees)</div>
                        </div>
                        <div className='flex w-[28.3%]   border-r border-r-indigo-500 border-b border-b-indigo-500  justify-start items-center'>
                            <div className='ml-3 text-gray-500'>{universityList.Eligibility5}</div>
                        </div>
                        <div className='flex w-[29.2%] border-b border-b-indigo-500  rounded-ee-lg justify-start items-center'>
                            <div className='  ml-3 text-gray-500'>{universityList.ApplicationDate5}</div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <div className='w-[80%]  p-5 mx-[10%] mb-5 rounded-md bg-orange-50'>
                <h1 className='text-xl font-semibold mb-2 ml-10'>Course Offered By {universityList.universityName} 2024</h1>
                <p className='text-sm font-light ml-10'>Select Degree and Streams to See Course Fees and Admission Details.</p>
                <div className='border h-[40px] ml-10 bg-gray-100 w-[80%] flex rounded-md mt-4'>
                    <RiFindReplaceLine className='m-3 text-lg' />
                    <input type="text" placeholder='Search Courses' className='h-[40px] w-[90%] bg-transparent rounded-md outline-none ' />
                </div>
                <div className='flex ml-10 mt-4  justify-start items-center'>
                    <h1 className='text-lg'>Streams:</h1>
                    <div className='ml-5 flex justify-start items-center'>
                        <button onClick={(e) => filterByCategory2('BA')} className=' border rounded-3xl py-1 px-3 text-md text-gray-700'>General</button>
                        <button onClick={(e) => filterByCategory2('Btech')} className=' border rounded-3xl py-1 px-3 text-md text-gray-700 ml-6'>Computer Science</button>
                        <button onClick={(e) => filterByCategory2('BCA')} className=' border rounded-3xl py-1 px-3 text-md text-gray-700 ml-6'>Computer</button>
                        <button onClick={(e) => filterByCategory2('B.sc')} className=' border rounded-3xl py-1 px-3 text-md text-gray-700 ml-6'>Mathematics</button>
                        <button onClick={(e) => filterByCategory2('B.com')} className=' border rounded-3xl py-1 px-3 text-md text-gray-700 ml-6'>Economic</button>
                        <button onClick={(e) => filterByCategory2('BBA')} className=' border rounded-3xl py-1 px-3 text-md text-gray-700 ml-6'>Management</button>
                    </div>
                </div>
                <div className='flex ml-10 mt-4  justify-start items-center'>
                    <h1 className='text-lg'>Courses:</h1>
                    <div className='ml-5 flex justify-start items-center'>
                        <button className=' border rounded-3xl py-1 px-4 text-md text-gray-700'>{universityList.Course1}</button>
                        <button className=' border rounded-3xl py-1 px-4 text-md text-gray-700 ml-6'>{universityList.Course2} </button>
                        <button className=' border rounded-3xl py-1 px-4 text-md text-gray-700 ml-6'>{universityList.Course3}</button>
                        <button className=' border rounded-3xl py-1 px-4 text-md text-gray-700 ml-6'>{universityList.Course4}</button>
                        <button className=' border rounded-3xl py-1 px-4 text-md text-gray-700 ml-6'>{universityList.Course5}</button>
                        {/* <button className=' border rounded-3xl py-1 px-3 text-lg text-gray-700 ml-6'>Management</button> */}
                    </div>
                </div>
            </div>
            <hr className='mt-3' />

            <hr className='mt-3' />

            <div className="container">
                <div className="row card py-3 mb-4 px-4 border-none  shadow">
                    <div className="col-md-8">
                        <h2 className="">Reviews And Ratings</h2>
                        <p className="fs-4 mb-2"></p>
                        {ratingForm()}
                        {/* <Link to={`/collegeReview/${CollegeList._id}`}><button type="button" className="btn mb-4 btn-outline-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Add Review</button>
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className="row ">
                {ReviewsData()}
            </div>
        </div>
    )
}

export default ViewUniversity




// AIzaSyD36yH9dndofDSRPd10A6Qjex7KTgg2KPg