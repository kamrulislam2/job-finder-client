import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { GrMap } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import FileUpload from "@/components/ui/file/FileUpload";

const ApplyNow = () => {
  const allJobs = useLoaderData();
  const { id } = useParams();

  const [pdfFile, setPdfFile] = useState(null);
  // pdf file upload function
  const handlePdfFileChange = (selectedFile) => {
    setPdfFile(selectedFile);
  };

  const {
    _id,
    jobTitle,
    companyName,
    jobType,
    jobLocation,
    jobCategory,
    jobDescription,
    responsibilities,
    requirements,
    salary,
    deadline,
  } = allJobs?.find((job) => job._id === id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const applicationData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      resume: pdfFile,
      jobTitle: jobTitle,
      companyName: companyName,
      yourself: data.yourself,
    };

    fetch("https://job-filder-server.vercel.app/appliedJob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire(
            "You have successfully applied for the job!",
            "",
            "success"
          );
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        Swal.fire("Error", "Could not submit your application", "error");
      });
  };

  return (
    <div>
      <div className="h-full md:h-60 p-12 md:py-16 bg-[#65e7a1] flex items-center justify-center mb-20 flex-col">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Application Form - {jobTitle}
        </h2>

        <br />
        <p className="w-full  sm:w-2/3 md:w-1/3 text-center text-lg">
          Complete and submit your application for <b> {jobTitle} </b>
          effortlessly through our comprehensive and user-friendly form,
          designed to guide you every step of the way.
        </p>
      </div>

      <div className="w-5/6 md:w-4/6 lg:w-1/2 mx-auto mb-20 text-left rounded-lg px-6 sm:px-8 py-10 h-full border-b-8 border-[1px] border-b-[#4CAF7A] border-[#4CAF7A] rounded-b-2xl  shadow-2xl shadow-slate-400">
        <div className="sm:flex justify-between items-center">
          <h2 className="font-bold text-xl ">{jobTitle}</h2>
          <p className="text-xs mt-2 sm:mt-0">Deadline: {deadline}</p>
        </div>
        <p className="text-[10px] mb-2 text-muted-foreground">
          Category: {jobCategory}
        </p>
        <p className="font-semibold text-lg text-gray-500">{companyName}</p>

        <p className="border rounded-md border-[#4CAF7A] text-[#4CAF7A] font-extrabold text-base text-center py-2 px-5 sm:w-1/3 my-3">
          {jobType}
        </p>
        <p className="inline-flex gap-2 items-center font-semibold text-lg text-gray-500 mb-4 lg:mb-0">
          <GrMap className="h-6 w-6 bg-white" />
          Location: {jobLocation}
        </p>
        <br />
        <p className=" font-semibold text-lg text-gray-500 break-words inline-flex gap-2 items-center mb-4">
          <HiOutlineCurrencyDollar className="h-6 w-6 bg-white" />
          Salary : {salary}
        </p>

        <br />

        <div className="my-10">
          <h2 className="text-xl font-bold mb-4">Job Descriptions:</h2>
          <p className="text-gray-500">{jobDescription}</p>
        </div>
        <div className="my-10">
          <h2 className="text-xl font-bold mb-4">Job Responsibilities:</h2>
          <p className="text-gray-500">{responsibilities}</p>
        </div>
        <div className="my-10">
          <h2 className="text-xl font-bold mb-4">Requirements:</h2>
          <p className="text-gray-500">{requirements}</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-xl mx-auto w-5/6 sm:w-2/3  mb-20 text-left rounded-lg px-8 py-10 h-full border-b-8 border-[1px] border-b-[#4CAF7A] border-[#4CAF7A] rounded-b-2xl  shadow-2xl shadow-slate-400"
      >
        {/* Name*/}
        <div className="mb-8">
          <label htmlFor="name" className="cursor-pointer text-lg font-bold">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="E.g. John Smith"
            {...register("name")}
            required
          />
        </div>

        {/* Email Address */}
        <div className="mb-8">
          <label htmlFor="email" className="cursor-pointer text-lg font-bold">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="E.g. example@email.com"
            {...register("email")}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-8">
          <label htmlFor="phone" className="cursor-pointer text-lg font-bold">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="E.g. +8801800-000000"
            {...register("phone")}
            required
          />
        </div>

        {/* Resume or CV */}
        <div className="mb-8 rounded-lg">
          <label htmlFor="resume" className="cursor-pointer text-lg font-bold">
            Please Upload Your Resume{" "}
            <span className="font-bold">(PDF Only):</span>
          </label>
          <FileUpload onPdfFileChange={handlePdfFileChange} />
        </div>

        {/* About yourself */}
        <div className="mb-8">
          <label
            htmlFor="yourself"
            className="cursor-pointer text-lg font-bold"
          >
            About yourself
          </label>
          <textarea
            type="text"
            id="yourself"
            rows="4"
            cols="50"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="E.g. Write about yourself..."
            {...register("yourself")}
            required
          ></textarea>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            type="button"
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-md bg-[#4CAF7A] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#54c388] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF7A]"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyNow;
