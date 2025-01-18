// import { useEffect, useRef, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { FaRegStar } from "react-icons/fa";
// import StarRatings from 'react-star-ratings';
// import { enqueueSnackbar } from 'notistack';

// const ViewCollege = () => {
//     const { id } = useParams();
//     const [CollegeList, setCollegeList] = useState([]);
//     const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
//     const reviewRef = useRef();
//     const [rating, setRating] = useState(3);
//     // console.log(currentUser);

//     const fetchUserData = async () => {
//         const res = await fetch('http://localhost:3000/college/getbyid/' + id);
//         console.log(res.status);
//         if (res.status === 200) {
//             const data = await res.json();
//             console.log(data);
//             setCollegeList(data);
//         }
//     };

//     useEffect(() => {
//         fetchUserData();
//     }, []);

//     const [reviews, setreviews] = useState([])

//     const fetchreviewsDAta = async () => {
//         const res = await fetch("http://localhost:3000/reviews/getbycollege/" + id);
//         console.log(res.status);
//         if (res.status === 200) {
//             const data = await res.json();
//             console.log(data);
//             setreviews(data)
//         }
//     }

//     useEffect(() => {
//         fetchreviewsDAta()
//     }, [])

//     const deletefunction = async (id) => {
//         console.log(id);

//         const res = await fetch('http://localhost:3000/reviews/delete/' + id, { method: 'DELETE' })

//         if (res.status === 200) {
//             fetchreviewsDAta();
//         }
//     }



//     const ratingForm = () => {
//         if (currentUser !== null) {
//             return <div>
//                 <StarRatings
//                     rating={rating}
//                     starRatedColor="orange"
//                     changeRating={setRating}
//                     numberOfStars={5}
//                 />
//                 <textarea className='bg-blue-100 w-full mt-3' ref={reviewRef}></textarea>
//                 <button className='bg-blue-900 text-white px-2 font-serif rounded' onClick={submitReview}>Submit Review</button>
//             </div>
//         } else {
//             return <p>login to give review</p>
//         }
//     }

//     const submitReview = async () => {
//         const res = await fetch('http://localhost:3000/reviews/add', {
//             method: 'POST',
//             body: JSON.stringify({
//                 comment: reviewRef.current.value,
//                 rating: rating,
//                 user: currentUser._id,
//                 college: id
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         console.log(res.status);
//         if (res.status === 200) {
//             console.log('review submitted');
//             enqueueSnackbar('Review submitted', { variant: 'success' });
//             fetchreviewsDAta();
//         } else {
//             console.log(err);
//         }
//     }

//     const ReviewsData = () => {
//         if (reviews.length === 0) {
//             return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
//         }

//         return reviews.map((rev) => (
//             <>

//                 <div className="row h-50 shadow mb-4 py-3">
//                     <div className="col-md-1">
//                         <img className='w-16 h-16 rounded-full' src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="" />

//                     </div>
//                     <div className="col-md-9">
//                         <p className='text-warning ' style={{ fontFamily: "cursive" }}>{rev.rating}Star</p>
//                         <p className=' fw-semibold fs-5  ' style={{ fontFamily: "serif" }}>{currentUser.name}</p>
//                         <p className=' '>{rev.comment}</p>
//                     </div>

//                     <div className="col-md-2 my-auto">
//                         {/* <button className="bg-red-600  text-white rounded-lg px-4 py-1"  onClick={() => {deletefunction(rev._id)}}>Delete</button> */}

//                     </div>
//                 </div>



//             </>
//         ))
//     }

//     return (
//         <>
//             {
//                 CollegeList !== null ? (

//                     <div className="container px-10 mb-5">
//                         <div className="row text-center flex align-items-center  flex-col me-5">
//                             <div className="col-md-5" style={{ border: "none", width: 400 }}>
//                                 <img src={'http://localhost:3000/' + CollegeList.image} onClick={window.scrollTo(0, 0)} alt="" className="img-fluid d-block mx-auto mb-3" style={{ height: 500, width: 1000 }} />

