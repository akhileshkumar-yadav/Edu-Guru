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
        const res = await axios.get(`http://localhost:5000/admin/adduniversity/getbyid/${id}`)
        console.log(res.data)
        setbtechdata(res.data)
    }

    useEffect(() => {
        fetchRoadMapData()
    }, [])

    const router = useRouter()

    const Addcollege = (values) => {
        console.log(values)

        axios.put('http://localhost:5000/admin/adduniversity/updateuniversity/' + id, values)
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
                <Formik initialValues={btechdata} onSubmit={Addcollege}>
                    {(updateUniversity) => {
                        return <form action="" className='' onSubmit={updateUniversity.handleSubmit}>
                            <div className='flex justify-center m-5 items-center '>
                                <div className='w-[50%] flex-col  border-2 rounded-lg'>
                                    <h1 className='text-3xl font-semibold text-center mb-4 mt-3 '>Update University</h1>
                                    <div>
                                        <label className='pr-2 ml-3 font-semibold text-xl' htmlFor='universityName'>universityName:</label>
                                        <input
                                            type="text"
                                            name="universityName"
                                            id='universityName'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.universityName}
                                            className='w-[70%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-1 ml-3 font-semibold text-xl' htmlFor="universityAddress">universityAddress:</label>
                                        <input
                                            type="text"
                                            id='universityAddress'
                                            name='universityAddress'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.universityAddress}
                                            className='w-[70%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="universityDetail">universityDetail :</label>
                                        <input
                                            type="text"
                                            id='universityDetail'
                                            name='universityDetail'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.universityDetail}
                                            className='w-[75%] border-dotted border-b-2 outline-none  border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-12 ml-3 font-semibold text-xl' htmlFor="fee">fee :</label>
                                        <input
                                            type="text"
                                            id='fee'
                                            name='fee'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.fee}
                                            className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="cutoff">email:</label>
                                        <input
                                            type="text"
                                            id='email'
                                            name='email'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.email}
                                            className='w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="phone">phone :</label>
                                        <input
                                            type="text"
                                            id='phone'
                                            name='phone'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.phone}
                                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    {/* add university link */}
                                    <div>
                                        <label className='pr-5 font-semibold text-xl' htmlFor="linkUniversity">linkUniversity:</label>
                                        <input
                                            type="text"
                                            id='linkUniversity'
                                            name='linkUniversity'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.linkUniversity}
                                            className='w-[80%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    {/* end link code */}

                                    {/* location  */}
                                    <div>
                                        <label className='pr-5 font-semibold text-xl' htmlFor="lat">lat :</label>
                                        <input
                                            type="text"
                                            id='lat'
                                            name='lat'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.lat}
                                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>

                                    <div>
                                        <label className='pr-5 font-semibold text-xl' htmlFor="lng">lng :</label>
                                        <input
                                            type="text"
                                            id='lng'
                                            name='lng'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.lng}
                                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    {/* end */}
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="phone">Courses :</label>
                                        <input
                                            type="text"
                                            id='courses'
                                            name='courses'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.courses}
                                            className='w-[81%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <div>
                                        <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="image">Image :</label>
                                        <input
                                            type="text"
                                            id='image'
                                            name='image'
                                            onChange={updateUniversity.handleChange}
                                            value={updateUniversity.values.image}
                                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                        />
                                    </div>
                                    <hr className='border border-double' />
                                    <h1 className='text-center text-xl font-semibold text-indigo-400 underline mb-2 '>- - Course1 Detail - -</h1>
                                    <div className='flex  flex-wrap '>
                                        <div>
                                            <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="Course1">Course1 :</label>
                                            <input
                                                type="text"
                                                id='Course1'
                                                name='Course1'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Course1}
                                                className='w-[170px]  border-dashed mr-2 border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2  font-semibold ml-4 text-xl' htmlFor="ApplicationDate1">ApplicationDate1:</label>
                                            <input
                                                type="text"
                                                id='ApplicationDate1'
                                                name='ApplicationDate1'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.ApplicationDate1}
                                                className='w-[250px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-5 ml-3 font-semibold text-xl' htmlFor="Fee1">Fee1 :</label>
                                            <input
                                                type="text"
                                                id='Fee1'
                                                name='Fee1'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Fee1}
                                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="Eligibility1">Eligibility1:</label>
                                            <input
                                                type="text"
                                                id='Eligibility1'
                                                name='Eligibility1'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Eligibility1}
                                                className='w-[300px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                    </div>
                                    <hr className='border border-double' />
                                    <h1 className='text-center text-xl font-semibold text-indigo-400 underline mb-2 '>- - Course2 Detail - -</h1>
                                    <div className='flex  flex-wrap '>
                                        <div>
                                            <label className='pr-5 font-semibold text-xl ml-3 ' htmlFor="Course2">Course2 :</label>
                                            <input
                                                type="text"
                                                id='Course2'
                                                name='Course2'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Course2}
                                                className='w-[170px]  border-dashed mr-2 border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold ml-4 text-xl' htmlFor="ApplicationDate2">ApplicationDate2:</label>
                                            <input
                                                type="text"
                                                id='ApplicationDate2'
                                                name='ApplicationDate2'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.ApplicationDate2}
                                                className='w-[250px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-5 font-semibold text-xl ml-3' htmlFor="Fee2">Fee2 :</label>
                                            <input
                                                type="text"
                                                id='Fee2'
                                                name='Fee2'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Fee2}
                                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="Eligibility2">Eligibility2:</label>
                                            <input
                                                type="text"
                                                id='Eligibility2'
                                                name='Eligibility2'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Eligibility2}
                                                className='w-[300px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                    </div>
                                    <hr className='border border-double' />
                                    <h1 className='text-center text-xl font-semibold text-indigo-400 underline mb-2 '>- - Course3 Detail - -</h1>
                                    <div className='flex  flex-wrap '>
                                        <div>
                                            <label className='pr-5 font-semibold ml-3 text-xl' htmlFor="Course3">Course3 :</label>
                                            <input
                                                type="text"
                                                id='Course3'
                                                name='Course3'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Course3}
                                                className='w-[170px]  border-dashed mr-2 border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold ml-4 text-xl' htmlFor="ApplicationDate3">ApplicationDate3:</label>
                                            <input
                                                type="text"
                                                id='ApplicationDate3'
                                                name='ApplicationDate3'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.ApplicationDate3}
                                                className='w-[250px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-5 font-semibold ml-3 text-xl' htmlFor="Fee3">Fee3 :</label>
                                            <input
                                                type="text"
                                                id='Fee3'
                                                name='Fee3'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Fee3}
                                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="Eligibility3">Eligibility3:</label>
                                            <input
                                                type="text"
                                                id='Eligibility3'
                                                name='Eligibility3'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Eligibility3}
                                                className='w-[300px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                    </div>
                                    <hr className='border border-double' />
                                    <h1 className='text-center text-xl font-semibold text-indigo-400 underline mb-2 '>- - Course4 Detail - -</h1>
                                    <div className='flex  flex-wrap '>
                                        <div>
                                            <label className='pr-5 font-semibold ml-3 text-xl' htmlFor="Course4">Course4 :</label>
                                            <input
                                                type="text"
                                                id='Course4'
                                                name='Course4'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Course4}
                                                className='w-[170px]  border-dashed mr-2 border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold ml-4 text-xl' htmlFor="ApplicationDate4">ApplicationDate4:</label>
                                            <input
                                                type="text"
                                                id='ApplicationDate4'
                                                name='ApplicationDate4'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.ApplicationDate4}
                                                className='w-[250px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-5 font-semibold ml-3 text-xl' htmlFor="Fee1">Fee4 :</label>
                                            <input
                                                type="text"
                                                id='Fee4'
                                                name='Fee4'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Fee4}
                                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="Eligibility4">Eligibility4:</label>
                                            <input
                                                type="text"
                                                id='Eligibility4'
                                                name='Eligibility4'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Eligibility4}
                                                className='w-[300px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                    </div>
                                    <hr className='border border-double' />
                                    <h1 className='text-center text-xl font-semibold text-indigo-400 underline mb-2 '>- - Course5 Detail - -</h1>
                                    <div className='flex  flex-wrap '>
                                        <div>
                                            <label className='pr-5 font-semibold ml-3 text-xl' htmlFor="Course5">Course5 :</label>
                                            <input
                                                type="text"
                                                id='Course5'
                                                name='Course5'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Course5}
                                                className='w-[170px]  border-dashed mr-2 border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold ml-4 text-xl' htmlFor="ApplicationDate5">ApplicationDate5:</label>
                                            <input
                                                type="text"
                                                id='ApplicationDate5'
                                                name='ApplicationDate5'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.ApplicationDate5}
                                                className='w-[250px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-5 font-semibold ml-3 text-xl' htmlFor="Fee5">Fee5 :</label>
                                            <input
                                                type="text"
                                                id='Fee5'
                                                name='Fee5'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Fee5}
                                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="Eligibility5">Eligibility5:</label>
                                            <input
                                                type="text"
                                                id='Eligibility5'
                                                name='Eligibility5'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.Eligibility5}
                                                className='w-[300px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="IntroHead">IntroHead:</label>
                                            <input
                                                type="text"
                                                id='IntroHead'
                                                name='IntroHead'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.IntroHead}
                                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="IntroHead1">IntroHead:</label>
                                            <input
                                                type="text"
                                                id='IntroHead1'
                                                name='IntroHead1'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.IntroHead1}
                                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                                            />
                                        </div>
                                        <div>
                                            {/* <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Introduction</label> */}
                                            <textarea
                                                name="intro"
                                                id="intro"
                                                placeholder='Introduction'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.intro}
                                                className='w-[180%]  border-dashed ml-3 border-b-2 outline-none border-b-gray-600 mb-4'
                                            >

                                            </textarea>
                                            <textarea
                                                name="introHeading"
                                                id="introHeading"
                                                placeholder='IntroductionHeading'
                                                onChange={updateUniversity.handleChange}
                                                value={updateUniversity.values.introHeading}
                                                className='w-[180%]  border-dashed ml-3 border-b-2 outline-none border-b-gray-600 mb-4'
                                            >

                                            </textarea>
                                        </div>
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