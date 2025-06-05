"use client";
import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const addupBord = () => {
  const addcollege = useFormik({
    initialValues: {
      SchoolName: "",
      SchoolAddress: "",
      schoolDetail: "",
      state: "",
      email: "",
      phone: "",
      SchoolimageLogo: "",
      Gallaryimage1: "",
      Gallaryimage2: "",
      Gallaryimage3: "",
      Gallaryimage4: "",
      Gallaryimage5: "",
      parentSay1: "",
      parentName1: "",
      parentImage1: "",
      studentName1: "",
      studentClass1: "",
      parentSay2: "",
      parentName2: "",
      parentImage2: "",
      studentName2: "",
      studentClass2: "",
      parentSay3: "",
      parentName3: "",
      parentImage3: "",
      studentName3: "",
      studentClass3: "",
      parentSay4: "",
      parentName4: "",
      parentImage4: "",
      studentName4: "",
      studentClass4: "",
      district: "",
      head1: "",
      head2: "",
      info1: "",
      info2: "",
      Facilities1: "",
      FacilitiesImage1: "",
      Facilities2: "",
      FacilitiesImage2: "",
      Facilities3: "",
      FacilitiesImage3: "",
      Facilities4: "",
      FacilitiesImage4: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // resetForm()
      // toast.success('signup successfull')
      axios
        .post("http://localhost:5000/admin/addupBord/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("addform  info add successfully");
          // router.push('/')
        })
        .catch((err) => {
          console.log(err);
          toast.error("Error");
        });
    },
  });
  return (
    <div className="flex justify-center m-5 items-center ">
      <div className="w-[50%] flex-col   border-2 rounded-lg">
        <h1 className="text-3xl font-semibold text-center mb-4 mt-3 ">
          Add School
        </h1>
        <form onSubmit={addcollege.handleSubmit} className="ml-5">
          <div>
            <label className="pr-2 font-semibold text-xl" htmlFor="SchoolName">
              SchoolName:
            </label>
            <input
              type="text"
              name="SchoolName"
              id="SchoolName"
              onChange={addcollege.handleChange}
              value={addcollege.values.SchoolName}
              className="w-[74%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-1 font-semibold text-xl"
              htmlFor="SchoolAddress"
            >
              SchoolAddress:
            </label>
            <input
              type="text"
              id="SchoolAddress"
              name="SchoolAddress"
              onChange={addcollege.handleChange}
              value={addcollege.values.SchoolAddress}
              className="w-[73%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-1 font-semibold text-xl"
              htmlFor="schoolDetail"
            >
              schoolDetail:
            </label>
            <input
              type="text"
              id="schoolDetail"
              name="schoolDetail"
              onChange={addcollege.handleChange}
              value={addcollege.values.schoolDetail}
              className="w-[73%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="state">
              state :
            </label>
            <input
              type="text"
              id="state"
              name="state"
              onChange={addcollege.handleChange}
              value={addcollege.values.state}
              className="w-[75%] border-dotted border-b-2 outline-none  border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="cutoff">
              email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={addcollege.handleChange}
              value={addcollege.values.email}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="phone">
              phone :
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={addcollege.handleChange}
              value={addcollege.values.phone}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="SchoolimageLogo"
            >
              SchoolimageLogo:
            </label>
            <input
              type="text"
              id="SchoolimageLogo"
              name="SchoolimageLogo"
              onChange={addcollege.handleChange}
              value={addcollege.values.SchoolimageLogo}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="Schoolimage1"
            >
              Gallaryimage1:
            </label>
            <input
              type="text"
              id="Gallaryimage1"
              name="Gallaryimage1"
              onChange={addcollege.handleChange}
              value={addcollege.values.Gallaryimage1}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="Gallaryimage2"
            >
              Image2:
            </label>
            <input
              type="text"
              id="Gallaryimage2"
              name="Gallaryimage2"
              onChange={addcollege.handleChange}
              value={addcollege.values.Gallaryimage2}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="Schoolimage3"
            >
              Image3:
            </label>
            <input
              type="text"
              id="Schoolimage3"
              name="Schoolimage3"
              onChange={addcollege.handleChange}
              value={addcollege.values.Gallaryimage3}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="Gallaryimage4"
            >
              Image4:
            </label>
            <input
              type="text"
              id="Gallaryimage4"
              name="Gallaryimage4"
              onChange={addcollege.handleChange}
              value={addcollege.values.Gallaryimage4}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="Gallaryimage5"
            >
              Image5:
            </label>
            <input
              type="text"
              id="Gallaryimage5"
              name="Gallaryimage5"
              onChange={addcollege.handleChange}
              value={addcollege.values.Gallaryimage5}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="parentSay1">
              parentSay1:
            </label>
            <input
              type="text"
              id="parentSay1"
              name="parentSay1"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentSay1}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="parentName1">
              parentName1:
            </label>
            <input
              type="text"
              id="parentName1"
              name="parentName1"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentName1}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="parentImage1"
            >
              parentImage1:
            </label>
            <input
              type="text"
              id="parentImage1"
              name="parentImage1"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentImage1}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="studentName1"
            >
              studentName1:
            </label>
            <input
              type="text"
              id="studentName1"
              name="studentName1"
              onChange={addcollege.handleChange}
              value={addcollege.values.studentName1}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="studentClass1"
            >
              studentClass1:
            </label>
            <input
              type="text"
              id="studentClass1"
              name="studentClass1"
              onChange={addcollege.handleChange}
              value={addcollege.values.studentClass1}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="parentSay2">
              parentSay2:
            </label>
            <input
              type="text"
              id="parentSay2"
              name="parentSay2"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentSay2}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="parentName2">
              parentName2:
            </label>
            <input
              type="text"
              id="parentName2"
              name="parentName2"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentName2}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="parentImage2"
            >
              parentImage2:
            </label>
            <input
              type="text"
              id="parentImage2"
              name="parentImage2"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentImage2}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="studentName2"
            >
              studentName2:
            </label>
            <input
              type="text"
              id="studentName2"
              name="studentName2"
              onChange={addcollege.handleChange}
              value={addcollege.values.studentName2}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="studentClass2"
            >
              studentClass2:
            </label>
            <input
              type="text"
              id="studentClass2"
              name="studentClass2"
              onChange={addcollege.handleChange}
              value={addcollege.values.studentClass2}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="parentSay3">
              parentSay3:
            </label>
            <input
              type="text"
              id="parentSay3"
              name="parentSay3"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentSay3}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="parentName3">
              parentName3:
            </label>
            <input
              type="text"
              id="parentName3"
              name="parentName3"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentName3}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="parentImage3"
            >
              parentImage3:
            </label>
            <input
              type="text"
              id="parentImage3"
              name="parentImage3"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentImage3}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="studentName3"
            >
              studentName3:
            </label>
            <input
              type="text"
              id="studentName3"
              name="studentName3"
              onChange={addcollege.handleChange}
              value={addcollege.values.studentName3}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="studentClass3"
            >
              studentClass3:
            </label>
            <input
              type="text"
              id="studentClass3"
              name="studentClass3"
              onChange={addcollege.handleChange}
              value={addcollege.values.studentClass3}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="parentSay4">
              parentSay4:
            </label>
            <input
              type="text"
              id="parentSay4"
              name="parentSay4"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentSay4}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="parentName">
              parentName4:
            </label>
            <input
              type="text"
              id="parentName4"
              name="parentName4"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentName4}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="parentImage4"
            >
              parentImage4:
            </label>
            <input
              type="text"
              id="parentImage4"
              name="parentImage4"
              onChange={addcollege.handleChange}
              value={addcollege.values.parentImage4}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="studentName4"
            >
              studentName4:
            </label>
            <input
              type="text"
              id="studentName4"
              name="studentName4"
              onChange={addcollege.handleChange}
              value={addcollege.values.studentName4}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="studentClass4"
            >
              studentClass4:
            </label>
            <input
              type="text"
              id="studentClass4"
              name="studentClass4"
              onChange={addcollege.handleChange}
              value={addcollege.values.studentClass4}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="district">
              district:
            </label>
            <input
              type="text"
              id="district"
              name="district"
              onChange={addcollege.handleChange}
              value={addcollege.values.district}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="head1">
              district:
            </label>
            <input
              type="text"
              id="head1"
              name="head1"
              onChange={addcollege.handleChange}
              value={addcollege.values.head1}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="head2">
              district:
            </label>
            <input
              type="text"
              id="head2"
              name="head2"
              onChange={addcollege.handleChange}
              value={addcollege.values.head2}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="info1">
              district:
            </label>
            <input
              type="text"
              id="info1"
              name="info1"
              onChange={addcollege.handleChange}
              value={addcollege.values.info1}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          {/* add university link */}
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="info2">
              district:
            </label>
            <input
              type="text"
              id="info2"
              name="info2"
              onChange={addcollege.handleChange}
              value={addcollege.values.info2}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="Facilities1">
              Facilities1:
            </label>
            <input
              type="text"
              id="Facilities1"
              name="Facilities1"
              onChange={addcollege.handleChange}
              value={addcollege.values.Facilities1}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="Facilities2">
              Facilities2:
            </label>
            <input
              type="text"
              id="Facilities2"
              name="Facilities2"
              onChange={addcollege.handleChange}
              value={addcollege.values.Facilities2}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="Facilities3">
              Facilities3:
            </label>
            <input
              type="text"
              id="Facilities3"
              name="Facilities3"
              onChange={addcollege.handleChange}
              value={addcollege.values.Facilities3}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="Facilities4">
              Facilities4:
            </label>
            <input
              type="text"
              id="Facilities4"
              name="Facilities4"
              onChange={addcollege.handleChange}
              value={addcollege.values.Facilities4}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="FacilitiesImage1"
            >
              FacilitiesImage1:
            </label>
            <input
              type="text"
              id="FacilitiesImage1"
              name="FacilitiesImage1"
              onChange={addcollege.handleChange}
              value={addcollege.values.FacilitiesImage1}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="FacilitiesImage2"
            >
              FacilitiesImage2:
            </label>
            <input
              type="text"
              id="FacilitiesImage2"
              name="FacilitiesImage2"
              onChange={addcollege.handleChange}
              value={addcollege.values.FacilitiesImage2}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="FacilitiesImage3"
            >
              FacilitiesImage3:
            </label>
            <input
              type="text"
              id="FacilitiesImage3"
              name="FacilitiesImage3"
              onChange={addcollege.handleChange}
              value={addcollege.values.FacilitiesImage3}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="FacilitiesImage4"
            >
              FacilitiesImage4:
            </label>
            <input
              type="text"
              id="FacilitiesImage4"
              name="FacilitiesImage4"
              onChange={addcollege.handleChange}
              value={addcollege.values.FacilitiesImage4}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div className="flex w-[100%] justify-center items-center">
            <button
              type="submit"
              className=" bg-orange-400 text-white text-lg font-medium px-5 py-[3px] mb-3 rounded-3xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addupBord;
