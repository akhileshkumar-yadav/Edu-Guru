'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import classess from './viewba.module.css'


const ViewCollege = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/admin/addcollege/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        setProduct(data);
        console.log(data)
    };
    useEffect(() => {
        fetchProduct();
    }, []);


    return (
        <div className=''>
            <div className='w-full relative'>
                <div className=' '>
                    <img className='w-[100%] h-[300px]' src="https://image-static.collegedunia.com/public/asset/img/homepage/banner/Aligarh1642584978.webp" alt="" />
                </div>
                <div className={classess.div1}>
                    <div className='flex ml-[10%] mt-[5%]  text-white'>
                        <div className='flex'>
                            <img className='h-[90px] w-[90px] rounded-md mr-5' src={product.image} alt="logo" />
                        </div>
                        <div className='flex-col '>
                            <h1 className=' text-3xl uppercase font-semibold'>{product.collegeName}</h1>
                            <p className='text-md font-semibold'>{product.collegeAddress}</p>

                        </div>
                    </div>
                </div>
                <hr className='border-2 border-gray-700 ' />
                <div className='flex justify-between  items-center h-[50px] w-[90%] mx-[5%]'>
                    <div className='flex justify-between h-[50px] w-[40%]  items-center'>
                        <div className='text-md ml-3 font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700'>
                            Overview
                        </div>
                        <div className='text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700'>Courses</div>
                        <div className='text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700'>Fee</div>
                        <div className='text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700'>Admission 2024</div>
                        <div className='text-md font-normal rounded-sm text-gray-600 hover:border-b-[3px] hover:border-b-blue-700'>Reviews</div>
                    </div>
                    <div className='flex justify-end items-center w-[20%] '>
                        <div className='mr-7 text-lg text-blue-400'>
                            {product.phone}
                        </div>
                        <div className='text-lg text-blue-400'>
                            {product.email}
                        </div>
                    </div>
                </div>
                <hr className='mb-2'/>
            </div>
            {/* Icon Blocks */}

            {/* End Icon Blocks */}
        </div>
    )
}

export default ViewCollege