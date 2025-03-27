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
    // const [isReplaced, setIsReplaced] = useState(false)

    // const handleButtton = () => {
    //     setIsReplaced((prevState) => !prevState);
    // }
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
        slidesToShow: 3,
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
            <div className=' flex  flex-col md:min-w-[600px]  overflow-x-hidden lg:max-w-[1535px] slider-container  '>
                <Slider {...setting}>

                    <div className='relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[570px] min-h-[250px]' src="https://media.istockphoto.com/id/1257574456/photo/modern-school-exterior-3d-illustration.jpg?s=612x612&w=0&k=20&c=1vy2zhje52B2LfHXtOC-PJ1OFsu3gjfVwu_SXnTExxw=" alt="image" />

                        <div className='text-white hover:underline absolute w-20  bottom-1 lg:right-[300px] md:right-[250px] right-[100px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-lg  w-[350px]'>K.V.S
                                Ayodhya </h1>
                        </div>
                    </div>



                    <div className=' relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[570px] min-h-[250px]' src="https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0=" alt="image" />
                        <div className='text-white hover:underline absolute w-20  bottom-1 lg:right-[300px] md:right-[250px] right-[100px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-lg  w-[350px]'>Lucknow Public School </h1>
                        </div>
                    </div>
                    <div className=' relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[570px] min-h-[250px]' src="https://media.istockphoto.com/id/156919428/photo/brandywine-heights-high-school-in-topton-pennsylvania.jpg?s=612x612&w=0&k=20&c=sQnVkYlvQQjBB_GIPrnqahzaiL6j1_JlzuCnFwPe4Y8=" alt="image" />
                        <div className='text-white hover:underline absolute w-20  bottom-1 lg:right-[300px] md:right-[250px] right-[100px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[350px]'>Central Acadmy</h1>
                        </div>
                    </div>

                </Slider>
                <div className='absolute md:top-[27%] top-[3%] md:left-[25%] left-[20%] lg:left-[25%] flex-col w-[60%] '>
                    <div className='flex justify-center items-center bg-transparent'>
                        <h1 className=' text-xl lg:hidden text-white font-semibold '>Find Top University in india</h1>
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
                    <div className='flex justify-between overflow-hidden lg:mt-10 lg:h-[55px] h-[40px] w-[110%] md:w-[90%] rounded-3xl  md:rounded-sm bg-white items-center'>
                        <h1 className="text-gray-400 w-[10%] md:pl-4 " ><RiFindReplaceLine /></h1>
                        <input className='bg-transparent outline-none text-gray-400 w-[50%] overflow-x-hidden lg:w-[80%] h-[100%]'
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder='Search for colleges' />
                        <button onClick={applysearch} className='bg-orange-400  lg:w-[15%] w-[35%]  border-none h-[100%] text-white'>Search</button>
                    </div>
                </div>

            </div>

            <hr />

            {/* courses */}
            <div className='md:ml-36 my-3'>
                <h1 className='text-3xl font-semibold text-gray-700'>All School Bords</h1>
            </div>

            {/* <div className='md:w-[80%] ml-3 mr-3 border p-3 md:ml-36  rounded-sm border-gray-400  mb-3'>
                <div className=' flex-row  justify-start  min-w-[1068px]   '>
                    <Slider className='' {...settings}>
                        <button onClick={(e) => filterByCategory('btech')} className='overflow-x' ><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[110px]'>
                            <h1 className='border-[2px] py-1 px-2 border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 rounded-3xl w-[100px]'>UP-Bord</h1>

                        </div>
                        </button>
                        <button onClick={(e) => filterByCategory('Mtech')} className='overflow-x' href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[120px]'>
                            <h1 className='border-[2px]  px-3 border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 py-1 pl-2 ml-4 rounded-3xl w-[110px]'>CBSC-Bord</h1>
                        </div>
                        </button>

                        <button onClick={(e) => filterByCategory('BCA')} href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[110px]'>
                            <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[100px]'>ICSE-Bord </h1>
                        </div>
                        </button>

                    </Slider>

                </div>

            </div> */}
            <div className=' md:mx-40 overflow-hidden  my-5'>
                <div className='md:flex  mb-4 flex-wrap justify-start items-center'>
                    <div className='h-[270px] flex-col relative md:w-[380px]  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
                        <div className='flex'>

                            <div className='w-[250px]   h-[100px] '>
                                <h1 className='ml-14 mt-9 text-ls md:text-xl hover:text-orange-500 font-semibold text-gray-700'>UP-Bord schools</h1>
                                <p className='ml-14 pt-4  text-gray-400 text-sm font-medium'>UP-Bord school ranked based on real data</p>

                            </div>
                            <div className='h-[100px]'>
                                <img className='md:h-[100px]  md:w-[100px] mt-9 h-[50px] w-[50px] ' src="\—Pngtree—illustration of graduate college student_6293725.png" alt="image" />
                            </div>

                        </div>
                        <div>
                            <Link className='absolute bottom-8 left-5' href={'/mainpages/upbordlisting'}>
                                <p className='ml-16 mt-4 inline-block text-gray-500 hover:text-blue-600'>Top ranked Up-Bord Schools  < SlArrowRight className='inline-block hover:text-blue-600 text-gray-500  ml-1 text-[10px] font-extrabold' /></p>
                            </Link>
                        </div>

                    </div>
                    <div className='h-[270px] flex-col relative md:w-[380px] md:ml-4  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
                        <div className='flex'>

                            <div className='w-[250px]   h-[100px] '>
                                <h1 className='ml-14 mt-9 text-lg md:text-xl hover:text-orange-500 font-semibold text-gray-700'>CBSC-Bord Schools</h1>
                                <p className='ml-14 pt-4  text-gray-400 text-sm font-medium'>UP-CBSE school ranked based on real data</p>

                            </div>
                            <div className='h-[100px]'>
                                <img className='md:h-[100px]  md:w-[100px] mt-9 h-[50px] w-[50px] ' src="/10088-removebg-preview.png" alt="" />
                            </div>

                        </div>
                        <div>
                            <Link className='absolute bottom-8 left-5' href={"/mainpages/cbsebordlisting"}>
                                <p className='ml-16 mt-4 inline-block text-gray-500 hover:text-blue-600'>Top ranked CBSC-Bord Schools < SlArrowRight className='inline-block hover:text-blue-600 text-gray-500  ml-1 text-[10px] font-extrabold' /></p>
                            </Link>
                        </div>

                    </div>
                    <div className='h-[270px] flex-col relative md:w-[380px] md:ml-4 w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
                        <div className='flex'>

                            <div className='w-[250px] h-[100px] '>
                                <h1 className='ml-14 mt-9 text-lg md:text-xl hover:text-orange-500 font-semibold text-gray-700'>ICSE-Bord School</h1>
                                <p className='ml-14 pt-4  text-gray-400 text-sm font-medium'>ICSE-Bord school ranked based on real data</p>

                            </div>
                            <div className='h-[100px]'>
                                <img className='md:h-[100px]  md:w-[100px] mt-9 h-[50px] w-[50px] ' src="/Na_Nov_28-removebg-preview.png" alt="image" />
                            </div>

                        </div>
                        <Link className='absolute bottom-8 left-5' href={"/mainpages/icsebordlisting"}>
                            <p className='ml-16 mt-4 inline-block hover:text-blue-600 text-gray-500'>Top ranked ICSE-Bord Schools  < SlArrowRight className='inline-block  hover:text-blue-600 text-gray-500  ml-1 text-[10px] font-bold' /></p>
                        </Link>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default UniversityListing