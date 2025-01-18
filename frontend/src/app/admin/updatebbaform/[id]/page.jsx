'use client'
import React, { useState, useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

const Update = () => {
    const { id } = useParams()
    const [bbadata, setbbadata] = useState(null);

    const fetchRoadMapData = async () => {
        const res = await axios.get(`http://localhost:5000/admin/bbacollege/getbyid/${id}`)
        console.log(res.data)
        setbbadata(res.data)
    }

    useEffect(() => {
        fetchRoadMapData()
    }, [])

    const router = useRouter()

    const Addbbacollege = (values) => {
        console.log(values)

        axios.put('http://localhost:5000/admin/bbacollege/updatebbaform/' + id, values)
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
            {bbadata !== null ? (
                <Formik initialValues={bbadata} onSubmit={Addbbacollege}>
                    {(updatebbaForm) => {
                        return <form action="" className='' onSubmit={updatebbaForm.handleSubmit}>
                            <div className='flex justify-center m-5 items-center '>
                                <div className='w-[50%] flex-col   border-2 rounded-lg'>
                                    <h1 className='text-3xl font-semibold text-center mb-4 mt-3 '>Add College</h1>
                                    <div>
                                        <label className='pr-2 ml-3 font-semibold text-xl' htmlFor='collegeNam'>College Name:</label>
                                        <input
                                            type="text"
                                            name="collegeName"
                                            id='collegeName'
                                            onChange={updatebbaForm.handleChange}
                                            value={updatebbaForm.values.title}
                                            className='w-[78%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-1 ml-3 font-semibold text-xl' htmlFor="collegeAddress">collegeAddress:</label>
                                        <input
                                            type="text"
                                            id='collegeAddress'
                                            name='collegeAddress'
                                            onChange={updatebbaForm.handleChange}
                                            value={updatebbaForm.values.title}
                                            className='w-[78%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 font-semibold text-xl' htmlFor="Ranking">Ranking :</label>
                                        <input
                                            type="text"
                                            id='Ranking'
                                            name='Ranking'
                                            onChange={updatebbaForm.handleChange}
                                            value={updatebbaForm.values.Ranking}
                                            className='w-[85%] border-dotted border-b-2 outline-none  border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 font-semibold text-xl' htmlFor="ApplicationDeadline">ApplicationDeadline:</label>
                                        <input
                                            type="text"
                                            id='ApplicationDeadline'
                                            name='ApplicationDeadline'
                                            onChange={updatebbaForm.handleChange}
                                            value={updatebbaForm.values.ApplicationDeadline}
                                            className='w-[69%] border-dotted border-b-2 outline-none  border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-12 ml-3 font-semibold text-xl' htmlFor="fee">fee :</label>
                                        <input
                                            type="text"
                                            id='fee'
                                            name='fee'
                                            onChange={updatebbaForm.handleChange}
                                            value={updatebbaForm.values.title}
                                            className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="cutoff">cut Off :</label>
                                        <input
                                            type="text"
                                            id='cutoff'
                                            name='cutoff'
                                            onChange={updatebbaForm.handleChange}
                                            value={updatebbaForm.values.title}
                                            className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="image1">Image :</label>
                                        <input
                                            type="text"
                                            id='image1'
                                            name='image1'
                                            onChange={updatebbaForm.handleChange}
                                            value={updatebbaForm.values.image1}
                                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="image2">Image :</label>
                                        <input
                                            type="text"
                                            id='image2'
                                            name='image2'
                                            onChange={updatebbaForm.handleChange}
                                            value={updatebbaForm.values.image2}
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