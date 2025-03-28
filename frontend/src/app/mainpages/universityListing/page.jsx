'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import Slider from 'react-slick'
import { SlArrowRight } from "react-icons/sl";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiFindReplaceLine } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "orange",
                borderRadius: "50%",
                marginRight: "12px",
                zIndex: "10"
            }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "orange",
                borderRadius: "50%",
                marginLeft: "12px",
                zIndex: "10"
            }}
            onClick={onClick}
        />
    );
};
const UniversityListing = () => {
    const [inputValue, setInputValue] = useState('')
    const [listing, setListing] = useState([])
    const [listing1, setListing1] = useState([])
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
        slidesToShow: 9, // By default 9 slides dikhegi (large screens ke liye)
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
        responsive: [
            {
                breakpoint: 1024, // Jab screen width 1024px se kam hogi
                settings: {
                    slidesToShow: 6, // 6 slides dikhegi
                },
            },
            {
                breakpoint: 768, // Jab screen width 768px se kam hogi
                settings: {
                    slidesToShow: 5, // 3 slides dikhegi
                },
            },
            {
                breakpoint: 480, // Jab screen width 480px se kam hogi
                settings: {
                    slidesToShow:3, // 2 slides dikhegi
                },
            },
        ],
    };
    
    const settings2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Large screens par 3 slides dikhegi
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        
        responsive: [
            {
                breakpoint: 768, // Jab screen width 768px se kam hogi
                settings: {
                    slidesToShow: 1, // Small screens par 1 slide dikhegi
                },
            },
        ],
    };
    
    const fetchRoadmapListing = () => {
        axios.get('http://localhost:5000/admin/adduniversity/getall')
            .then((result) => {
                console.log(result.status);
                setListing(result.data);
                setListing1(result.data);
                setFilterListing(result.data);
                setCard(result.data);
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
        <div className='relative overflow-x-hidden'>
            <div className=' flex  flex-col md:min-w-[600px] overflow-x-hidden lg:max-w-[1535px] slider-container  '>
                <Slider {...setting}>

                    <div className='relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://www.rmlau.ac.in/images/about.jpg" alt="rmalu" />

                        <div className='text-white hover:underline absolute w-20  bottom-1 lg:right-[500px] md:right-[300px] right-[150px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-lg w-[450px]'>Dr. Rammanohar Lohia Avadh University
                                Ayodhya </h1>
                        </div>
                    </div>



                    <div className=' relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://english.cdn.zeenews.com/sites/default/files/2022/12/18/1130751-lucknow-university-rules.jpg" alt="lu" />
                        <div className='text-white hover:underline absolute w-20  bottom-1 lg:right-[500px] md:right-[300px] right-[150px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-lg w-[450px]'>Lucknow University </h1>
                        </div>
                    </div>
                    <div className=' relative'>
                        <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/photo_gallery/WhatsApp%20Image%202022-12-04%20at%207.29.50%20PM.jpeg" alt="IIT" />
                        <div className='text-white hover:underline absolute w-20  bottom-1 lg:right-[500px] md:right-[300px] right-[150px]'>
                            <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Indian Institute of Management, Ahmedabad</h1>
                        </div>
                    </div>

                </Slider>
                <div className='absolute lg:top-[5%]  md:left-[25%] left-[20%] lg:left-[25%] flex-col w-[60%] justify-center items-center'>
                    <div className='flex justify-center md:items-center items-start mt-10 bg-transparent'>
                        <h1 className=' text-3xl lg:hidden text-white font-semibold mb-7'>Top University</h1>
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
                    <div className='flex justify-between overflow-hidden lg:mt-10 lg:h-[55px] h-[40px] md:w-[90%]  w-[90%] md:rounded-sm  rounded-3xl bg-white items-center'>
                        <h1 className="text-gray-400 w-[5%] pl-4 pr-3" ><RiFindReplaceLine /></h1>
                        <input className='bg-transparent outline-none text-gray-400 w-[50%] lg:w-[80%] h-[100%]'
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder='Search for college' />
                        <button onClick={applysearch} className='bg-orange-400  lg:w-[15%] w-[25%]  border-none h-[100%] text-white'>Search</button>
                    </div>
                </div>

            </div>

            <hr />

            {/* courses */}
            <div className='md:ml-36 my-3'>
                <h1 className='text-3xl font-semibold text-gray-900'>Top University</h1>
            </div>

            <div className=' flex-row md:ml-36 justify-start border md:p-3 p-1 rounded-sm border-gray-400 ml-2 mr-4 w-[90%] md:w-[80%] '>
                <Slider {...settings}>

                    <button onClick={(e) => filterByCategory('btech')} className=' ml-3 text-sm' ><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1 px-2 border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 rounded-3xl w-[80px]'>Btech</h1>

                    </div>
                    </button>
                    <button onClick={(e) => filterByCategory('Mtech')} className=' ml-3' ><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px]  px-3 border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 py-1 pl-2 ml-4 rounded-3xl w-[80px]'>Mtech</h1>
                    </div>
                    </button>
                    <button onClick={(e) => filterByCategory('BA')} className='ml-3' ><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>BA</h1>
                    </div>
                    </button>
                    <button onClick={(e) => filterByCategory('BBA')} className='ml-3'><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>BBA</h1>
                    </div>
                    </button>
                    <button onClick={(e) => filterByCategory('MBA')} className='ml-3'><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-[3px]  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>MBA</h1>
                    </div>
                    </button>

                    <button onClick={(e) => filterByCategory('BCA')} className='ml-3'><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[60px]'>BCA </h1>
                    </div>
                    </button>

                    <button onClick={(e) => filterByCategory('B.Com')} className='ml-3'><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                        <h1 className='border-[2px] py-1  border-l-green-400 border-r-blue-400 border-t-red-400 border-b-yellow-400 px-3 rounded-3xl w-[80px]'>B.Com</h1>
                    </div>
                    </button>


                </Slider>

            </div>

            <hr className='my-3' />
            {/*  college listing name */}
            <div className='w-full'>
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
                    <tbody>
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
                                        <img className='h-[33px] w-[33px]  rounded-[50%] overflow-hidden ' src={item.image} alt="image" />
                                    </div></td>

                                    <td className="pr-4 py-2  max-w-[290px] min-w-[250px] text-sm md:text-[18px]  font-[550] text-[#84c3d3] "><Link href={'/mainpages/viewUniversity/' + item._id}> {item.universityName} <h1 className='text-sm font-normal text-gray-600 md:overflow-auto overflow-hidden'>{item.universityAddress} </h1> </Link></td>

                                    <td className="px-4 py-2 max-w-[200px] text-gray-500 mt-3 md:text-[18px] text-[17px] ">{item.courses}</td>
                                    <td className="px-4 py-2 text-lg text-gray-500 max-w-[120px] ">{item.universityDetail}</td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </div>
            </div>

            <hr className='my-6' />

            {/*  card */}
            <div className='md:mx-36  lg:max-w-[80%]'>
                <h1 className='text-3xl my-3  text-gray-900 font-semibold md:mx-7'>Top Five University</h1>
            </div>
            <div className="my-10 w-[80%] m-auto">
                <div style={{}} className="my-10">
                    <Slider {...settings2}>
                        {listing1.map((item) => (
                            <div key={item.id} className=' text-black  rounded-2xl my-2 h-[350px]  md:h-[470px] shadow-lg'>
                                <div className='flex justify-center items-center  relative rounded-t-2xl bg-gray-200 h-32 md:h-52'>
                                    <img src={item.image2} className='w-full opacity-85 rounded-t-2xl h-32 md:h-52' alt="imgage2" />
                                    <div className='absolute flex items-center space-x-3 text-white md:font-semibold md:text-xl bottom-10 left-5'>
                                        <div className='h-12 w-12 rounded-[50%] flex justify-center items-center'>
                                            <img src={item.image} className='h-10 w-10 rounded-[50%]' alt="image" />
                                        </div>
                                        <div className='text-md font-medium'>{item.universityName}</div>
                                    </div>
                                </div>
                                <div className='p-4  flex justify-center w-full h-16  text-gray-800 bg-slate-50 font-medium'>
                                Courses:
                                    <h2 className='text-gray-600 text-md font-semibold w-full '> {item.courses}</h2>
                                </div>
                                <hr />
                                <div className='flex items-center  h-10 font-medium hover:text-orange-400 justify-start'>
                                   <div className=' text-lg ml-10 hover:text-orange-400 flex justify-around   items-center  text-gray-500'>info <FiChevronRight className="text-gray-500 md:ml-[202px] ml-[134px] hover:text-orange-400 text-lg" /></div>
                                   
                                </div>
                                <hr />
                                <div className='flex items-center  h-10 font-medium hover:text-orange-400 justify-start'>
                                   <div className=' text-lg ml-10 hover:text-orange-400 flex justify-around items-center  text-gray-500'>Fee <FiChevronRight className="text-gray-500 md:ml-[202px] ml-[134px] hover:text-orange-400 text-lg" /></div>
                                   
                                </div>
                                <hr />
                                <div className='flex items-center  h-10 font-medium hover:text-orange-400 justify-start'>
                                   <div className=' text-lg ml-10 hover:text-orange-400 flex justify-around items-center  text-gray-500'>Courses <FiChevronRight className="text-gray-500 md:ml-[170px] ml-[100px] hover:text-orange-400 text-lg" /></div>
                                   
                                </div>
                                <hr />
                                <div className='hidden md:flex items-center  h-10 font-medium hover:text-orange-400 justify-start'>
                                   <div className=' text-lg ml-10 hover:text-orange-400 flex justify-around items-center  text-gray-500'>Admission Info <FiChevronRight className="text-gray-500 md:ml-[112px]  hover:text-orange-400 text-lg" /></div>
                                   
                                </div>
                                <hr />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <hr className='my-5' />
            
        </div>
    )
}

export default UniversityListing