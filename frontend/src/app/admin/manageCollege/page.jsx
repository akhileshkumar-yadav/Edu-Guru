'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import Link from 'next/link'
const ManageUser = () => {
    const [userList, setUserList] = useState([])

    const fetchUserList = () => {
        axios.get('http://localhost:5000/admin/addcollege/getall')

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
        axios.delete(`http://localhost:5000/admin/addcollege/delete/` + id)
            .then((result) => {
                toast.success('user deleted successfully')
                fetchUserList()
            }).catch((err) => {
                console.log(err)
                toast.error('failed to delete user')

            });
    }

    return (
        <div className='lg:max-w-[70%] ml-72 py-10'>
            <div className='border rounded-xl shadow-lg p-8'>
                <h1 className='text-center font-bold text-3xl'>
                    Manage College Data
                </h1>
                {/* <hr /> */}
                <table className='w-full mt-3'>
                    <thead className='bg-violet-700 text-white'>
                        <tr>
                        
                        <th className='p-2 border border-white hover:bg-violet-800'>ID</th>
                        <th className='p-2 border border-white hover:bg-violet-800'>NAME</th>
                        <th className='p-2 border border-white hover:bg-violet-800'>TITLE</th>
                        <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-violet-200'>
                        {
                            userList.map((user) => {
                                return <tr key={user._id}>
                                    <td className='p-2 border border-violet-700'>{user._id}</td>
                                    <td className='p-2 border border-violet-700'>{user.collegeName}</td>
                                    <td className='p-2 border border-violet-700'>{user.collegeAddress}</td>
                                
                                <td onClick={() => deleteUser(user._id)}  className='p-2 border border-violet-700'
                                    >
                                        <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>
                                            Delete
                                        </button>
                                    </td>
                                    <td  className='p-2 border border-violet-700'>
                                        <Link href={'/admin/updateCollege/' + user._id} className='bg-yellow-500 text-white px-4 py-2 rounded-lg'>
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
    )
}

export default ManageUser