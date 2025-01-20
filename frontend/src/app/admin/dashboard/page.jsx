'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import toast from 'react-hot-toast'
import axios from 'axios'
import { FaBuffer } from "react-icons/fa6";
import { GrFormTrash } from "react-icons/gr";
const Dashbord = () => {

    const [userList, setUserList] = useState([])

    const fetchUserList = () => {
        axios.get('http://localhost:5000/user/getall')

            .then((res) => {
                console.log(res.status);
                console.table(res.data)
                setUserList(res.data)
            }).catch((err) => {
                console.log(err)
                toast.error('failed to fetch user list')

            });

    }

    useEffect(() => {
        fetchUserList()
    }, [])

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/user/delete/` + id)
            .then((result) => {
                toast.success('user deleted successfully')
                fetchUserList()
            }).catch((err) => {
                console.log(err)
                toast.error('failed to delete user')

            });
    }
    return (
        <div className='md:ml-[260px] absolute top-6  bg-slate-50 md:w-[83%]  h-auto'>
            <div className=' text-center font-semibold text-3xl mt-16 mb-4 text-gray-700'>Welcome To Admin Dashboard</div>
            <div className='lg:max-w-[80%] ml-16  py-10 border rounded-xl shadow-lg p-8'>
            <h1 className='text-center text-gray-700 font-bold text-3xl'>
                        Manage-Data
                    </h1>
            <div className='flex gap-20 ml-5 mt-10'>

                <Link href={'/admin/addSchool'}>
                    <div className='w-[250px] relative h-[150px] text-3xl font-semibold text-gray-700 flex justify-center items-center border rounded-md shadow-lg shadow-emerald-100 hover:shadow-emerald-200 bg-gradient-to-b from-emerald-100 hover:from-emerald-200 hover:text-blue-600'>
                        <FaBuffer />
                        Add-School
                        <span class="absolute -right-1 top-0 flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>

                    </div>
                </Link>
                <Link href={'/admin/addcollege'}>
                    <div className='w-[250px] relative h-[150px] text-3xl font-semibold text-gray-700 flex justify-center items-center border rounded-md shadow-lg shadow-emerald-100 hover:shadow-emerald-200 bg-gradient-to-b from-emerald-100 hover:from-emerald-200 hover:text-blue-600'>
                        <FaBuffer />
                        Add-College
                        <span class="absolute -right-1 top-0 flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>

                    </div>
                </Link>
                <Link href={'/admin/adduniversity'}>
                    <div className='w-[250px] relative h-[150px] text-3xl font-semibold text-gray-700 flex justify-center items-center border rounded-md shadow-lg shadow-emerald-100 hover:shadow-emerald-200 bg-gradient-to-b from-emerald-100 hover:from-emerald-200 hover:text-blue-600'>
                        <FaBuffer />
                        Add-University
                        <span class="absolute -right-1 top-0 flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>

                    </div>
                </Link>
            </div>
            <div className='flex gap-20 ml-5 mt-10'>

                <Link href={'/admin/manageSchool'}>
                    <div className='w-[250px] relative h-[150px] text-2xl font-semibold text-gray-700 flex justify-center items-center border rounded-md shadow-lg shadow-emerald-50 hover:shadow-red-200 bg-gradient-to-b from-emerald-100 hover:from-red-100 hover:text-red-400'>
                        <GrFormTrash className='text-red-500 text-3xl' />
                        Manage-School

                    </div>
                </Link>

                <Link href={'/admin/manageCollege'}>
                    <div className='w-[250px] relative h-[150px] text-2xl font-semibold text-gray-700 flex justify-center items-center border rounded-md shadow-lg shadow-emerald-50 hover:shadow-red-200 bg-gradient-to-b from-emerald-100 hover:from-red-100 hover:text-red-400'>
                        <GrFormTrash className='text-red-500 text-3xl' />
                        Manage-University

                    </div>
                </Link>

                <Link href={'/admin/manageUniversity'}>
                    <div className='w-[250px] relative h-[150px] text-2xl font-semibold text-gray-700 flex justify-center items-center border rounded-md shadow-lg shadow-emerald-50 hover:shadow-red-200 bg-gradient-to-b from-emerald-100 hover:from-red-100 hover:text-red-400'>
                        <GrFormTrash className='text-red-500 text-3xl' />
                        Manage-University

                    </div>
                </Link>
            </div>
            </div>
            <div className='lg:max-w-[80%] ml-16  py-10'>
                <div className='border rounded-xl shadow-lg p-8'>
                    <h1 className='text-center text-gray-700 font-bold text-3xl'>
                        Manage-User
                    </h1>
                    {/* <hr /> */}
                    <table className='w-full mt-3'>
                        <thead className='bg-violet-700 text-white'>
                            <tr>
                            </tr>
                            {/* <th className='p-2 border border-white hover:bg-violet-800'>ID</th> */}
                            <th className='p-2 border border-white hover:bg-violet-800'>NAME</th>
                            <th className='p-2 border border-white hover:bg-violet-800'>EMAIL</th>
                            <th className='p-2 border border-white hover:bg-violet-800'>PASSWORD</th>
                            <th colSpan={2}>Actions</th>
                        </thead>
                        <tbody className='bg-violet-200'>
                            {
                                userList.map((user) => {
                                    return <tr key={user._id}>
                                        {/* <td className='p-2 border border-violet-700'>{user._id}</td> */}
                                        <td className='p-2 border border-violet-700'>{user.name}</td>
                                        <td className='p-2 border border-violet-700'>{user.email}</td>
                                        <td className='p-2 border border-violet-700'>{user.password}</td>

                                        <td onClick={() => deleteUser(user._id)} className='p-2 border border-violet-700'
                                        >
                                            <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>
                                                Delete
                                            </button>
                                        </td>
                                        <td className='p-2 border border-violet-700'>
                                            <Link href={'/updateUser/' + user._id} className='bg-yellow-500 text-white px-4 py-2 rounded-lg'>
                                                Update
                                            </Link>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    )
}

export default Dashbord