'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import Slider from 'react-slick'
import { SlArrowRight } from "react-icons/sl";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiFindReplaceLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ba = () => {
  const [listing, setListing] = useState([])
  const [filterListing,setFilterListing] = useState([])
  const setting = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  const fetchRoadmapListing = () => {
    axios.get('http://localhost:5000/admin/addbtechcollege/getall')
      .then((result) => {
        console.log(result.status);
        setListing(result.data)
        console.log(listing);
        
        setFilterListing(result.data)


      }).catch((err) => {
        console.log(err);
        toast.error('failed to fetch Roadmap list')

      });
  }
  useEffect(() => {
    fetchRoadmapListing()
  }, [])


  const applysearch = (e) => {
    const value = e.target.value;
    setListing(listing.filter((listing) => {
      return (listing.collegeName.toLowerCase().includes(e.target.value.toLowerCase()))
    }))
  }
  const filterByCategory = (listing) => {
    console.log(listing);
    const filteredListing = filterListing.filter(col => col.category.toLowerCase().includes(listing.toLowerCase()))
    setListing(filteredListing)
    
  }

  return (
    <div className='font-sans relative'>
      <div className=' flex md:min-w-[1536px] flex-col md:w-[1536px] slider-container  '>
        <Slider {...setting}>

          <div className='  relative'>
            <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://image-static.collegedunia.com/public/asset/img/homepage/banner/New1663389009.webp" alt="" />

            <div className='text-white hover:underline absolute w-20  bottom-1 right-[500px]'>
              <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Indian Institute of Technology,Roorkee </h1>
            </div>
          </div>



          <div className=' relative'>
            <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://image-static.collegedunia.com/public/asset/img/homepage/banner/IIT1671515040.webp" alt="" />
            <div className='text-white hover:underline absolute w-20  bottom-1 right-[500px]'>
              <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Shri Ram College of Commerce,New Delhi</h1>
            </div>
          </div>
          <div className=' relative'>
            <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://image-static.collegedunia.com/public/asset/img/homepage/banner/IIT1642250345.webp" alt="" />
            <div className='text-white hover:underline absolute w-20  bottom-1 right-[500px]'>
              <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Indian Institute of Management, Ahmedabad</h1>
            </div>
          </div>

        </Slider>
        <div className='absolute top-[150px] left-[300px] flex-col w-[60%] justify-center items-center'>
          <div className='flex justify-center items-center bg-transparent'>
            <h1 className='text-5xl text-white font-semibold '>Top Btech college in india</h1>
          </div>
          <div className='flex justify-center overflow-hidden mt-6 h-[55px] rounded-sm bg-white items-center'>
            <h className="text-gray-400 w-[5%] pl-4" ><RiFindReplaceLine /></h>
            <input className='bg-transparent outline-none  text-gray-400 w-[80%] h-[100%]'
            onChange={applysearch}
            type="text" 
            placeholder='Search for colleges,courses,exams and more' />
            <button className='bg-orange-400 px-auto w-[15%] border-none h-[100%] text-white'>Search</button>
          </div>
          <div className="mt-10 sm:mt-20">
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  onClick={(e) => filterByCategory('svn')}
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  Svn
                </button>
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  onClick={(e) => filterByCategory('bbd')}
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  BBD
                </button>
                <a
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                 Ml
                </a>
                <a
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                  Creative
                </a>
                <a
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                  Environment
                </a>
                <a
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  </svg>
                  Adventure
                </a>
              </div>
              </div>
        
      </div>
      
      <div className=' md:mx-40 overflow-hidden  my-5'>
        <h1 className='text-2xl mb-4 text-gray-900 font-semibold '>Explore Programs</h1>
        <div className='md:flex  flex-wrap justify-start items-center'>
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
          <div className='h-[270px] flex-col md:w-[380px]  md:ml-5 w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
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
          <div className='h-[270px] flex-col md:w-[380px] md:ml-5  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
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
          <div className='h-[270px] flex-col md:w-[380px] mt-4 md:ml-5  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
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
          <div className='h-[270px] flex-col md:w-[380px] mt-4 md:ml-5  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
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
      </div>
      <div className='md:ml-40 md:w-[77%] my-5'>
        <h1 className='text-2xl mb-4 text-gray-900 font-semibold '>Top 10 Colleges</h1>
        <div className='flex justify-start border-2 border-gray-200 py-[9px] font-semibold items-start'>
            <div className='w-[90px] ml-2 flex justify-start items-center'>
              <h1 className='text-gray-900'>Rank</h1>
            </div>
            <div className='w-[390px] flex justify-start items-center'>
              <h1 className='text-gray-900 '>College</h1>
            </div>
            <div className='w-[230px]  flex justify-start items-center'>
              <h1 className='text-gray-900 pl-8'>Ranking</h1>
            </div>
            <div className='w-[100px] flex justify-center items-center'>
              <h1 className='text-gray-900 pl-8'>Cutoff</h1>
            </div>
            <div className='w-[230px] flex justify-start items-center'>
              <h1 className='text-gray-900 pl-8'>Application Deadline</h1>
            </div>
            <div className='w-[100px] flex justify-start items-center'>
              <h1 className='text-gray-900 pl-8'>Fee</h1>
            </div>
        </div>
        { 
        
        listing.map((item,index) =>{
              return  <div className={`flex flex-wrap justify-start items-center border-x-[1px] h-[75px] border-b-[1px] border-gray-200 `}>
        <div className='w-[80px] flex justify-start items-center ml-4'>
              <h1 className='text-gray-500'>#{index+1}</h1>
            </div>
            <div className='w-[60px] flex justify-center  items-center'>
              <div className='flex justify-center items-center h-[50px] w-[50px] rounded-[50%] border '>
            <img className='h-[30px] w-[30px]  ' src={item.image1} alt="" />
            </div>
            </div>
            <div className='w-[340px] flex-col justify-center items-center'>
              <a href=""></a>
              <p className='text-black text-[16px] font-semibold'>{item.collegeName}</p>
              <p className='text-[14px] text-gray-600 font-normal'>{item.collegeAddress}</p>
            </div>
            <div className='flex justify-center items-center w-[45px]'>
                <img src="\the_week1569844170.webp" alt="" />
            </div>
            <div className='w-[210px] flex justify-start items-center'>
              <h1 className='text-gray-500'>{item.Ranking}</h1>
            </div>
            <div className='w-[100px] flex justify-center items-center'>
              <h1 className='text-gray-500'>-</h1>
            </div>
            <div className='w-[210px] flex  items-center'>
              <h1 className='text-gray-500 '>{item.ApplicationDeadline}</h1>
            </div>
            <div className='w-[80px]'>
              <h1 className='text-gray-800 inline-block font-semibold'> <FaIndianRupeeSign className='inline-block text-md' />{item.fee}</h1>
              <p className='text-gray-500 text-[14px] font-normal'>
                1st Year Fee
              </p>
            </div>
        </div>
        })
      }
      </div>
    </div>
  )
}

export default Ba