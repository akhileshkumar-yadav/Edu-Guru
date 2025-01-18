'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import Slider from 'react-slick'
import Navbar from './navbar';
import Footer from './footer';
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

    <div className=''> <Navbar className='' />
      <div className='font-sans relative'>

        <div className=' flex md:min-w-[1536px] flex-col md:w-[1536px] slider-container  '>
          <Slider {...setting}>

            <div className='  relative'>
              <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/photo_gallery/WhatsApp%20Image%202022-12-04%20at%207.29.50%20PM.jpeg" alt="" />

              <div className='text-white hover:underline absolute w-20  bottom-1 right-[500px]'>
                <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Indian Institute of Technology,Roorkee </h1>
              </div>
            </div>



            <div className=' relative'>
              <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/home/Jaykishan%20Pipaliya.jpeg" alt="" />
              <div className='text-white hover:underline absolute w-20  bottom-1 right-[500px]'>
                <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Shri Ram College of Commerce,New Delhi</h1>
              </div>
            </div>
            <div className=' relative'>
              <img className='lg:min-w-[1536px] md:min-w-[600px] md:h-[510px] min-h-[250px]' src="https://ir.iith.ac.in/assets/images/photo_gallery/WhatsApp%20Image%202022-12-04%20at%207.29.50%20PM.jpeg" alt="" />
              <div className='text-white hover:underline absolute w-20  bottom-1 right-[500px]'>
                <h1 href={"/"} className='hover:text-yellow-500 text-md  w-[450px]'>Indian Institute of Management, Ahmedabad</h1>
              </div>
            </div>

          </Slider>
          <div className='absolute  md:top-[10%] top-[5%] md:left-[25%] left-[20%] lg:left-[25%] flex-col w-[60%] justify-center items-center'>
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
              <button onClick={applysearch} className='bg-orange-400  lg:w-[15%] w-[25%]  border-none h-[100%] text-white'>Search</button>
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
          <h1 className='text-2xl mb-4 text-gray-900 font-semibold '>Explore Programs</h1>
          
          <div className='md:flex  mb-4 flex-wrap justify-start items-center'>
            <div className='h-[270px] flex-col relative md:w-[380px]  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
              <div className='flex'>

                <div className='w-[250px]   h-[100px] '>
                  <h1 className='ml-14 mt-9 text-xl font-semibold text-gray-800'>Top University</h1>
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
                  <h1 className='ml-14 mt-9 text-xl font-semibold text-gray-800'>Top College</h1>
                  <p className='ml-14 pt-4  text-gray-400 text-sm font-medium'>College ranked based on real data</p>

                </div>
                <div className='h-[100px]'>
                  <img className='md:h-[100px]  md:w-[100px] mt-9 h-[50px] w-[50px] ' src="\—Pngtree—illustration of graduate college student_6293725.png" alt="" />
                </div>

              </div>
              <Link className='absolute bottom-8 left-5' href={"/mainpages/collegeListing"}>
                <p className='ml-16 mt-4 inline-block text-gray-500'>Top ranked college in india  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
              </Link>

            </div>
            <div className='h-[270px] flex-col relative md:w-[380px] md:ml-4  w-[360px] rounded-md bg-gradient-to-b from-indigo-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
              <div className='flex'>

                <div className='w-[250px]   h-[100px] '>
                  <h1 className='ml-14 mt-9 text-xl font-semibold text-gray-800'>Top School</h1>
                  <p className='ml-14 pt-4  text-gray-400 text-sm font-medium'>School ranked based on real data</p>

                </div>
                <div className='h-[100px]'>
                  <img className='md:h-[100px]  md:w-[100px] mt-9 h-[50px] w-[50px] ' src="\—Pngtree—illustration of graduate college student_6293725.png" alt="" />
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
                                    <td className="px-4 py-2 max-w-[120px] ">Lorem, ipsum dolor.</td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </div>
    

        {/* <hr className='my-5 flex' />
      <div className='md:ml-40 md:w-[77%] my-5'>
        <h1 className='text-2xl mb-4 text-gray-900 font-semibold '>Top 10 Colleges</h1>
        <div className='flex justify-start border-2 border-gray-200 py-[9px] font-semibold items-start'>
          <div className='w-[90px] ml-2 flex justify-start items-center'>
            <h1 className='text-gray-900'>Rank</h1>
          </div>
          <div className='w-[390px] flex justify-start items-center'>
            <h1 className='text-gray-900 '>College</h1>
          </div>
          <div className='w-[180px]  flex justify-start items-center'>
            <h1 className='text-gray-900 pl-8'>Ranking</h1>
          </div>
          <div className='w-[150px] flex justify-center items-center'>
            <h1 className='text-gray-900 pl-8'>Cutoff</h1>
          </div>
          <div className='w-[230px] flex justify-start ml-4 items-center'>
            <h1 className='text-gray-900 pl-8'>Application Deadline</h1>
          </div>
          <div className='w-[100px] flex justify-start items-center'>
            <h1 className='text-gray-900 pl-8'>Fee</h1>
          </div>
        </div>
        {


          listing.map((item, index) => {
 */}

        {/* //  return      <div className={`flex flex-wrap justify-start items-center border-x-[1px] h-[75px] border-b-[1px] border-gray-200 `}>
      //         <div className='w-[80px] flex justify-start items-center ml-4'>
      //           <h1 className='text-gray-500'>#{index + 1}</h1>
      //         </div>
      //         <div className='w-[60px] flex   items-start'>
      //           <div className='flex justify-center items-center h-[45px] w-[45px] rounded-[50%] border '>
      //             <img className='h-[30px] w-[30px] rounded-md' src={item.image1} alt="" />
      //           </div>
      //         </div>
      //         <div className='w-[340px] flex h-[75px] items-center justify-center '>
      //           <div className='w-[340px] flex-col items-center justify-center'>
      //             <p className='text-black text-[16px] font-semibold'>{item.collegeName}</p>
      //             <p className='text-[14px] text-gray-600 font-normal'>{item.collegeAddress}</p>
      //           </div>
      //         </div>
      //         <div className='flex justify-center items-center w-[45px]'>
      //           <img src="\the_week1569844170.webp" alt="" />
      //         </div>
      //         <div className='w-[180px] flex justify-start items-center'>
      //           <h1 className='text-gray-500'>{item.Ranking}</h1>
      //         </div>
      //         <div className='w-[120px] flex justify-center items-center'>
      //           <h1 className='text-gray-500'>{item.cutoff}</h1>
      //         </div>
      //         <div className='w-[200px] flex ml-4 items-center'>
      //           <h1 className='text-gray-500 '>{item.ApplicationDeadline}</h1>
      //         </div>
      //         <div className='w-[100px] flex-col justify-center items-center'>
      //           {
      //             (item.fee === 0) ? (<h1 className='text-gray-500'>-</h1>)
      //               : (<h1 className='text-gray-800 inline-block font-semibold'><FaIndianRupeeSign className='inline-block text-md' />{item.fee}</h1>)
      //           }
      //           <p className='text-gray-500 text-[14px] font-normal'>
      //             1st Year Fee
      //           </p>

      //         </div>
      //       </div>
      //     })
      //   }
      // </div> */}
        <hr className=' mt-4' />
        <div className='md:ml-40 my-5'>
          <h1 className='text-2xl mb-4 text-gray-900 font-semibold '>Select Your Study Goal in School</h1>
          <div className=' flex justify-evenly flex-wrap items-center overflow-x-scroll '>
            <div className='h-[150px]   w-[150px] ml-4'>
              <Link className='flex  flex-col justify-center items-center' href="">
                <img className='h-[90px] w-[90px]' src="https://seeklogo.com/images/B/board-of-high-school-intermediate-uttar-pradesh-logo-C72295BBDE-seeklogo.com.png" alt="" />
                <h1 className='text-gray-500 text-lg '>State Bord</h1>
              </Link>
            </div>
            <div className='h-[150px]  w-[150px] ml-4'>
              <Link className='flex  flex-col justify-center items-center' href="">
                <img className='h-[90px] w-[90px]' src="https://tse4.mm.bing.net/th?id=OIP.zd170I_O_6-o2OJuOAXiaAAAAA&pid=Api&P=0&h=180" alt="" />
                <h1 className='text-gray-500 text-lg '>CISCE/ICSE</h1>
              </Link>
            </div>
            <div className='h-[150px]  w-[150px] ml-4'>
              <Link className='flex  flex-col justify-center items-center' href="">
                <img className='h-[95px] w-[95px]' src="https://seeklogo.com/images/C/cbse-logo-46D5A6B556-seeklogo.com.png" alt="" />
                <h1 className='text-gray-500 text-lg '>CBSC</h1>
              </Link>
            </div>
            <div className='h-[150px]  w-[150px] ml-4'>
              <Link className='flex  flex-col justify-center items-center' href="">
                <img className='h-[90px] w-[90px]' src="https://tse3.mm.bing.net/th?id=OIP.SmCOIH3l0grZYaCRx88nmQHaHa&pid=Api&P=0&h=180" alt="" />
                <h1 className='text-gray-500 text-lg '>IB</h1>
              </Link>
            </div>
          </div>

        </div>
        <hr className='my-5' />
        <div className='md:ml-40 overflow-hidden  my-5'>
          <h1 className='text-2xl mb-4 text-gray-900 font-semibold '> School Programs</h1>
          <div className='h-[40px]  flex mb-5 '>
            <Link href=""><div className='border h-[40px] flex justify-center  text-gray-500 items-center rounded-3xl px-[10px] w-[60px]'>
              <h1 className='mx-3 ' >All...</h1>
            </div>
            </Link>

            <div className=' flex-row justify-start slider-container w-[1190px] '>
              <Slider {...settings2}>
                <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                  <h1 className='border py-1 pl-4 rounded-3xl w-[100px]'>CBSC</h1>
                </div>
                </Link>
                <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                  <h1 className='border py-1 pl-3 ml-4 rounded-3xl w-[100px]'>ICSE</h1>
                </div>
                </Link>
                <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[100px]'>
                  <h1 className='border py-1 pl-4 rounded-3xl w-[100px]'>UP Bord</h1>
                </div>
                </Link>
                <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                  <h1 className='border py-1 pl-5 rounded-3xl w-[80px]'>CAIE</h1>
                </div>
                </Link>
                <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                  <h1 className='border py-1 pl-8 rounded-3xl w-[80px]'>IB</h1>
                </div>
                </Link>
                <Link href=""><div className=' h-[40px]   px-5 py-1   text-gray-500   w-[80px]'>
                  <h1 className='border py-1 pl-5 rounded-3xl w-[80px]'>NIOS </h1>
                </div>
                </Link>
              </Slider>
            </div>
          </div>
          <div className='md:flex flex-wrap justify-start items-center'>
            <div className='h-[270px] flex-col md:w-[380px]  w-[360px] rounded-md bg-gradient-to-b from-cyan-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
              <div className='flex'>

                <div className='w-[250px]  h-[100px] '>
                  <h1 className='ml-14 mt-4 text-xl font-semibold text-gray-800'>Ranking</h1>
                  <p className='ml-14  text-gray-400 text-sm font-medium'>school ranked based on real data</p>

                </div>
                <div className='h-[100px]'>
                  <img className='md:h-[100px]  md:w-[100px] mt-4 h-[50px] w-[50px] ' src="—Pngtree—illustration of graduate college student_6293725.png" alt="" />
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
            <div className='h-[270px] flex-col  md:w-[380px]  md:ml-5 w-[360px] rounded-md bg-gradient-to-b from-cyan-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
              <div className='flex'>

                <div className='w-[250px]  h-[100px] '>
                  <h1 className='ml-14 mt-4 text-xl font-semibold text-gray-800'>Find college</h1>
                  <p className='ml-14  text-gray-400 text-sm font-medium'>Discover 19000 + college via preferences</p>

                </div>
                <div className='h-[100px]'>
                  <img className='md:h-[100px]  md:w-[130px] mt-2 h-[50px] w-[50px] ' src="10088-removebg-preview.png" alt="" />
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
                <p className='ml-16 mt-4 inline-block text-gray-500'> Discover Top school in india  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
              </Link>

            </div>
            <div className='h-[270px] flex-col md:w-[380px] md:ml-5  w-[360px] rounded-md bg-gradient-to-b from-cyan-100 hover:shadow-indigo-300 shadow-md  hover:border-indigo-300  border-gray-300 border-2'>
              <div className='flex'>

                <div className='w-[250px]  h-[100px] '>
                  <h1 className='ml-14 mt-4 text-xl font-semibold text-gray-800'>Course Finder</h1>
                  <p className='ml-14  text-gray-400 text-sm font-medium'> Discover Top Course in indian school - 2024 </p>

                </div>
                <div className='h-[100px]'>
                  <img className='md:h-[100px]  md:w-[120px] mt-2 h-[50px] w-[50px] ' src="Na_Nov_28-removebg-preview.png" alt="" />
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
                <p className='ml-16 mt-4 inline-block text-gray-500'> Get Top Course  in indian School  < SlArrowRight className='inline-block text-gray-500  ml-1 text-[8px] font-extrabold' /></p>
              </Link>

            </div>


          </div>

        </div>
      </div>
      <Footer />
    </div>

  )
}

export default page