//                             </div>
//                         </div>
//                         <div className='card px-4 border-none col-md-8 shadow'>
//                             <p className=' fw-semibold text-blue-900 fs-2 mt-5 mb-1' style={{ fontFamily: "serif" }}>{CollegeList.collegename}</p>
//                             <p className='mb-3 fs-5' style={{ fontFamily: "serif" }}>{CollegeList.collegeaddress}</p>
//                             {/* <p className=' fs-5 fw-semibold ' style={{fontFamily:"cursive"}}>Fees : {CollegeList.fees}</p> */}
//                             <div className=" ">
//                                 <div className="row">
//                                     <div className="col-md-3 mb-3">
//                                         <h5 className="fs-5 ms-2 font-serif mt-3 bg-blue-900 text-white px-3 py-1">Contact  Details  </h5>
//                                     </div>
//                                     <div className="col-md-9 ">
//                                         <p className=' fs-5  text-secondary' >Email : {CollegeList.email}</p>
//                                         <p className=' fs-5  mb-2 text-secondary'>Contact : {CollegeList.phone}</p>
//                                         <p className=' fs-5  mb-2 text-secondary'>Fees : {CollegeList.fees}</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <p className=' fs-5 text-secondary mb-5'>{CollegeList.collegedetail}</p>
//                         </div>
//                     </div>
//                 ) : (
//                     <div>
//                         Loading
//                     </div>
//                 )
//             }
//             <div className="container">
//                 <div className="row card py-3 mb-4 px-4 border-none  shadow">
//                     <div className="col-md-8">
//                         <h2 className="">Reviews And Ratings</h2>
//                         <p className="fs-4 mb-2"></p>
//                         {ratingForm()}
//                         {/* <Link to={/collegeReview/${CollegeList._id}}><button type="button" className="btn mb-4 btn-outline-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Add Review</button>
//                         </Link> */}
//                     </div>
//                 </div>
//             </div>
//             <div className="row ">
//                 {ReviewsData()}
//             </div>

//         </>
//     )
// }


// export default ViewCollege



