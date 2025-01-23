'use client'
import { useFormik } from 'formik';
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const AddUniversity = () => {
    const addcollege = useFormik({
        initialValues: {
            universityName: '',
            universityAddress: '',
            universityDetail: '',
            fee: '',
            email: '',
            phone: '',
            image: '',
            courses: '',
            linkUniversity:'',
            let:'',
            lng:'',
            category: '',
            Course1: '',
            Course2: '',
            Course3: '',
            Course4: '',
            Course5: '',
            Fee1: '',
            Fee2: '',
            Fee3: '',
            Fee4: '',
            Fee5: '',
            Eligibility1: '',
            Eligibility2: '',
            Eligibility3: '',
            Eligibility4: '',
            Eligibility5: '',
            ApplicationDate1: '',
            ApplicationDate2: '',
            ApplicationDate3: '',
            ApplicationDate4: '',
            ApplicationDate5: '',
            categoryViewPage: '',
            IntroHead:'',
            IntroHead1:'',
            intro:'',
            introHeading:'',
            info:'',
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            // resetForm()
            // toast.success('signup successfull')
            axios.post('http://localhost:5000/admin/adduniversity/add', values)
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
                        <label className='pr-2 font-semibold text-xl' htmlFor='universityName'>UniversityName:</label>
                        <input
                            type="text"
                            name="universityName"
                            id='universityName'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.universityName}
                            className='w-[74%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                    <div>
                        <label className='pr-1 font-semibold text-xl' htmlFor="universityAddress">universityAddress:</label>
                        <input
                            type="text"
                            id='universityAddress'
                            name='universityAddress'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.universityAddress}
                            className='w-[73%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                    <div>
                        <label className='pr-5 font-semibold text-xl' htmlFor="universityDetail">universityDetail :</label>
                        <input
                            type="text"
                            id='universityDetail'
                            name='universityDetail'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.universityDetail}
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
                        {/* add university link */}
                        <div>
                        <label className='pr-5 font-semibold text-xl' htmlFor="linkUniversity">linkUniversity:</label>
                        <input
                            type="text"
                            id='linkUniversity'
                            name='linkUniversity'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.linkUniversity}
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
                            onChange={addcollege.handleChange}
                            value={addcollege.values.lat}
                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                     
                    <div>
                        <label className='pr-5 font-semibold text-xl' htmlFor="lng">lng :</label>
                        <input
                            type="text"
                            id='lng'
                            name='lng'
                            onChange={addcollege.handleChange}
                            value={addcollege.values.lng}
                            className='w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                        />
                    </div>
                        {/* end */}
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
                    <hr className='border border-double' />
                    <h1 className='text-center text-xl font-semibold text-indigo-400 underline mb-2 '>- - Course1 Detail - -</h1>
                    <div className='flex  flex-wrap '>
                        <div>
                            <label className='pr-5 font-semibold text-xl' htmlFor="Course1">Course1 :</label>
                            <input
                                type="text"
                                id='Course1'
                                name='Course1'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Course1}
                                className='w-[170px]  border-dashed mr-2 border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold ml-4 text-xl' htmlFor="ApplicationDate1">ApplicationDate1:</label>
                            <input
                                type="text"
                                id='ApplicationDate1'
                                name='ApplicationDate1'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.ApplicationDate1}
                                className='w-[250px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-5 font-semibold text-xl' htmlFor="Fee1">Fee1 :</label>
                            <input
                                type="text"
                                id='Fee1'
                                name='Fee1'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Fee1}
                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="Eligibility1">Eligibility1:</label>
                            <input
                                type="text"
                                id='Eligibility1'
                                name='Eligibility1'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Eligibility1}
                                className='w-[300px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                    </div>
                    <hr className='border border-double' />
                    <h1 className='text-center text-xl font-semibold text-indigo-400 underline mb-2 '>- - Course2 Detail - -</h1>
                    <div className='flex  flex-wrap '>
                        <div>
                            <label className='pr-5 font-semibold text-xl' htmlFor="Course2">Course2 :</label>
                            <input
                                type="text"
                                id='Course2'
                                name='Course2'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Course2}
                                className='w-[170px]  border-dashed mr-2 border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold ml-4 text-xl' htmlFor="ApplicationDate2">ApplicationDate2:</label>
                            <input
                                type="text"
                                id='ApplicationDate2'
                                name='ApplicationDate2'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.ApplicationDate2}
                                className='w-[250px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-5 font-semibold text-xl' htmlFor="Fee2">Fee2 :</label>
                            <input
                                type="text"
                                id='Fee2'
                                name='Fee2'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Fee2}
                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="Eligibility2">Eligibility2:</label>
                            <input
                                type="text"
                                id='Eligibility2'
                                name='Eligibility2'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Eligibility2}
                                className='w-[300px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                    </div>
                    <hr className='border border-double' />
                    <h1 className='text-center text-xl font-semibold text-indigo-400 underline mb-2 '>- - Course3 Detail - -</h1>
                    <div className='flex  flex-wrap '>
                        <div>
                            <label className='pr-5 font-semibold text-xl' htmlFor="Course3">Course3 :</label>
                            <input
                                type="text"
                                id='Course3'
                                name='Course3'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Course3}
                                className='w-[170px]  border-dashed mr-2 border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold ml-4 text-xl' htmlFor="ApplicationDate3">ApplicationDate3:</label>
                            <input
                                type="text"
                                id='ApplicationDate3'
                                name='ApplicationDate3'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.ApplicationDate3}
                                className='w-[250px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-5 font-semibold text-xl' htmlFor="Fee3">Fee3 :</label>
                            <input
                                type="text"
                                id='Fee3'
                                name='Fee3'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Fee3}
                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="Eligibility3">Eligibility3:</label>
                            <input
                                type="text"
                                id='Eligibility3'
                                name='Eligibility3'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Eligibility3}
                                className='w-[300px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                    </div>
                    <hr className='border border-double' />
                    <h1 className='text-center text-xl font-semibold text-indigo-400 underline mb-2 '>- - Course4 Detail - -</h1>
                    <div className='flex  flex-wrap '>
                        <div>
                            <label className='pr-5 font-semibold text-xl' htmlFor="Course4">Course4 :</label>
                            <input
                                type="text"
                                id='Course4'
                                name='Course4'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Course4}
                                className='w-[170px]  border-dashed mr-2 border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold ml-4 text-xl' htmlFor="ApplicationDate4">ApplicationDate4:</label>
                            <input
                                type="text"
                                id='ApplicationDate4'
                                name='ApplicationDate4'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.ApplicationDate4}
                                className='w-[250px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-5 font-semibold text-xl' htmlFor="Fee1">Fee4 :</label>
                            <input
                                type="text"
                                id='Fee4'
                                name='Fee4'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Fee4}
                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="Eligibility4">Eligibility4:</label>
                            <input
                                type="text"
                                id='Eligibility4'
                                name='Eligibility4'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Eligibility4}
                                className='w-[300px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                    </div>
                    <hr className='border border-double' />
                    <h1 className='text-center text-xl font-semibold text-indigo-400 underline mb-2 '>- - Course5 Detail - -</h1>
                    <div className='flex  flex-wrap '>
                        <div>
                            <label className='pr-5 font-semibold text-xl' htmlFor="Course5">Course5 :</label>
                            <input
                                type="text"
                                id='Course5'
                                name='Course5'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Course5}
                                className='w-[170px]  border-dashed mr-2 border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold ml-4 text-xl' htmlFor="ApplicationDate5">ApplicationDate5:</label>
                            <input
                                type="text"
                                id='ApplicationDate5'
                                name='ApplicationDate5'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.ApplicationDate5}
                                className='w-[250px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-5 font-semibold text-xl' htmlFor="Fee5">Fee5 :</label>
                            <input
                                type="text"
                                id='Fee5'
                                name='Fee5'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Fee5}
                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="Eligibility5">Eligibility5:</label>
                            <input
                                type="text"
                                id='Eligibility5'
                                name='Eligibility5'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.Eligibility5}
                                className='w-[300px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="IntroHead">IntroHead:</label>
                            <input
                                type="text"
                                id='IntroHead'
                                name='IntroHead'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.IntroHead}
                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            <label className='pr-2 font-semibold  ml-4 text-xl' htmlFor="IntroHead1">IntroHead:</label>
                            <input
                                type="text"
                                id='IntroHead1'
                                name='IntroHead1'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.IntroHead1}
                                className='w-[200px]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            />
                        </div>
                        <div>
                            {/* <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Introduction</label> */}
                            <textarea
                                name="intro"
                                id="intro"
                                placeholder='Introduction'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.intro}
                                className='w-[190%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            >

                            </textarea>
                            <textarea
                                name="introHeading"
                                id="introHeading"
                                placeholder='IntroductionHeading'
                                onChange={addcollege.handleChange}
                                value={addcollege.values.introHeading}
                                className='w-[190%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4'
                            >

                            </textarea>
                        </div>
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

export default AddUniversity