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
      fee1: "",
      fee2: "",
      fee3: "",
      fee4: "",
      fee5: "",
      fee6: "",
      fee7: "",
      fee8: "",
      fee9: "",
      fee10: "",
      fee11: "",
      fee12: "",
      email: "",
      phone: "",
      Schoolimage: "",
      Schoolimage1: "",
      Schoolimage2: "",
      Schoolimage3: "",
      Schoolimage4: "",
      Schoolimage5: "",
      SchoolType: "",
      TeacherCount: "",
      ClassRoom: "",
      SecPerClass: "",
      Year: "",
      event1: "",
      event2: "",
      event3: "",
      event4: "",
      Sports1: "",
      Sports2: "",
      comp1: "",
      comp2: "",
      comp3: "",
      comp4: "",
      AdvanceFsce1: "",
      AdvanceFsce2: "",
      AdvanceFsce3: "",
      let: "",
      lng: "",
      district: "",
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
            <label className="pr-12 font-semibold text-xl" htmlFor="fee">
              fee1 :
            </label>
            <input
              type="text"
              id="fee1"
              name="fee1"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee1}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee">
              fee2 :
            </label>
            <input
              type="text"
              id="fee2"
              name="fee2"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee2}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee3">
              fee3 :
            </label>
            <input
              type="text"
              id="fee3"
              name="fee3"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee3}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee4">
              fee4 :
            </label>
            <input
              type="text"
              id="fee4"
              name="fee4"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee4}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee5">
              fee5 :
            </label>
            <input
              type="text"
              id="fee5"
              name="fee5"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee5}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee6">
              fee6 :
            </label>
            <input
              type="text"
              id="fee6"
              name="fee6"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee6}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee7">
              fee7 :
            </label>
            <input
              type="text"
              id="fee7"
              name="fee7"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee7}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee8">
              fee8 :
            </label>
            <input
              type="text"
              id="fee8"
              name="fee8"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee8}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee9">
              fee9 :
            </label>
            <input
              type="text"
              id="fee9"
              name="fee9"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee9}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee10">
              fee10 :
            </label>
            <input
              type="text"
              id="fee10"
              name="fee10"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee10}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee11">
              fee11 :
            </label>
            <input
              type="text"
              id="fee11"
              name="fee11"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee11}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-12 font-semibold text-xl" htmlFor="fee12">
              fee12 :
            </label>
            <input
              type="text"
              id="fee12"
              name="fee12"
              onChange={addcollege.handleChange}
              value={addcollege.values.fee12}
              className="w-[85%] border-dotted border-b-2 outline-none border-b-gray-600 mb-4"
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
            <label className="pr-5 font-semibold text-xl" htmlFor="Schoolimage">
              Image:
            </label>
            <input
              type="text"
              id="Schoolimage"
              name="Schoolimage"
              onChange={addcollege.handleChange}
              value={addcollege.values.Schoolimage}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="Schoolimage1"
            >
              Image1:
            </label>
            <input
              type="text"
              id="Schoolimage1"
              name="Schoolimage1"
              onChange={addcollege.handleChange}
              value={addcollege.values.Schoolimage1}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="Schoolimage2"
            >
              Image2:
            </label>
            <input
              type="text"
              id="Schoolimage2"
              name="Schoolimage2"
              onChange={addcollege.handleChange}
              value={addcollege.values.Schoolimage2}
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
              value={addcollege.values.Schoolimage3}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="Schoolimage4"
            >
              Image4:
            </label>
            <input
              type="text"
              id="Schoolimage4"
              name="Schoolimage4"
              onChange={addcollege.handleChange}
              value={addcollege.values.Schoolimage4}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="Schoolimage5"
            >
              Image5:
            </label>
            <input
              type="text"
              id="Schoolimage5"
              name="Schoolimage5"
              onChange={addcollege.handleChange}
              value={addcollege.values.Schoolimage5}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="SchoolType">
              SchoolType :
            </label>
            <input
              type="text"
              id="SchoolType"
              name="SchoolType"
              onChange={addcollege.handleChange}
              value={addcollege.values.SchoolType}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="TeacherCount"
            >
              TeacherCount :
            </label>
            <input
              type="text"
              id="TeacherCount"
              name="TeacherCount"
              onChange={addcollege.handleChange}
              value={addcollege.values.TeacherCount}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="ClassRoom">
              ClassRoom :
            </label>
            <input
              type="text"
              id="ClassRoom"
              name="ClassRoom"
              onChange={addcollege.handleChange}
              value={addcollege.values.ClassRoom}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="SecPerClass">
              SecPerClass :
            </label>
            <input
              type="text"
              id="SecPerClass"
              name="SecPerClass"
              onChange={addcollege.handleChange}
              value={addcollege.values.SecPerClass}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="Year">
              Year :
            </label>
            <input
              type="text"
              id="Year"
              name="Year"
              onChange={addcollege.handleChange}
              value={addcollege.values.Year}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="event1">
              event1 :
            </label>
            <input
              type="text"
              id="event1"
              name="event1"
              onChange={addcollege.handleChange}
              value={addcollege.values.event1}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="event2">
              event2 :
            </label>
            <input
              type="text"
              id="event2"
              name="event2"
              onChange={addcollege.handleChange}
              value={addcollege.values.event2}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="event3">
              event3 :
            </label>
            <input
              type="text"
              id="event3"
              name="event3"
              onChange={addcollege.handleChange}
              value={addcollege.values.event3}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="event4">
              event4 :
            </label>
            <input
              type="text"
              id="event4"
              name="event4"
              onChange={addcollege.handleChange}
              value={addcollege.values.event4}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="Sports1">
              Sports1 :
            </label>
            <input
              type="text"
              id="Sports1"
              name="Sports1"
              onChange={addcollege.handleChange}
              value={addcollege.values.Sports1}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="Sports2">
              Sports2 :
            </label>
            <input
              type="text"
              id="Sports2"
              name="Sports2"
              onChange={addcollege.handleChange}
              value={addcollege.values.Sports2}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="Sports2">
              comp1:
            </label>
            <input
              type="text"
              id="comp1"
              name="comp1"
              onChange={addcollege.handleChange}
              value={addcollege.values.comp1}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="comp2">
              comp2 :
            </label>
            <input
              type="text"
              id="comp2"
              name="comp2"
              onChange={addcollege.handleChange}
              value={addcollege.values.comp2}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="comp3">
              comp3 :
            </label>
            <input
              type="text"
              id="comp3"
              name="comp3"
              onChange={addcollege.handleChange}
              value={addcollege.values.comp3}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="comp4">
              comp4 :
            </label>
            <input
              type="text"
              id="comp4"
              name="comp4"
              onChange={addcollege.handleChange}
              value={addcollege.values.comp4}
              className="w-[85%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="AdvanceFsce1"
            >
              AdvanceFsce1:
            </label>
            <input
              type="text"
              id="AdvanceFsce1"
              name="AdvanceFsce1"
              onChange={addcollege.handleChange}
              value={addcollege.values.AdvanceFsce1}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="AdvanceFsce2"
            >
              AdvanceFsce2:
            </label>
            <input
              type="text"
              id="AdvanceFsce2"
              name="AdvanceFsce2"
              onChange={addcollege.handleChange}
              value={addcollege.values.AdvanceFsce2}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label
              className="pr-5 font-semibold text-xl"
              htmlFor="AdvanceFsce3"
            >
              AdvanceFsce3:
            </label>
            <input
              type="text"
              id="AdvanceFsce3"
              name="AdvanceFsce3"
              onChange={addcollege.handleChange}
              value={addcollege.values.AdvanceFsce3}
              className="w-[75%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
          </div>
          <div>
            <label className="pr-5 font-semibold text-xl" htmlFor="let">
              let:
            </label>
            <input
              type="text"
              id="let"
              name="let"
              onChange={addcollege.handleChange}
              value={addcollege.values.let}
              className="w-[35%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
            />
            <label className="pr-5 font-semibold text-xl" htmlFor="lng">
              lng:
            </label>
            <input
              type="text"
              id="lng"
              name="lng"
              onChange={addcollege.handleChange}
              value={addcollege.values.lng}
              className="w-[35%]  border-dashed border-b-2 outline-none border-b-gray-600 mb-4"
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
          {/* add university link */}
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
