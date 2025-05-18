'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import Slider from 'react-slick'
import { RiFindReplaceLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CBSE = () => {
  const [inputValue, setInputValue] = useState('');
  const [listing, setListing] = useState([]);
  const [filteredListing, setFilteredListing] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Fetch School Data from Backend
  const fetchSchools = () => {
    axios.get('http://localhost:5000/admin/addcbseBord/getall')
      .then((result) => {
        setListing(result.data);
        setFilteredListing(result.data);

        const uniqueStates = [...new Set(result.data.map(item => item.state))];
        setStates(uniqueStates);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to fetch school list');
      });
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  // Handle State Change
  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedDistrict('');

    const stateFiltered = listing.filter(item => item.state === state);
    const uniqueDistricts = [...new Set(stateFiltered.map(item => item.district.trim().toLowerCase()))];

    // Preserve original casing
    const districtNames = uniqueDistricts.map(dist =>
      stateFiltered.find(item => item.district.trim().toLowerCase() === dist)?.district || dist
    );

    setDistricts(districtNames);
    setFilteredListing(stateFiltered);
  };

  // Handle District Change
  const handleDistrictChange = (event) => {
    const district = event.target.value.trim().toLowerCase();
    setSelectedDistrict(event.target.value);

    const filtered = listing.filter(item =>
      item.state === selectedState &&
      item.district.trim().toLowerCase() === district
    );

    setFilteredListing(filtered);
  };

  // Search functionality
  const applySearch = () => {
    if (inputValue.trim() === '') {
      setFilteredListing(listing);
      return;
    }

    const searchText = inputValue.toLowerCase().trim();
    const filtered = listing.filter((item) =>
      item?.SchoolName?.toLowerCase().includes(searchText)
    );
    setFilteredListing(filtered);
  };

  useEffect(() => {
    applySearch();
  }, [inputValue]);

  return (
    <div className='relative'>
      {/* Slider */}
      <div className='flex flex-col md:min-w-[600px] overflow-x-hidden lg:max-w-[1535px] slider-container'>
        <Slider fade={true} infinite={true} slidesToShow={1} slidesToScroll={1} autoplay={true} speed={700} autoplaySpeed={3000} cssEase="linear">
          <div className='relative'>
            <img className='lg:min-w-[1535px] md:min-w-[600px] md:h-[570px] min-h-[250px]'
              src="https://media.istockphoto.com/id/1257574456/photo/modern-school-exterior-3d-illustration.jpg?s=612x612&w=0&k=20&c=1vy2zhje52B2LfHXtOC-PJ1OFsu3gjfVwu_SXnTExxw="
              alt="School Image" />
            <div className='text-white hover:underline absolute bottom-1 right-[100px] lg:right-[300px] md:right-[250px]'>
              <h1 className='hover:text-yellow-500 text-lg w-[350px]'>K.V.S Ayodhya</h1>
            </div>
          </div>
        </Slider>

        {/* Search Bar */}
        <div className='absolute md:top-[7%] lg:top-[19%] top-[3%] md:left-[25%] left-[20%] lg:left-[25%] flex-col w-[60%]'>
          <div className='flex justify-center items-center bg-transparent'>
            <h1 className='text-xl lg:hidden text-white font-semibold'>Find Top Schools in India</h1>
            <div className='lg:text-2xl hidden lg:block text-md text-white font-semibold'>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500, 'Find Top Schools in India', 1000,
                  'Find over 500+ Schools in India', 1000,
                  'Find Schools by State & District', 1000,
                  'Check School Rankings', 500
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className='flex justify-between overflow-hidden lg:mt-10 lg:h-[55px] h-[40px] w-[110%] md:w-[90%] rounded-3xl bg-white items-center md:rounded'>
            <h1 className="text-gray-400 w-[10%] md:pl-4"><RiFindReplaceLine /></h1>
            <input className='bg-transparent outline-none text-gray-400 w-[50%] lg:w-[80%] h-[100%]'
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='Search for schools' />
            <button onClick={applySearch} className='bg-orange-400 lg:w-[15%] w-[35%] h-[100%] text-white'>Search</button>
          </div>
        </div>
      </div>

      <hr />

      {/* Filters */}
      <div className='md:ml-36 my-3'>
        <h1 className='text-3xl font-semibold text-sky-900'>CBSE Schools</h1>
        <div className='flex text-sky-900 gap-4 mt-4'>
          <select className="p-2 border border-teal-400 hover:border-fuchsia-400 pl-5 pr-5 rounded outline-none" value={selectedState} onChange={handleStateChange}>
            <option value={''}>Select a State</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          <select className="p-2 border border-teal-400 hover:border-fuchsia-400 outline-none pl-5 pr-5 rounded" value={selectedDistrict} onChange={handleDistrictChange} disabled={!districts.length}>
            <option value={''}>Select a District</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
        </div>
      </div>

      {/* School Table */}
      <div className='w-full'>
        <div className="overflow-x-scroll lg:overflow-x-auto">
          <table className="w-[80%] md:mx-36 border-collapse border overflow-x-auto border-gray-200">
            <thead>
              <tr className="bg-[#506c73] text-white text-[18px] h-[50px] font-normal">
                <th className="px-4 py-2 text-left">Rank</th>
                <th className="pl-4 py-2 text-left"></th>
                <th className="px-4 py-2 text-left">School-Name</th>
                <th className="px-4 py-2 text-left">Board</th>
                <th className="px-4 py-2 text-left">District</th>
              </tr>
            </thead>
            <tbody>
              {filteredListing.map((item, index) => (
                <tr className={`h-[100px] ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`} key={item._id}>
                  <td className="px-4 py-2">#{index + 1}</td>
                  <td className="pl-4 py-2">
                    <img className='h-[33px] w-[33px] rounded-full' src={item.image} alt="School Logo" />
                  </td>
                  <td className="pr-4 py-2 text-[#84c3d3] font-semibold">
                    <Link href={`/mainpages/viewUniversity/${item._id}`}>
                      {item.SchoolName}
                      <h1 className='text-sm font-normal text-gray-600 md:overflow-auto overflow-hidden'>{item.SchoolAddress}</h1>
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-gray-500">{item.SchoolType}</td>
                  <td className="px-4 py-2 text-gray-500">{item.district}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CBSE;
