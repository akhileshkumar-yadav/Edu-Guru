'use client'
import { useFormik } from 'formik';
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const AddCollege = () => {
    const addcollege = useFormik({
        initialValues: {
            collegeName: '',
            collegeAddress: '',
            collegeDetail: '',
            fee: '',
            email: '',
            phone: '',
            image: '',
            courses: '',
            category:'',
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            // resetForm()
            // toast.success('signup successfull')
            axios.post('http://localhost:5000/admin/addcollege/add', values)
                .then((response) => {
                    console.log(response.status)
                    resetForm()
                    toast.success('addform  info add successfully')
                    // router.push('/')

                }).catch((err) => {
                    console.log(err);
                    toast.error('Error')

                });
        }
    })
    return (
        <div className='flex justify-center m-5 items-center '>
            <div className='w-[50%] flex-col   border-2 rounded-lg'>
                <h1 className='text-3xl font-semibold text-center mb-4 mt-3 '>Add College</h1>
                <form onSubmit={addcollege.handleSubmit} className='ml-5'>
                    <div>
                        <label className='pr-2 font-semibold text-xl' htmlFor='collegeNam'>College Name:</label>
                        <input
                            type="text"
                            name="collegeName"
                            id='collegeName'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.title}
                            className='w-[78%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                    <div>
                        <label className='pr-1 font-semibold text-xl' htmlFor="collegeAddress">collegeAddress:</label>
                        <input
                            type="text"
                            id='collegeAddress'
                            name='collegeAddress'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.title}
                            className='w-[78%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                    <div>
                        <label className='pr-5 font-semibold text-xl' htmlFor="collegeDetail">collegeDetail :</label>
                        <input
                            type="text"
                            id='collegeDetail'
                            name='collegeDetail'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.collegeDetail}
                            className='w-[75%] border-dotted border-b-2 outline-none  border-b-gray-600 mb-4'
                        />
                    </div>
                    <div>
                        <label className='pr-12 font-semibold text-xl' htmlFor="fee">fee :</label>
                        <input
                            type="text"
                            id='fee'
                            name='fee'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.fee}
                            className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                    <div>
                        <label className='pr-5 font-semibold text-xl' htmlFor="cutoff">email:</label>
                        <input
                            type="text"
                            id='email'
                            name='email'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.email}
                            className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                    <div>
                        <label className='pr-5 font-semibold text-xl' htmlFor="phone">phone :</label>
                        <input
                            type="text"
                            id='phone'
                            name='phone'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.phone}
                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                    <div>
                        <label className='pr-5 font-semibold text-xl' htmlFor="image">Image :</label>
                        <input
                            type="text"
                            id='image'
                            name='image'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.image}
                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                    <div>
                        <label className='pr-5 font-semibold text-xl' htmlFor="courses">courses :</label>
                        <input
                            type="text"
                            id='courses'
                            name='courses'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.courses}
                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                    <div>
                        <label className='pr-5 font-semibold text-xl' htmlFor="category">category :</label>
                        <input
                            type="text"
                            id='category'
                            name='category'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.category}
                            className='w-[80%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                    <div className='flex w-[100%] justify-center items-center'>
                        <button type='submit' className=' bg-orange-400 text-white text-lg font-medium px-5 py-[3px] mb-3 rounded-3xl'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCollege