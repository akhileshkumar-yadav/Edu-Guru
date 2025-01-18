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


  return (
    <div className='font-sans relative'>
      <div className=' flex md:min-w-[1536px] flex-col md:w-[1536px] slider-container  '>
        <Slider {...setting}>

          <div className='  relative'>
            <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://image-static.collegedunia.com/public/asset/img/homepage/banner/Aligarh1642584978.webp" alt="" />

            <div className='text-white hover:underline absolute w-20  bottom-1 right-[500px]'>
              <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Indian Institute of Technology,Roorkee </h1>
            </div>
          </div>



          <div className=' relative'>
            <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://image-static.collegedunia.com/public/asset/img/homepage-new/banner/10.webp" alt="" />
            <div className='text-white hover:underline absolute w-20  bottom-1 right-[500px]'>
              <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Shri Ram College of Commerce,New Delhi</h1>
            </div>
          </div>
          <div className=' relative'>
            <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://images.collegedunia.com/public/college_data/images/campusimage/14381594661410248684Hans-Raj-College.png" alt="" />
            <div className='text-white hover:underline absolute w-20  bottom-1 right-[500px]'>
              <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Indian Institute of Management, Ahmedabad</h1>
            </div>
          </div>

        </Slider>
        <div className='absolute top-[150px] left-[300px] flex-col w-[60%] justify-center items-center'>
          <div className='flex justify-center items-center bg-transparent'>
            <h1 className='text-5xl text-white font-semibold '>Find Top college in india</h1>
          </div>
          <div className='flex justify-center overflow-hidden mt-6 h-[55px] rounded-sm bg-white items-center'>
            <h className="text-gray-400 w-[5%] pl-4" ><RiFindReplaceLine /></h>
            <input className='bg-transparent outline-none text-gray-400 w-[80%] h-[100%]' type="text" placeholder='Search for colleges,courses,exams and more' />
            <button className='bg-orange-400 px-auto w-[15%] border-none h-[100%] text-white'>Search</button>
          </div>
          <div className='flex justify-between mt-6 text-white font-semibold  items-center'>
            <h1>Your recent visit</h1>
            <span className='bg-transparent border px-2 rounded-md h-[30px] border-gray-300 flex justify-center items-center'>IIT Bombay,Mumbai</span>
            <span className='bg-transparent border rounded-md h-[30px] border-gray-300 px-2 flex justify-center items-center'>IICD</span>
            <span className='bg-transparent border rounded-md h-[30px] border-gray-300 px-2 flex justify-center items-center'>IIT Ahemdabad,Ahemdabad</span>
            <span className=' border bg-orange-500 border-gray-300 rounded-md h-[40px] px-7 flex justify-center items-center'>Need Counslling</span>
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
              return  <div className={`flex flex-wrap justify-start border-x-[1px] h-[65px] border-b-[1px] border-gray-200 `}>
        <div className='w-[80px] flex justify-start items-center ml-4'>
              <h1 className='text-gray-500'>#{index+1}</h1>
            </div>
            <div className='w-[60px] flex justify-center  items-center'>
              <div className='flex justify-center items-center h-[50px] w-[50px] rounded-[50%] border '>
            <img className='h-[30px] w-[30px]  ' src={item.image1} alt="" />
            </div>
            </div>
            <div className='w-[340px] flex-col justify-center items-center'>
            <Link className="" href={'/mainpages/viewba/' + item._id }>
              <p className='text-black text-[18px] font-semibold'>{item.collegeName}</p>
              </Link>
              <p className='text-[15px] text-gray-600 font-normal'>{item.collegeAddress}</p>
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
      </div>
    </div>
  )
}

export default Ba