'use client'
import React, { useState, useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

const Update = () => {
    const { id } = useParams()
    const [btechdata, setbtechdata] = useState(null);

    const fetchRoadMapData = async () => {
        const res = await axios.get(`http://localhost:5000/admin/addcollege/getbyid/${id}`)
        console.log(res.data)
        setbtechdata(res.data)
    }

    useEffect(() => {
        fetchRoadMapData()
    }, [])

    const router = useRouter()

    const Addcollege = (values) => {
        console.log(values)

        axios.put('http://localhost:5000/admin/addcollege/updateCollege/' + id, values)
            .then((response) => {
                toast.success('form updated successfully')
                // router.push('/manageListing')

            }).catch((err) => {
                console.log(err)
                toast.error('Failed to update user')
            });

    }
    return (
        <div>
            {btechdata !== null ? (
                <Formik initialValues={btechdata} onSubmit={Addcollege}>
                    {(updateCollege) => {
                        return <form action="" className='' onSubmit={updateCollege.handleSubmit}>
                            <div className='flex justify-center m-5 items-center '>
                                <div className='w-[50%] flex-col  border-2 rounded-lg'>
                                    <h1 className='text-3xl font-semibold text-center mb-4 mt-3 '>Add College</h1>
                                    <div>
                                        <label className='pr-2 ml-3 font-semibold text-xl' htmlFor='collegeNam'>College Name:</label>
                                        <input
                                            type="text"
                                            name="collegeName"
                                            id='collegeName'
                                            onChange={updateCollege.handleChange}
                                            value={updateCollege.values.collegeName}
                                            className='w-[78%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-1 ml-3 font-semibold text-xl' htmlFor="collegeAddress">collegeAddress:</label>
                                        <input
                                            type="text"
                                            id='collegeAddress'
                                            name='collegeAddress'
                                            onChange={updateCollege.handleChange}
                                            value={updateCollege.values.collegeAddress}
                                            className='w-[78%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="collegeDetail">collegeDetail :</label>
                                        <input
                                            type="text"
                                            id='collegeDetail'
                                            name='collegeDetail'
                                            onChange={updateCollege.handleChange}
                                            value={updateCollege.values.collegeDetail}
                                            className='w-[75%] border-dotted border-b-2 outline-none  border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-12 ml-3 font-semibold text-xl' htmlFor="fee">fee :</label>
                                        <input
                                            type="text"
                                            id='fee'
                                            name='fee'
                                            onChange={updateCollege.handleChange}
                                            value={updateCollege.values.fee}
                                            className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="cutoff">email:</label>
                                        <input
                                            type="text"
                                            id='email'
                                            name='email'
                                            onChange={updateCollege.handleChange}
                                            value={updateCollege.values.email}
                                            className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="phone">phone :</label>
                                        <input
                                            type="text"
                                            id='phone'
                                            name='phone'
                                            onChange={updateCollege.handleChange}
                                            value={updateCollege.values.phone}
                                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="phone">Courses :</label>
                                        <input
                                            type="text"
                                            id='courses'
                                            name='courses'
                                            onChange={updateCollege.handleChange}
                                            value={updateCollege.values.courses}
                                            className='w-[81%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="image">Image :</label>
                                        <input
                                            type="text"
                                            id='image'
                                            name='image'
                                            onChange={updateCollege.handleChange}
                                            value={updateCollege.values.image}
                                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div className='flex w-[100%] justify-center items-center'>
                                        <button type='submit' className=' bg-orange-400 text-white text-lg font-medium px-5 py-[3px] mb-3 rounded-3xl'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    }}
                </Formik>
            ) : (
                <p>Loading....</p>
            )}
        </div>
    )
}

export default Update