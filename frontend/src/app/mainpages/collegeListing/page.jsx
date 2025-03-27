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

const CollegeListing = () => {
    const [listing, setListing] = useState([])
    const [filterListing, setFilterListing] = useState([])

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
    const settings = {

        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const fetchRoadmapListing = () => {
        axios.get('http://localhost:5000/admin/addcollege/getall')
            .then((result) => {
                console.log(result.status);
                setListing(result.data)
                setFilterListing(result.data)
            })
            .catch((err) => {
                console.log(err);
                toast.error('failed to fetch College list')

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
        const filteredListing = filterListing.filter(col => col.courses.toLowerCase().includes(listing.toLowerCase()))
        setListing(filteredListing)
        
      }

    return (
        <div className='relative w-full'>
            <div className=' flex  flex-col md:min-w-[600px] overflow-x-hidden lg:max-w-[1535px] slider-container'>
                <Slider {...setting}>

                    <div className='relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/photo_gallery/WhatsApp%20Image%202022-12-04%20at%207.29.50%20PM.jpeg" alt="" />

                        <div className='text-white hover:underline absolute w-20 bottom-1 right-[500px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-md w-[450px]'>Indian Institute of Technology,Roorkee </h1>
                        </div>
                    </div>



                    <div className=' relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/home/Jaykishan%20Pipaliya.jpeg" alt="" />
                        <div className='text-white hover:underline absolute w-20 bottom-1 right-[500px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Shri Ram College of Commerce,New Delhi</h1>
                        </div>
                    </div>
                    <div className=' relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/photo_gallery/WhatsApp%20Image%202022-12-04%20at%207.29.50%20PM.jpeg" alt="" />
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
                        <input className='bg-transparent outline-none text-gray-400 w-[80%] h-[100%]'
                         type="text"
                         onChange={applysearch}
                         placeholder='Search for colleges,courses,exams and more' />
                        <button  className='bg-orange-400 px-auto w-[15%] border-none h-[100%] text-white'>Search</button>
                    </div>
                </div>

            </div>
            {/* top college */}
            <hr />
            <div className='md:ml-36 my-3'>
                <h1 className='text-3xl font-semibold text-gray-900'>Top Colleges</h1>
            </div>
            <div className=' md:flex-row md:ml-36 justify-start border overflow-x-scroll p-3 rounded-sm border-gray-400 slider-container w-[80%] '>
                <Slider {...settings}>
                    <button onClick={(e) => filterByCategory('btech')} ><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[90px]'>
                        <h1 className='border-[2px] py-1 px-2 border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 rounded-3xl w-[80px]'>B-tech</h1>

                    </div>
                    </button>
                    <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[90px]'>
                        <h1 className='border-[2px]  px-3 border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 py-1 pl-2 ml-4 rounded-3xl w-[80px]'>M-tech</h1>
                    </div>
                    </Link>
                    <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>BA</h1>
                    </div>
                    </Link>
                    <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>BBA</h1>
                    </div>
                    </Link>
                    <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-[3px]  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>MBA</h1>
                    </div>
                    </Link>
                    <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>BCA </h1>
                    </div>
                    </Link>

                    <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[80px]'>B.Com</h1>
                    </div>
                    </Link>
                    <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px]   border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 py-[3px] px-3 rounded-3xl w-[60px]'>MBA</h1>
                    </div>
                    </Link>
                    <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[70px]'>B.sc</h1>
                    </div>
                    </Link>
                    <Link href="">
                        <div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                            <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[80px]'>MBBS</h1>
                        </div>
                    </Link>


                </Slider>

            </div>
            <hr className='my-3' />
            <div className='md:ml-36  flex h-[45px] justify-start w-[80%] bg-[#506c73]'>
                <div className='border-e border-s flex justify-start items-center'>
                    <h1 className='text-white text-[18px] w-[100px] ml-4 '>Rank</h1>
                </div>
                <div className='border-r flex justify-start items-center'>
                    <h1 className='text-white text-[18px] w-[485px] ml-2'>College</h1>
                </div>
                <div className='border-r flex justify-start items-center'>
                    <h1 className='text-white text-[18px] w-[300px] ml-2'>Courses</h1>
                </div>
                <div className='border-r flex justify-start items-center'>
                    <h1 className='text-white text-[18px] w-[300px] ml-2'>collegeDetail</h1>
                </div>
            </div>
            {
                listing.map((item, index) => {
                    const backgroundcolor = (items) => {
                        if ((items) % 2 === 0) {
                            return 'bg-gray-100'
                        }
                        else {
                            return 'bg-white'
                        }
                    }
                    return <div className={`md:ml-36 h-[100px] flex  justify-start font-sans  w-[80%]  ${backgroundcolor(index + 1) } `} key={item._id}>
                        <div className='border-e border-s flex justify-start  items-start'>
                            <h1 className='text-gray-600 text-[18px] w-[100px]  ml-4 '>#{index + 1}</h1>
                        </div>
                        <div className='w-[500px] border-e flex'>
                        <div className='w-[60px] flex justify-center  items-start mt-2'>
                            <div className='flex justify-center items-center h-[50px] ml-3 w-[50px] rounded-[50%] border '>
                                <img className='h-[33px] w-[33px]  overflow-hidden  ' src={item.image} alt="" />
                            </div>
                        </div>
                        <Link className="" href={'/mainpages/viewCollege/' + item._id}>
                        <div className='w-[426px] flex-col justify-start   items-start '>
                            <p className='text-[#56909e] ml-3 text-[17px] mt-2 font-[550]'>{item.collegeName}</p>
                            <p className='text-[14px] text-gray-600 ml-3 font-normal'>{item.collegeAddress}</p>
                        </div>
                        </Link>
                        </div>
                        <div className='border-r flex justify-start items-start'>
                            <h1 className='text-gray-500 mt-3 text-[18px] w-[300px] ml-2'>{item.courses}</h1>
                        </div>
                        <div className='border-r flex  justify-start items-start'>
                            <h1 className='text-gray-600 mt-3 text-[18px] w-[300px] ml-2'>{}</h1>
                        </div>
                    </div>
                })}
        </div>
    )
}

export default CollegeListing