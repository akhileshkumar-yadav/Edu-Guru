'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import Slider from 'react-slick'
import Navbar from './navbar';
import Footer from './footer';
import AboutUs from './mainpages/aboutUs/page';
import { SlArrowRight } from "react-icons/sl";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiFindReplaceLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = () => {

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
  const settings2 = {

    infinite: true,
    slidesToShow: 8,
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
        console.log(alert("enter college name"));
        
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

    <div className=''>
      
       <Navbar  />
       
      <div className='font-sans relative'>

        <div className=' flex md:min-w-[1536px] flex-col md:w-[1536px] slider-container  '>
          <Slider {...setting}>

            <div className='  relative'>
              <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/photo_gallery/WhatsApp%20Image%202022-12-04%20at%207.29.50%20PM.jpeg" alt="" />

              <div className='text-white hover:underline hidden md:block absolute w-20  bottom-1 right-[500px]'>
                <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Indian Institute of Technology,Roorkee </h1>
              </div>
            </div>
            <div className=' relative'>
              <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/home/Jaykishan%20Pipaliya.jpeg" alt="" />
              <div className='text-white hover:underline absolute w-20 hidden md:block  bottom-1 right-[500px]'>
                <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Shri Ram College of Commerce,New Delhi</h1>
              </div>
            </div>
            <div className=' relative'>
              <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/photo_gallery/WhatsApp%20Image%202022-12-04%20at%207.29.50%20PM.jpeg" alt="" />
              <div className='text-white hover:underline absolute hidden md:block w-20  bottom-1 right-[500px]'>
                <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Indian Institute of Management, Ahmedabad</h1>
              </div>
            </div>

          </Slider>
          <div className='absolute  md:top-[10%] top-[3%] md:left-[25%] left-[20%] lg:left-[25%] flex-col w-[60%] justify-center items-center'>
            <div className='flex justify-center items-center bg-transparent'>
              <h1 className=' text-3xl lg:hidden text-white font-semibold '>Find Top University in india</h1>
              <div className='lg:text-2xl hidden lg:block text-md text-white font-semibold '>
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    'Find Top University in india', // initially rendered starting point
                    1000,
                    'Find Top College in india',
                    1000,
                    'Find Top  School in india',
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
              <button onClick={applysearch} className='bg-orange-400   lg:w-[15%] w-[25%]  border-none h-[100%] text-white'>Search</button>
            </div>
            {/* <div className='flex justify-between mt-6 text-white font-semibold  items-center'>
            <h1>Your recent visit</h1>
            <span className='bg-transparent border px-2 rounded-md h-[30px] border-gray-300 flex justify-center items-center'>IIT Bombay,Mumbai</span>
            <span className='bg-transparent border rounded-md h-[30px] border-gray-300 px-2 flex justify-center items-center'>IICD</span>
            <span className='bg-transparent border rounded-md h-[30px] border-gray-300 px-2 flex justify-center items-center'>IIT Ahemdabad,Ahemdabad</span>
            <span className=' border bg-orange-500 border-gray-300 rounded-md h-[40px] px-7 flex justify-center items-center'>Need Counslling</span>
          </div> */}
          </div>

        </div>
             <div className=' md:mx-40 overflow-hidden  my-5'>
          <h1 className='text-3xl mb-4 text-gray-900 font-semibold '>Explore Programs</h1>
          
          <div className='md:flex  mb-4 flex-wrap justify-start items-center'>
            <div className='h-[270px] flex-col relative md:w-[380px]  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
              <div className='flex'>

                <div className='w-[250px]   h-[100px] '>
                  <h1 className='ml-14 mt-9 text-xl md:text-3xl hover:text-orange-500 font-semibold text-gray-700'>Top University</h1>
                  <p className='ml-14 pt-4  text-gray-400 text-sm font-medium'>College ranked based on real data</p>

                </div>
                <div className='h-[100px]'>
                  <img className='md:h-[100px]  md:w-[100px] mt-9 h-[50px] w-[50px] ' src="\—Pngtree—illustration of graduate college student_6293725.png" alt="" />
                </div>

              </div>
              <Link className='absolute bottom-8 left-5' href={'/mainpages/universityListing'}>
                <p className='ml-16 mt-4 inline-block text-gray-500'>Top ranked college in india  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
              </Link>

            </div>
            <div className='h-[270px] flex-col relative md:w-[380px] md:ml-4  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
              <div className='flex'>

                <div className='w-[250px]   h-[100px] '>
                  <h1 className='ml-14 mt-9 text-xl md:text-3xl hover:text-orange-500 font-semibold text-gray-700'>Top College</h1>
                  <p className='ml-14 pt-4  text-gray-400 text-sm font-medium'>College ranked based on real data</p>

                </div>
                <div className='h-[100px]'>
                  <img className='md:h-[100px]  md:w-[100px] mt-9 h-[50px] w-[50px] ' src="10088-removebg-preview.png" alt="" />
                </div>

              </div>
              <Link className='absolute bottom-8 left-5' href={"/mainpages/collegeListing"}>
                <p className='ml-16 mt-4 inline-block text-gray-500'>Top ranked college in india  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
              </Link>

            </div>
            <div className='h-[270px] flex-col relative md:w-[380px] md:ml-4  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
              <div className='flex'>

                <div className='w-[250px]   h-[100px] '>
                  <h1 className='ml-14 mt-9 text-xl md:text-3xl hover:text-orange-500 font-semibold text-gray-700'>Top School</h1>
                  <p className='ml-14 pt-4  text-gray-400 text-sm font-medium'>School ranked based on real data</p>

                </div>
                <div className='h-[100px]'>
                  <img className='md:h-[100px]  md:w-[100px] mt-9 h-[50px] w-[50px] ' src="Na_Nov_28-removebg-preview.png" alt="" />
                </div>

              </div>
              <Link className='absolute bottom-8 left-5' href={"/mainpages/schoolListing"}>
                <p className='ml-16 mt-4 inline-block text-gray-500'>Top ranked School in india  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
              </Link>

            </div>
            
          </div>
        </div> 


        {/* card end */}
        <hr className='my-4' />
        <div className='md:ml-36 my-3'>
                <h1 className='text-3xl font-semibold text-gray-900'>Top University</h1>
            </div>
             
             <div className='md:w-[80%] ml-3 mr-3 border p-3 md:ml-36  rounded-sm border-gray-400 overflow-x-auto mb-3'>
            <div className=' flex-row  justify-start  min-w-[1068px]   '>
                <Slider className='' {...settings}>
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
            </div>



            <hr className='my-3' />
            {/*  college listing name */}
            <div className="overflow-x-scroll mb-4 lg:overflow-x-auto ">
                <table className="md:w-[80%] min-w-[968px] hover:shadow-indigo-300 shadow-md  hover:border-2 hover:border-indigo-300 md:mx-36 border-collapse border overflow-x-auto  border-gray-200">
                    <thead>
                        <tr className="bg-[#506c73] text-white text-[18px] h-[50px] font-normal">
                            <th className="px-4 py-2 text-white text-[18px] font-normal text-left ">Rank</th>
                            <th className="pl-4 py-2 text-white text-[18px] font-normal max-w-[70px] text-left"></th>
                            <th className="px-4 py-2 text-white text-[18px] font-normal max-w-[270px] text-left">University-Name</th>
                            <th className="px-4 py-2 text-white text-[18px] font-normal  max-w-[200px]: text-left">Courses</th>
                            <th className="px-4 py-2  text-white text-[18px] font-normal max-w-[120px]: text-left">University-Details</th>

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
                                    <td className="px-4 py-2 text-gray-500 ">#{index + 1}</td>
                                    <td className="pl-4 py-2 max-w-[70px]"><div className='flex justify-center items-center h-[50px] ml-3 w-[50px] rounded-[50%]  border '>
                                        <img className='h-[33px] w-[33px]  rounded-[50%] overflow-hidden ' src={item.image} alt="" />
                                    </div></td>

                                    <td className="pr-4 py-2  max-w-[290px] min-w-[250px] text-sm md:text-[18px]  font-[550] text-[#84c3d3] "><Link href={'/mainpages/viewUniversity/' + item._id}> {item.universityName} <h1 className='text-sm font-normal text-gray-600 md:overflow-auto overflow-hidden'>{item.universityAddress} </h1> </Link></td>

                                    <td className="px-4 py-2 max-w-[200px] text-gray-500 mt-3 md:text-[18px] text-[17px] ">{item.courses}</td>
                                    <td className="px-4 py-2 text-gray-500  max-w-[120px] ">{item.universityDetail}</td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </div>
    

      
        <hr className=' mt-4' />
        <div className='md:ml-36 hover:shadow-indigo-300 shadow-md  mt-4 border-2 hover:border-indigo-300 md:w-[80%]'>
        <AboutUs/>
        </div>
      </div>
      <hr className='mb-4 mt-4' />

    <div className="max-w-[80%] bg-gradient-to-b from-indigo-100 md:mb-3 rounded-md hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2 px-4 py-10 mt-3 sm:px-6 lg:px-8 lg:py-14 md:ml-36">
      <div className="max-w-[798px] bg-gradient-to-b from-gray-100 md:p-4 shadow-gray-300 shadow-xl  mx-auto">
        {/* Grid */}
        <div className="grid gap-12 ">
          <div>
            <h2 className="text-3xl text-gray-700 font-bold lg:text-4xl dark:text-white">
              Our vision
            </h2>
            <p className="mt-3   text-lg text-gray-700 dark:text-neutral-400">
            The vision of "TopFiveEduGuru" is to empower students and parents by providing accurate, unbiased, and transparent information about colleges. The platform aims to simplify the decision-making process through data-driven insights and user-friendly tools, ensuring that users can make well-informed choices. By promoting transparency through authentic reviews and feedback, the project aspires to bridge the gap between students and quality education.
            </p>
          </div>
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-6 text-gray-800 dark:text-white"
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
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Transforming College Selection

                </h3>
                <p className="mt-1 text-gray-700 hover:text-blue-300 dark:text-neutral-400">
                Making the journey of choosing the right college easy, efficient, and stress-free through innovative tools.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-6 text-gray-800 dark:text-white"
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="grow ">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Empowering Students and Parents
                </h3>
                <p className="mt-1 text-gray-700 hover:text-blue-300 dark:text-neutral-400">
                Providing accurate insights and unbiased information to enable informed and confident decisions.


                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex gap-x-5 sm:gap-x-8">
              <svg
                className="shrink-0 mt-2 size-6 text-gray-800 dark:text-white"
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
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Shaping a Brighter Future
                </h3>
                <p className="mt-1 text-gray-700 hover:text-blue-300 dark:text-neutral-400">
                Creating opportunities for students to align their education with their aspirations, fostering growth and success.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Grid */}
      </div>
    </div>
    {/* End Icon Blocks */}


      <Footer />
    </div>

  )
}

export default page