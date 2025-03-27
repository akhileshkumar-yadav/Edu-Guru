'use client'
import React, { useState, useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
// import { useRouter } from 'next/navigation'

const Update = () => {
    const { id } = useParams()
    const [btechdata, setbtechdata] = useState(null);

    const fetchRoadMapData = async () => {
        const res = await axios.get(`http://localhost:5000/admin/addupBord/getbyid/${id}`)
        console.log(res.data)
        setbtechdata(res.data)
    }

    useEffect(() => {
        fetchRoadMapData()
    }, [])

    const router = useRouter()

    const UpdateSchool = (values) => {
        console.log(values)

        axios.put('http://localhost:5000/admin/addupBord/updateUpbord/' + id, values)
            .then((response) => {
                toast.success('form updated successfully')
                router.push('/admin/dashboard')

            }).catch((err) => {
                console.log(err)
                toast.error('Failed to update user')
            });

    }
    return (
        <div>
            {btechdata !== null ? (
                <Formik initialValues={btechdata} onSubmit={UpdateSchool}>
                    {(updateUpbord) => {
                        return <form action="" className='' onSubmit={updateUpbord.handleSubmit}>
                            <div className='flex justify-center m-5 items-center '>
                                <div className='w-[50%] flex-col  border-2 rounded-lg pl-4'>
                                    <h1 className='text-3xl font-semibold text-center mb-4 mt-3 '>Update University</h1>
                                <div>
                                    <label className='pr-2 font-semibold text-xl' htmlFor='SchoolName'>SchoolName:</label>
                                    <input
                                        type="text"
                                        name="SchoolName"
                                        id='SchoolName'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.SchoolName}
                                        className='w-[74%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-1 font-semibold text-xl' htmlFor="SchoolAddress">SchoolAddress:</label>
                                    <input
                                        type="text"
                                        id='SchoolAddress'
                                        name='SchoolAddress'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.SchoolAddress}
                                        className='w-[73%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-1 font-semibold text-xl' htmlFor="schoolDetail">schoolDetail:</label>
                                    <input
                                        type="text"
                                        id='schoolDetail'
                                        name='schoolDetail'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.schoolDetail}
                                        className='w-[73%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="state">state :</label>
                                    <input
                                        type="text"
                                        id='state'
                                        name='state'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.state}
                                        className='w-[75%] border-dotted border-b-2 outline-none  border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee">fee1 :</label>
                                    <input
                                        type="text"
                                        id='fee1'
                                        name='fee1'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee1}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee">fee2 :</label>
                                    <input
                                        type="text"
                                        id='fee2'
                                        name='fee2'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee2}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee3">fee3 :</label>
                                    <input
                                        type="text"
                                        id='fee3'
                                        name='fee3'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee3}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee4">fee4 :</label>
                                    <input
                                        type="text"
                                        id='fee4'
                                        name='fee4'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee4}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee5">fee5 :</label>
                                    <input
                                        type="text"
                                        id='fee5'
                                        name='fee5'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee5}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee6">fee6 :</label>
                                    <input
                                        type="text"
                                        id='fee6'
                                        name='fee6'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee6}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee7">fee7 :</label>
                                    <input
                                        type="text"
                                        id='fee7'
                                        name='fee7'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee7}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee8">fee8 :</label>
                                    <input
                                        type="text"
                                        id='fee8'
                                        name='fee8'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee8}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee9">fee9 :</label>
                                    <input
                                        type="text"
                                        id='fee9'
                                        name='fee9'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee9}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee10">fee10 :</label>
                                    <input
                                        type="text"
                                        id='fee10'
                                        name='fee10'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee10}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee11">fee11 :</label>
                                    <input
                                        type="text"
                                        id='fee11'
                                        name='fee11'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee11}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-12 font-semibold text-xl' htmlFor="fee12">fee12 :</label>
                                    <input
                                        type="text"
                                        id='fee12'
                                        name='fee12'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.fee12}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="cutoff">email:</label>
                                    <input
                                        type="text"
                                        id='email'
                                        name='email'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.email}
                                        className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="phone">phone :</label>
                                    <input
                                        type="text"
                                        id='phone'
                                        name='phone'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.phone}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="Schoolimage">Image:</label>
                                    <input
                                        type="text"
                                        id='Schoolimage'
                                        name='Schoolimage'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.Schoolimage}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="Schoolimage1">Image1:</label>
                                    <input
                                        type="text"
                                        id='Schoolimage1'
                                        name='Schoolimage1'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.Schoolimage1}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="Schoolimage2">Image2:</label>
                                    <input
                                        type="text"
                                        id='Schoolimage2'
                                        name='Schoolimage2'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.Schoolimage2}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="Schoolimage3">Image3:</label>
                                    <input
                                        type="text"
                                        id='Schoolimage3'
                                        name='Schoolimage3'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.Schoolimage3}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="Schoolimage4">Image4:</label>
                                    <input
                                        type="text"
                                        id='Schoolimage4'
                                        name='Schoolimage4'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.Schoolimage4}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="Schoolimage5">Image5:</label>
                                    <input
                                        type="text"
                                        id='Schoolimage5'
                                        name='Schoolimage5'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.Schoolimage5}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="SchoolType">SchoolType :</label>
                                    <input
                                        type="text"
                                        id='SchoolType'
                                        name='SchoolType'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.SchoolType}
                                        className='w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="TeacherCount">TeacherCount :</label>
                                    <input
                                        type="text"
                                        id='TeacherCount'
                                        name='TeacherCount'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.TeacherCount}
                                        className='w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="ClassRoom">ClassRoom :</label>
                                    <input
                                        type="text"
                                        id='ClassRoom'
                                        name='ClassRoom'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.ClassRoom}
                                        className='w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="SecPerClass">SecPerClass :</label>
                                    <input
                                        type="text"
                                        id='SecPerClass'
                                        name='SecPerClass'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.SecPerClass}
                                        className='w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="Year">Year :</label>
                                    <input
                                        type="text"
                                        id='Year'
                                        name='Year'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.Year}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="event1">event1 :</label>
                                    <input
                                        type="text"
                                        id='event1'
                                        name='event1'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.event1}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="event2">event2 :</label>
                                    <input
                                        type="text"
                                        id='event2'
                                        name='event2'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.event2}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="event3">event3 :</label>
                                    <input
                                        type="text"
                                        id='event3'
                                        name='event3'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.event3}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="event4">event4 :</label>
                                    <input
                                        type="text"
                                        id='event4'
                                        name='event4'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.event4}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="Sports1">Sports1 :</label>
                                    <input
                                        type="text"
                                        id='Sports1'
                                        name='Sports1'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.Sports1}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="Sports2">Sports2 :</label>
                                    <input
                                        type="text"
                                        id='Sports2'
                                        name='Sports2'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.Sports2}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="Sports2">comp1:</label>
                                    <input
                                        type="text"
                                        id='comp1'
                                        name='comp1'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.comp1}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="comp2">comp2 :</label>
                                    <input
                                        type="text"
                                        id='comp2'
                                        name='comp2'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.comp2}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="comp3">comp3 :</label>
                                    <input
                                        type="text"
                                        id='comp3'
                                        name='comp3'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.comp3}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="comp4">comp4 :</label>
                                    <input
                                        type="text"
                                        id='comp4'
                                        name='comp4'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.comp4}
                                        className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="AdvanceFsce1">AdvanceFsce1:</label>
                                    <input
                                        type="text"
                                        id='AdvanceFsce1'
                                        name='AdvanceFsce1'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.AdvanceFsce1}
                                        className='w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="AdvanceFsce2">AdvanceFsce2:</label>
                                    <input
                                        type="text"
                                        id='AdvanceFsce2'
                                        name='AdvanceFsce2'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.AdvanceFsce2}
                                        className='w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="AdvanceFsce3">AdvanceFsce3:</label>
                                    <input
                                        type="text"
                                        id='AdvanceFsce3'
                                        name='AdvanceFsce3'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.AdvanceFsce3}
                                        className='w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="let">let:</label>
                                    <input
                                        type="text"
                                        id='let'
                                        name='let'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.let}
                                        className='w-[35%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                    <label className='pr-5 font-semibold text-xl' htmlFor="lng">lng:</label>
                                    <input
                                        type="text"
                                        id='lng'
                                        name='lng'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.lng}
                                        className='w-[35%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                <div>
                                    <label className='pr-5 font-semibold text-xl' htmlFor="district">district:</label>
                                    <input
                                        type="text"
                                        id='district'
                                        name='district'
                                        onChange={updateUpbord.handleChange}
                                        value={updateUpbord.values.district}
                                        className='w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                    />
                                </div>
                                {/* add university link */}
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