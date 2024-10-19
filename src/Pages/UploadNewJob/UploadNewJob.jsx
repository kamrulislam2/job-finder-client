import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const UploadNewJob = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mb-20">
      <div className="h-60 bg-[#65e7a1] flex items-center justify-center mb-20 flex-col">
        <h2 className="text-4xl font-bold ">Upload New Job</h2>
        <br />
        <p className="w-1/3 text-center text-lg">
          Easily post and upload new job opportunities to connect with top
          talent ahead.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-xl mx-auto w-1/2  mb-20 text-left rounded-lg px-8 py-10 h-full border-b-8 border-[1px] border-b-[#4CAF7A] border-[#4CAF7A] rounded-b-2xl  shadow-2xl shadow-slate-400"
      >
        {/* Job Title and Date */}
        <div className="grid grid-cols-2 gap-5 mb-8">
          <div>
            <label
              htmlFor="jobTitle"
              className="cursor-pointer text-lg font-bold"
            >
              Job Title
            </label>
            <input
              id="jobTitle"
              type="text"
              className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
              placeholder="E.g. Frontend Developer"
              {...register("jobTitle")}
              required
            />
          </div>

          <div>
            <label
              htmlFor="deadline"
              className="cursor-pointer text-lg font-bold"
            >
              Application Deadline
            </label>
            <input
              id="deadline"
              type="date"
              className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
              {...register("deadline")}
              required
            />
          </div>
        </div>

        {/* Company name */}
        <div className="mb-8">
          <label
            htmlFor="companyName"
            className="cursor-pointer text-lg font-bold"
          >
            Company Name
          </label>
          <input
            id="companyName"
            type="text"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="E.g. Netflix Inc."
            {...register("companyName")}
            required
          />
        </div>

        {/* Category and Job Type */}
        <div className="grid grid-cols-2 gap-5 mb-8">
          <div>
            <label
              htmlFor="jobCategory"
              className="cursor-pointer text-lg font-bold"
            >
              Category
            </label>
            <select
              type="text"
              id="jobCategory"
              className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
              {...register("jobCategory")}
              required
            >
              <option value="">Select a category</option>
              <option value="Software Development">Software Development</option>
              <option value="Marketing & Sales">Marketing & Sales</option>
              <option value="Healthcare & Nursing">Healthcare & Nursing</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Finance & Accounting">Finance & Accounting</option>
              <option value="Education & Training">Education & Training</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Retail & Sales">Retail & Sales</option>
              <option value="Creative & Design">Creative & Design</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="jobType"
              className="cursor-pointer text-lg font-bold"
            >
              Job Type
            </label>
            <select
              id="jobType"
              type="text"
              className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
              placeholder="E.g. Full Time"
              {...register("jobType")}
              required
            >
              <option value="">Select a type</option>
              <option value="Full Time">Full Time</option>
              <option value="Contractual">Contractual</option>
            </select>
          </div>
        </div>

        {/* Job Location */}
        <div className="mb-8">
          <label
            htmlFor="jobLocation"
            className="cursor-pointer text-lg font-bold"
          >
            Job Location
          </label>
          <input
            type="text"
            id="jobLocation"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="E.g. New York City, USA or Remote?"
            {...register("jobLocation")}
            required
          />
        </div>

        {/* Salary */}
        <div className="mb-8">
          <label htmlFor="salary" className="cursor-pointer text-lg font-bold">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="E.g. $1,20,000 - $2,20,000 Monthly or Yearly"
            {...register("salary")}
            required
          />
        </div>

        {/* Job Description */}
        <div className="mb-8">
          <label
            htmlFor="jobDescription"
            className="cursor-pointer text-lg font-bold"
          >
            Job Description
          </label>
          <textarea
            type="text"
            id="jobDescription"
            rows="4"
            cols="50"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="E.g. Job Description..."
            {...register("jobDescription")}
            required
          ></textarea>
        </div>

        {/* Job Responsibilities */}
        <div className="mb-8">
          <label
            htmlFor="responsibilities"
            className="cursor-pointer text-lg font-bold"
          >
            Job Responsibilities
          </label>
          <textarea
            type="text"
            id="responsibilities"
            rows="6"
            cols="50"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="E.g. Responsibilities"
            {...register("responsibilities")}
            required
          ></textarea>
        </div>

        {/* Job Requirements */}
        <div>
          <label
            htmlFor="requirements"
            className="cursor-pointer text-lg font-bold"
          >
            Job Requirements
          </label>
          <textarea
            type="text"
            id="requirements"
            rows="3"
            cols="50"
            className="block border-[1px] border-[#4CAF7A] rounded-md p-2 w-full focus-visible:outline-[#4CAF7A] mt-2"
            placeholder="E.g. Requirements"
            {...register("requirements")}
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

export default UploadNewJob;
