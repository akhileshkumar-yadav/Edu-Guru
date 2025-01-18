'use client'
import { useFormik } from 'formik';
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const BbaCollege = () => {
  const addcollege = useFormik({
    initialValues: {
      collegeName: '',
      collegeAddress: '',
      ApplicationDeadline:'',
      ranking: '',
      fee: '',
      image1:'',
      image2:'',
    },
  onSubmit: (values, { resetForm }) => {
    console.log(values);
    // resetForm()
    // toast.success('signup successfull')
    axios.post('http://localhost:5000/admin/bbacollege/add', values)
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
            <label className='pr-5 font-semibold text-xl' htmlFor="ranking">ranking :</label>
            <input
              type="text"
              id='ranking'
              name='ranking'
              onChange={addcollege.handleChange}
              value={addcollege.values.ranking}
              className='w-[85%] border-dotted border-b-2 outline-none  border-b-gray-600 mb-4'
            />
          </div>
          <div>
            <label className='pr-2 font-semibold text-xl' htmlFor="ApplicationDeadline">ApplicationDeadline :</label>
            <input
              type="text"
              id='ApplicationDeadline'
              name='ApplicationDeadline'
              onChange={addcollege.handleChange}
              value={addcollege.values.ApplicationDeadline}
              className='w-[69%] border-dotted border-b-2 outline-none  border-b-gray-600 mb-4'
            />
          </div>
          <div>
            <label className='pr-12 font-semibold text-xl' htmlFor="fee">fee :</label>
            <input
              type="text"
              id='fee'
              name='fee'
              onChange={addcollege.handleChange}
              value={addcollege.values.title}
              className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
            />
          </div>
          <div>
            <label className='pr-5 font-semibold text-xl' htmlFor="image1">Image :</label>
            <input
              type="text"
              id='image1'
              name='image1'
              onChange={addcollege.handleChange}
              value={addcollege.values.image1}
              className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
            />
          </div>
          <div>
            <label className='pr-5 font-semibold text-xl' htmlFor="image1">Image :</label>
            <input
              type="text"
              id='image2'
              name='image2'
              onChange={addcollege.handleChange}
              value={addcollege.values.image2}
              className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
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

export default BbaCollege