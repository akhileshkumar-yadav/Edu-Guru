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
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));

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
            return <div className='md:flex flex-wrap justify-start items-center mb-5 space-x-32' >
                <StarRatings
                    rating={rating}
                    starRatedColor="orange"
                    changeRating={setRating}
                    numberOfStars={5}
                />
                <textarea className='bg-blue-100 w-[30%] mt-3 pl-2 border outline-none border-blue-400' placeholder='Please give me Feedback' ref={reviewRef}></textarea>
                <button className='bg-blue-900 text-white px-2 font-serif rounded mt-5' onClick={submitReview}>Submit Review</button>
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
                'Content-Type':'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 200) {
            console.log('review submitted');
            // enqueueSnackbar('Review submitted', { variant: 'success' });
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

                <div className="row h-50 shadow mb-4  py-3">
                    <div className="col-md-1 w-[250px] ">
                        <img className='w-16 h-16 rounded-full' src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="" />

                    </div>
                    <div className="col-md-9">
                        <p className='text-warning ' style={{ fontFamily: "cursive" }}>{rev.rating}Star</p>
                        <p className=' fw-semibold fs-5  ' style={{ fontFamily: "serif" }}>{rev.name}</p>
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
                                <div className=''>
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
            <hr className='mt-3'/>

            <div className="container mx-[10%] mt-5 w-[80%]">
                <div className="row card py-3 mb-4 px-4 border-none  shadow">
                    <div className="col-md-8 c">
                        <h2 className="text-2xl text-blue-500 hover:text-blue-800 mb-5 font-semibold">Reviews And Ratings</h2>
                        {/* <p className="fs-4 mb-2 ">akhilesh</p> */}
                        {ratingForm()}
                        
                    </div>
                </div>
            </div>
            <div className="flex justify-start overflow-x-auto gap-5">
                {ReviewsData()}
            </div>

            
            {/* <div className="my-10 w-[80%] m-auto">
                <div style={{}} className="my-10">
                    <Slider {...settings2}>
                        {listing.map((item) => (
                            <div key={item.id} className=' text-black  rounded-2xl my-2   h-[470px] shadow-lg'>
                                <div className='flex justify-center items-center  relative rounded-t-2xl bg-gray-200 h-52'>
                                    <img src={item.image2} className='w-full opacity-85 rounded-t-2xl h-52' alt="imgage2" />
                                    <div className='absolute flex items-center space-x-3 text-white font-semibold text-xl bottom-10 left-5'>
                                        <div className='h-12 w-12 rounded-[50%] flex justify-center items-center'>
                                            <img src={item.image} className='h-10 w-10 rounded-[50%]' alt="image" />
                                        </div>
                                        <div className=''>{item.universityName}</div>
                                    </div>
                                </div>
                                <div className='p-4  flex justify-center w-full h-16 text-gray-800 bg-slate-50 font-medium'>
                                Courses:
                                    <h2 className='text-gray-600 text-md font-semibold w-full '> {item.courses}</h2>
                                </div>
                                <hr />
                                <div className='flex items-center  h-10 font-medium hover:text-orange-400 justify-start'>
                                   <div className=' text-lg ml-10 hover:text-orange-400 flex justify-around   items-center  text-gray-500'>info <FiChevronRight className="text-gray-500 ml-[202px] hover:text-orange-400 text-lg" /></div>
                                   
                                </div>
                                <hr />
                                <div className='flex items-center  h-10 font-medium hover:text-orange-400 justify-start'>
                                   <div className=' text-lg ml-10 hover:text-orange-400 flex justify-around   items-center  text-gray-500'>Fee <FiChevronRight className="text-gray-500 ml-[205px] hover:text-orange-400 text-lg" /></div>
                                   
                                </div>
                                <hr />
                                <div className='flex items-center  h-10 font-medium hover:text-orange-400 justify-start'>
                                   <div className=' text-lg ml-10 hover:text-orange-400 flex justify-around   items-center  text-gray-500'>Courses <FiChevronRight className="text-gray-500 ml-[170px] hover:text-orange-400 text-lg" /></div>
                                   
                                </div>
                                <hr />
                                <div className='flex items-center  h-10 font-medium hover:text-orange-400 justify-start'>
                                   <div className=' text-lg ml-10 hover:text-orange-400 flex justify-around   items-center  text-gray-500'>Admission Info <FiChevronRight className="text-gray-500 ml-[112px] hover:text-orange-400 text-lg" /></div>
                                   
                                </div>
                                <hr />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div> */}
        </div>
    )
}

export default ViewUniversity




// AIzaSyD36yH9dndofDSRPd10A6Qjex7KTgg2KPg