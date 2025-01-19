'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import Slider from 'react-slick'
import { SlArrowRight } from "react-icons/sl";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiFindReplaceLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UniversityListing = () => {
    const [inputValue, setInputValue] = useState('')
    const [listing, setListing] = useState([])
    const [filterListing, setFilterListing] = useState([])
    const [card, setCard] = useState([])

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
        axios.get('http://localhost:5000/admin/adduniversity/getall')
            .then((result) => {
                console.log(result.status);
                setListing(result.data)
                setFilterListing(result.data)
                setCard(result.data)
            })
            .catch((err) => {
                console.log(err);
                toast.error('failed to fetch College list')

            });
    }
    useEffect(() => {
        fetchRoadmapListing()
    }, [])

    const applysearch = () => {
        if (inputValue.trim() === '') {
            console.log('Input field is empty. No filtering applied.');
            return; // Exit if input is empty
          }
          
        setListing(listing.filter((listing) => {
          return (listing.universityName.toLowerCase().includes(inputValue.toLowerCase()))
        }))
      }
    
      const filterByCategory = (listing) => {
        console.log(listing);
        const filteredListing = filterListing.filter(col => col.courses.toLowerCase().includes(listing.toLowerCase()))
        setListing(filteredListing)
        
      }

    return (
        <div className='relative '>
            <div className=' flex  flex-col md:min-w-[600px]  lg:max-w-[1535px] slider-container  '>
                <Slider {...setting}>

                    <div className='relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://www.rmlau.ac.in/images/about.jpg" alt="" />

                        <div className='text-white hover:underline absolute w-20  bottom-1 lg:right-[500px] md:right-[300px] right-[150px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-lg   w-[450px]'>Dr. Rammanohar Lohia Avadh University
                                Ayodhya </h1>
                        </div>
                    </div>



                    <div className=' relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://english.cdn.zeenews.com/sites/default/files/2022/12/18/1130751-lucknow-university-rules.jpg" alt="" />
                        <div className='text-white hover:underline absolute w-20  bottom-1 lg:right-[500px] md:right-[300px] right-[150px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-lg  w-[450px]'>Lucknow University </h1>
                        </div>
                    </div>
                    <div className=' relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/photo_gallery/WhatsApp%20Image%202022-12-04%20at%207.29.50%20PM.jpeg" alt="" />
                        <div className='text-white hover:underline absolute w-20  bottom-1 lg:right-[500px] md:right-[300px] right-[150px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Indian Institute of Management, Ahmedabad</h1>
                        </div>
                    </div>

                </Slider>
                <div className='absolute lg:top-[15%] md:top-[10%] top-[5%] md:left-[25%] left-[20%] lg:left-[25%] flex-col w-[60%] justify-center items-center'>
                    <div className='flex justify-center items-center bg-transparent'>
                        <h1 className=' text-3xl lg:hidden text-white font-semibold '>Find Top University in india</h1>
                        <div className='lg:text-2xl hidden lg:block text-md text-white font-semibold '>
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    500,
                                    'Find Top University in india', // initially rendered starting point
                                    1000,
                                    'Find over 120+ University in india',
                                    1000,
                                    'Find over exam  University in india',
                                    1000,
                                    'Find Top review University in india',
                                    500,
                                ]}
                                speed={50}
                                style={{ fontSize: '2em' }}
                                repeat={Infinity}

                            />
                        </div>
                    </div>
                    <div className='flex justify-between overflow-hidden lg:mt-10 lg:h-[55px] h-[40px] w-[90%]   rounded-sm bg-white items-center'>
                        <h1 className="text-gray-400 w-[5%] pl-4" ><RiFindReplaceLine /></h1>
                        <input className='bg-transparent outline-none text-gray-400 w-[50%] lg:w-[80%] h-[100%]'
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder='Search for colleges,courses' />
                        <button onClick={applysearch} className='bg-orange-400  lg:w-[15%] w-[25%]  border-none h-[100%] text-white'>Search</button>
                    </div>
                </div>

            </div>

            <hr />

            {/* courses */}
            <div className='md:ml-36 my-3'>
                <h1 className='text-3xl font-semibold text-gray-900'>Top University</h1>
            </div>
             
            <div className=' flex-row md:ml-36 justify-start border p-3 overflow-x-scroll rounded-sm border-gray-400  w-[80%] '>
                <Slider {...settings}>
                    <button onClick={(e) => filterByCategory('btech')} className='overflow-x' ><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[90px]'>
                        <h1 className='border-[2px] py-1 px-2 border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 rounded-3xl w-[80px]'>Btech</h1>

                    </div>
                    </button>
                    <button onClick={(e) => filterByCategory('Mtech')}  className='overflow-x' href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[90px]'>
                        <h1 className='border-[2px]  px-3 border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 py-1 pl-2 ml-4 rounded-3xl w-[80px]'>M-tech</h1>
                    </div>
                    </button>
                    <button onClick={(e) => filterByCategory('BA')} className='overflow-x' href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>BA</h1>
                    </div>
                    </button>
                    <button onClick={(e) => filterByCategory('BBA')} className='' href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>BBA</h1>
                    </div>
                    </button>
                    <button onClick={(e) => filterByCategory('MBA')} href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-[3px]  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>MBA</h1>
                    </div>
                    </button>
                    <button onClick={(e) => filterByCategory('BCA')} href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>BCA </h1>
                    </div>
                    </button>

                    <button onClick={(e) => filterByCategory('B.Com')} href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[80px]'>B.Com</h1>
                    </div>
                    </button>


                </Slider>

            </div>



            <hr className='my-3' />
            {/*  college listing name */}
            <div className="overflow-x-scroll lg:overflow-x-auto ">
                <table className="w-[80%] md:mx-36 border-collapse border overflow-x-auto  border-gray-200">
                    <thead>
                        <tr className="bg-[#506c73] text-white text-[18px] h-[50px] font-normal">
                            <th className="px-4 py-2 text-white text-[18px] font-normal text-left ">Rank</th>
                            <th className="pl-4 py-2 text-white text-[18px] font-normal max-w-[70px] text-left"></th>
                            <th className="px-4 py-2 text-white text-[18px] font-normal max-w-[270px] text-left">University-Name</th>
                            <th className="px-4 py-2 text-white text-[18px] font-normal  max-w-[200px]: text-left">Courses</th>
                            <th className="px-4 py-2  text-white text-[18px] font-normal max-w-[120px]: text-left">College-Details</th>

                        </tr>
                    </thead>
                    <tbody className=''>
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
                                return <tr className={`h-[100px] ${backgroundcolor(index + 1)} `} key={item._id} >
                                    <td className="px-4 py-2 ">#{index + 1}</td>
                                    <td className="pl-4 py-2 max-w-[70px]"><div className='flex justify-center items-center h-[50px] ml-3 w-[50px] rounded-[50%]  border '>
                                        <img className='h-[33px] w-[33px]  rounded-[50%] overflow-hidden ' src={item.image} alt="" />
                                    </div></td>

                                    <td className="pr-4 py-2  max-w-[290px] min-w-[250px] text-sm md:text-[18px]  font-[550] text-[#84c3d3] "><Link href={'/mainpages/viewUniversity/' + item._id}> {item.universityName} <h1 className='text-sm font-normal text-gray-600 md:overflow-auto overflow-hidden'>{item.universityAddress} </h1> </Link></td>

                                    <td className="px-4 py-2 max-w-[200px] text-gray-500 mt-3 md:text-[18px] text-[17px] ">{item.courses}</td>
                                    <td className="px-4 py-2 text-lg text-gray-500 max-w-[120px] ">{item.universityDetail}</td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </div>

            <hr className='my-3' />

            {/*  card */}
            <h1 className='text-3xl my-3 text-gray-900 font-semibold md:mx-36'>Top Five University</h1>
            <div className='md:mx-36  lg:max-w-[80%]'>
                <div className='flex overflow-x-auto  gap-4'>
                    {
                        card.map((item, index) => {
                            if(index<5){
                        return  <div className=" flex-col  min-h-[380px] border min-w-[340px] rounded-md mb-3 gap-4">
                        <div className='w-[full] relative  h-[130px] rounded-md'>
                            {/* background image */}
                            <img className='w-[340px] h-[140px] rounded-t-md object-cover' src={item.image2} alt="" />
                             <div className='absolute top-9 left-3 bg-transparent rounded-t-md  h-[100px]    text-md text-white font-semibold uppercase p-1 '>
                             <Link href={'/mainpages/viewUniversity/' + item._id}>
                             <div className='flex justify-between items-center gap-2'>
                                <div className='h-[50px] w-[50px]  flex justify-center items-center border rounded-[50%]'> <img className='h-[40px] w-[42px]  rounded-[50%]' src={item.image} alt="" /></div>
                                <h1 >{item.universityName} </h1>
                                {/* adddress */}
                                </div>
                                <h1 className='text-sm  text-white text-md font-semibold md:ml-10'>{item.universityAddress}</h1></Link>
                                {/* adddress */}

                            </div>
                        </div>
                        <div className=' flex-col w-full  gap-4 h-[70px]'>
                            <h1 className='text-md ml-3 text-gray-500 cursor-pointer mt-3 mr-4 hover:text-orange-500  '> Courses = {item.courses} </h1>
                        </div>
                        <hr />
                        <div className=' flex-col gap-4'>
                            <div className='flex justify-between   text-gray-500 items-center'>
                                <h1 className='text-md ml-3 '>  Ranked 4 out of 444</h1>
                            </div>
                            <hr className='mt-3' />
                            <Link href={'/mainpages/viewUniversity/' + item._id}><div className='flex justify-between py-2 hover:text-orange-500  text-gray-500 items-center'>
                                <h1 className='  text-[16px] font-medium ml-3'>University-info</h1>
                                {/* grater then ka sign svg me  */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='h-5 w-6 font-normal   mr-3'>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            </Link>
                            <hr />
                            <div className='flex justify-between py-2 hover:text-orange-500  text-gray-500 items-center'>
                                <h1 className=' text-[16px] font-medium ml-3'>University-courses</h1>
                                {/* grater then ka sign svg me  */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='h-5 w-6 font-normal   mr-3'>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <hr />
                            <div className='flex justify-between py-2 hover:text-orange-500  text-gray-500 items-center'>
                                <h1 className=' text-[16px] font-medium ml-3'>University-fee</h1>
                                {/* grater then ka sign svg me  */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='h-5 w-6 font-normal   mr-3'>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                       }}
                    )}
                </div>
            </div>
        </div>
    )
}

export default UniversityListing