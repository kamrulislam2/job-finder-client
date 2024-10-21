import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { GrMap } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ApplyNow = () => {
  const allJobs = useLoaderData();
  const { id } = useParams();
  const {
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
    // const applicationForm = {
    //   Name: data.name,
    //   Email: data.email,
    //   Phone: data.phone,
    //   Resume: data.resume[0].name,
    //   JobTitle: jobTitle,
    //   CompanyName: companyName,
    // };
    // console.log(applicationForm);

    emailjs
      .sendForm(
        "service_lihlaix",
        "template_cqsstgy",
        {
          form_name: data.name,
          form_email: data.email,
          //   Phone: data.phone,
          //   Resume: data.resume[0].name,
          //   JobTitle: jobTitle,
          //   CompanyName: companyName,
        },
        {
          publicKey: "rF_0gEevPF1M6VvtC",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="h-60 bg-[#65e7a1] flex items-center justify-center mb-20 flex-col">
        <h2 className="text-4xl font-bold ">Application Form - {jobTitle}</h2>

        <br />
        <p className="w-1/3 text-center text-lg">
          Complete and submit your application for <b> {jobTitle} </b>
          effortlessly through our comprehensive and user-friendly form,
          designed to guide you every step of the way.
        </p>
      </div>

      <div className="w-1/2 mx-auto mb-20 text-left rounded-lg px-8 py-10 h-full border-b-8 border-[1px] border-b-[#4CAF7A] border-[#4CAF7A] rounded-b-2xl  shadow-2xl shadow-slate-400">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl ">{jobTitle}</h2>
          <p className="text-xs">Deadline: {deadline}</p>
        </div>
        <p className="text-[10px] mb-2 text-muted-foreground">
          Category: {jobCategory}
        </p>
        <p className="font-semibold text-lg text-gray-500">{companyName}</p>

        <p className="border rounded-md border-[#4CAF7A] text-[#4CAF7A] font-extrabold text-base text-center py-2 px-5 w-1/3 my-3">
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
        {/* <Link to={`/applyNow/${_id}`}>
          <button className="font-bold text-lg text-white bg-[#4CAF7A] hover:bg-[#54c388] py-3 px-3 lg:px-5 rounded-lg mb-auto shadow-2xl shadow-slate-700 hover:transition-all hover:scale-105">
            Apply Now
          </button>
        </Link> */}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-xl mx-auto w-2/3  mb-20 text-left rounded-lg px-8 py-10 h-full border-b-8 border-[1px] border-b-[#4CAF7A] border-[#4CAF7A] rounded-b-2xl  shadow-2xl shadow-slate-400"
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
        <div className="mb-8">
          <label htmlFor="resume" className="cursor-pointer text-lg font-bold">
            Resume
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="Please drop your resume"
            {...register("resume")}
            required
          />
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyNow;