// university listing card 
 {/* <div className=' md:ml-36 w-[83%] my-5'>

                <h1 className='text-2xl mb-4 text-gray-900 font-semibold '>Select Your Study Goal Colleges</h1>

                <div className='flex items-center mb-8 h-[280px] '>

                    <div className='min-w-[240px] min-h-[260px] border text-gray-500 ml-3 border-gray-700 rounded-md'>

                        <div className='flex mx-4 mt-4'>
                            <div className='h-[60px] flex justify-center items-center border border-gray-500 w-[60px] rounded-[50%]'>
                                <img className='h-[35px]' src="/worker.png" alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl font-semibold text-gray-700'>Engineering</h1>
                                <p className='hover:text-gray-600'>2100 Colleges</p>
                            </div>

                        </div>
                        <div className='mt-8 mx-4'>
                            <Link href="/mainpages/btech">
                                <h1 className='hover:text-indigo-600'>BE/B.Tech</h1>
                            </Link>
                            <hr />
                            <h1 className='hover:text-indigo-600'>Diploma in Engineering</h1>
                            <hr />
                            <Link href="/mainpages/mtech">
                                <h1 className='hover:text-indigo-600'>ME/M.Tech</h1>
                            </Link>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='min-w-[240px] min-h-[260px] border text-gray-500 ml-3 border-gray-700 rounded-md'>
                        <div className='flex mx-4 mt-4'>
                            <div className='h-[60px] flex justify-center items-center border border-gray-500 w-[60px] rounded-[50%]'>
                                <img className='h-[35px]' src="/ma.png" alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl font-semibold text-gray-700'>Management</h1>
                                <p className='hover:text-gray-600'>2100 Colleges</p>
                            </div>

                        </div>
                        <div className='mt-8 mx-4'>
                            <Link href="/mainpages/bba">
                                <h1 className='hover:text-indigo-600'>BBA/BMS</h1>
                            </Link>
                            <hr />
                            <Link href="/mainpages/mba">
                                <h1 className='hover:text-indigo-600'>MBA/PGDM</h1>
                            </Link>
                            <hr />
                            <Link href={'/mainpages/mba'}>
                                <h1 className='hover:text-indigo-600'>Executive MBA</h1>
                            </Link>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='min-w-[240px] min-h-[260px] border text-gray-500 ml-3 border-gray-700 rounded-md'>
                        <div className='flex mx-4 mt-4'>
                            <div className='h-[60px] flex justify-center items-center border border-gray-500 w-[60px] rounded-[50%]'>
                                <img className='h-[35px]' src="/comme.png" alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl font-semibold text-gray-700'>Commerce</h1>
                                <p className='hover:text-gray-600'>2100 Colleges</p>
                            </div>

                        </div>
                        <div className='mt-8 mx-4'>
                            <Link href="/mainpages/bcom">
                                <h1 className='hover:text-indigo-600'>B. Com</h1>
                            </Link>
                            <hr />
                            <Link href="/mainpages/mcom">
                                <h1 className='hover:text-indigo-600'>M. Com</h1>
                            </Link>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='min-w-[240px] min-h-[260px] border text-gray-500 ml-3 border-gray-700 rounded-md'>
                        <div className='flex mx-4 mt-4'>
                            <div className='h-[60px] flex justify-center items-center border border-gray-500 w-[60px] rounded-[50%]'>
                                <img className='h-[35px]' src="/art.png" alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl font-semibold text-gray-700'>Arts</h1>
                                <p className='hover:text-gray-600'>2100 Colleges</p>
                            </div>

                        </div>
                        <div className='mt-8 mx-4'>
                            <Link href="/mainpages/ba">
                                <h1 className='hover:text-indigo-600'>BA</h1>
                            </Link>
                            <hr />
                            <Link href="/mainpages/ma">
                                <h1 className='hover:text-indigo-600'>MA</h1>
                            </Link>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='min-w-[240px] min-h-[260px] text-gray-500 ml-3 border border-gray-700 rounded-md'>
                        <div className='flex mx-4 mt-4'>
                            <div className='h-[60px] flex justify-center items-center border border-gray-500 w-[60px] rounded-[50%]'>
                                <img className='h-[35px]' src="/com.png" alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl font-semibold text-gray-700'>Com.App</h1>
                                <p className='hover:text-gray-600'>2100 Colleges</p>
                            </div>

                        </div>
                        <div className='mt-8 mx-4'>
                            <Link href="/mainpages/bca">
                                <h1 className='hover:text-indigo-600'>BCA</h1>
                            </Link>
                            <hr />
                            <Link href="/mainpages/mca">
                                <h1 className='hover:text-indigo-600'>MCA</h1>
                            </Link>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
            </div> 
            <hr className='my-4' />
            <div className=' md:mx-36 overflow-hidden  my-5'>
                <h1 className='text-2xl mb-4 text-gray-900 font-semibold '>Explore Programs</h1>

                <div className='md:flex mb-5  flex-wrap justify-start items-center'>
                    <div className='h-[270px] flex-col md:w-[380px]  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
                        <div className='flex'>

                            <div className='w-[250px]  h-[100px] '>
                                <h1 className='ml-14 mt-4 text-xl font-semibold text-gray-800'>Ranking</h1>
                                <p className='ml-14  text-gray-400 text-sm font-medium'>College ranked based on real data</p>

                            </div>
                            <div className='h-[100px]'>
                                <img className='md:h-[100px]  md:w-[100px] mt-4 h-[50px] w-[50px] ' src="\—Pngtree—illustration of graduate college student_6293725.png" alt="" />
                            </div>

                        </div>
                        <div className='flex ml-10 mt-7'>
                            <Link href="">
                                <div className='border ml-3 flex justify-center items-center rounded-3xl h-[32px] w-[150px]'>
                                    <h1 className='text-gray-400'>Indiatoday-1447</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-4 rounded-3xl h-[32px] w-[100px]'>
                                    <h1 className='text-gray-400'>IIRF-1287</h1>
                                </div>
                            </Link>

                        </div>
                        <div className='flex ml-10 mt-4'>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[130px]'>
                                    <h1 className='text-gray-400'>Outlook-1234</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-4 rounded-3xl h-[32px] w-[100px]'>
                                    <h1 className='text-gray-400 text-[14px] '>NIRF-1312</h1>
                                </div>
                            </Link>

                        </div>
                        <Link href="">
                            <p className='ml-16 mt-4 inline-block text-gray-500'>Top ranked college in india  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
                        </Link>

                    </div>
                    <div className='h-[270px] flex-col md:w-[380px]  md:ml-9 w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
                        <div className='flex'>

                            <div className='w-[250px]  h-[100px] '>
                                <h1 className='ml-14 mt-4 text-xl font-semibold text-gray-800'>Find college</h1>
                                <p className='ml-14  text-gray-400 text-sm font-medium'>Discover 19000 + college via preferences</p>

                            </div>
                            <div className='h-[100px]'>
                                <img className='md:h-[100px]  md:w-[130px] mt-2 h-[50px] w-[50px] ' src="\10088-removebg-preview.png" alt="" />
                            </div>

                        </div>
                        <div className='flex ml-10 mt-7'>
                            <Link href="">
                                <div className='border ml-3 flex justify-center items-center rounded-3xl h-[32px] w-[230px]'>
                                    <h1 className='text-gray-400'>Best MBA college in india</h1>
                                </div>
                            </Link>


                        </div>
                        <div className='flex ml-10 mt-4'>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[230px]'>
                                    <h1 className='text-gray-400'>Best B-Tech college in india</h1>
                                </div>
                            </Link>


                        </div>
                        <Link href="">
                            <p className='ml-16 mt-4 inline-block text-gray-500'> Discover Top college in india  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
                        </Link>

                    </div>
                    <div className='h-[270px] flex-col md:w-[380px] md:ml-9  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
                        <div className='flex'>

                            <div className='w-[250px]  h-[100px] '>
                                <h1 className='ml-14 mt-4 text-xl font-semibold text-gray-800'>Course Finder</h1>
                                <p className='ml-14  text-gray-400 text-sm font-medium'> Discover Top Course in indian college - 2024 </p>

                            </div>
                            <div className='h-[100px]'>
                                <img className='md:h-[100px]  md:w-[120px] mt-2 h-[50px] w-[50px] ' src="\Na_Nov_28-removebg-preview.png" alt="" />
                            </div>

                        </div>
                        <div className='flex ml-10 mt-7'>
                            <Link href="">
                                <div className='border ml-3 flex justify-center items-center rounded-3xl h-[32px] w-[130px]'>
                                    <h1 className='text-gray-400'>BE/B-Tech-390</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-4 rounded-3xl h-[32px] w-[130px]'>
                                    <h1 className='text-gray-400'>MBA/BBA-420</h1>
                                </div>
                            </Link>

                        </div>

                        <div className='flex ml-10 mt-4'>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[130px]'>
                                    <h1 className='text-gray-400'>ME/M-Tech-980</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[90px]'>
                                    <h1 className='text-gray-400 text-[14px] '>B.sc-420</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[60px]'>
                                    <h1 className='text-gray-400 text-[14px] '>BA-560</h1>
                                </div>
                            </Link>

                        </div>
                        <Link href="">
                            <p className='ml-16 mt-4 inline-block text-gray-500'> Get Top Course  in indian College  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
                        </Link>

                    </div>
                    <div className='h-[270px] flex-col md:w-[380px] mt-4  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
                        <div className='flex'>

                            <div className='w-[250px]  h-[100px] '>
                                <h1 className='ml-14 mt-4 text-xl font-semibold text-gray-800'>Exam</h1>
                                <p className='ml-14  text-gray-400 text-sm font-medium'> Know more about your exams</p>
                            </div>
                            <div className='h-[100px]'>
                                <img className='md:h-[100px]  md:w-[130px] mt-2 h-[50px] w-[50px] ' src="\rb_2148169628.png" alt="" />
                            </div>

                        </div>
                        <div className='flex ml-10 mt-7'>
                            <Link href="">
                                <div className='border ml-3 flex justify-center items-center rounded-3xl h-[32px] w-[100px]'>
                                    <h1 className='text-gray-400'>IPU CET</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-4 rounded-3xl h-[32px] w-[80px]'>
                                    <h1 className='text-gray-400'>NPAT</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-4 rounded-3xl h-[32px] w-[80px]'>
                                    <h1 className='text-gray-400'>CUEE</h1>
                                </div>
                            </Link>

                        </div>
                        <div className='flex ml-10 mt-4'>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[90px]'>
                                    <h1 className='text-gray-400'>BHU UET</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[70px]'>
                                    <h1 className='text-gray-400 text-[14px] '>Q CARE</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[70px]'>
                                    <h1 className='text-gray-400 text-[14px] '>DAVV CET</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[50px]'>
                                    <h1 className='text-gray-400 text-[14px] '>SET</h1>
                                </div>
                            </Link>

                        </div>
                        <Link href="">
                            <p className='ml-16 mt-4 inline-block text-gray-500'> Check all Entrance exams in india   < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
                        </Link>

                    </div>
                    <div className='h-[270px] flex-col md:w-[380px] mt-4 md:ml-9  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
                        <div className='flex'>

                            <div className='w-[250px]  h-[100px] '>
                                <h1 className='ml-14 mt-4 text-xl font-semibold text-gray-800'>College Predictor</h1>
                                <p className='ml-14  text-gray-400 text-sm font-medium'> know your college admission chances </p>

                            </div>
                            <div className='h-[100px]'>
                                <img className='md:h-[100px]  md:w-[120px] mt-2 h-[50px] w-[50px] ' src="\rb_2148571732.png" alt="" />
                            </div>

                        </div>
                        <div className='flex ml-10 mt-7'>
                            <Link href="">
                                <div className='border ml-3 flex justify-center items-center rounded-3xl h-[32px] w-[130px]'>
                                    <h1 className='text-gray-400'>IPU CET</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-4 rounded-3xl h-[32px] w-[130px]'>
                                    <h1 className='text-gray-400'>TISSNET</h1>
                                </div>
                            </Link>

                        </div>
                        <div className='flex ml-10 mt-4'>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[130px]'>
                                    <h1 className='text-gray-400'>DAVV CET</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[90px]'>
                                    <h1 className='text-gray-400 text-[14px] '>CUET</h1>
                                </div>
                            </Link>

                        </div>
                        <Link href="">
                            <p className='ml-16 mt-4 inline-block text-gray-500'> Find where you may get admission  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
                        </Link>

                    </div>
                    <div className='h-[270px] flex-col md:w-[380px] mt-4 md:ml-9  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
                        <div className='flex'>

                            <div className='w-[250px]  h-[100px] '>
                                <h1 className='ml-14 mt-4 text-xl font-semibold text-gray-800'>Course Finder</h1>
                                <p className='ml-14  text-gray-400 text-sm font-medium'> Discover Top Course in indian college - 2024 </p>

                            </div>
                            <div className='h-[100px]'>
                                <img className='md:h-[100px]  md:w-[120px] mt-2 h-[50px] w-[50px] ' src="\rb_3290.png" alt="" />
                            </div>

                        </div>
                        <div className='flex ml-10 mt-7'>
                            <Link href="">
                                <div className='border ml-3 flex justify-center items-center rounded-3xl h-[32px] w-[130px]'>
                                    <h1 className='text-gray-400'>BE/B-Tech-390</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-4 rounded-3xl h-[32px] w-[130px]'>
                                    <h1 className='text-gray-400'>MBA/BBA-420</h1>
                                </div>
                            </Link>

                        </div>
                        <div className='flex ml-10 mt-4'>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[130px]'>
                                    <h1 className='text-gray-400'>ME/M-Tech-980</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[90px]'>
                                    <h1 className='text-gray-400 text-[14px] '>B.sc-420</h1>
                                </div>
                            </Link>
                            <Link href="">
                                <div className='border flex justify-center items-center ml-3 rounded-3xl h-[32px] w-[60px]'>
                                    <h1 className='text-gray-400 text-[14px] '>BA-560</h1>
                                </div>
                            </Link>

                        </div>
                        <Link href="">
                            <p className='ml-16 mt-4 inline-block text-gray-500'> Get Top Course  in indian College  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
                        </Link>

                    </div>
                </div>

            </div>  */}















        