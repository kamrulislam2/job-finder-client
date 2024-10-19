import { Link } from "react-router-dom";
import LogoWhite from "../../../assets/job-finder-logo-white.png";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (email) => {
    if (email) {
      console.log(email);

      fetch("http://localhost:5000/addEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(email),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Subscription Confirmed",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <footer className="h-80 px-10 py-7 border-t-[1px] bg-black grid grid-cols-3 gap-10">
      <div className="text-start">
        <Link to="/">
          <img className="w-64 h-16" src={LogoWhite} alt="" />
        </Link>
        <p className="text-white ps-2">
          Discover your next career opportunity with Job Finder. Your gateway to
          the latest jobs across industries and locations.
        </p>
        <p className="text-white ps-2 mt-4">
          Address: 17 Mill Lane, Leicester, LE7 1NS.
        </p>
        <p className="text-white ps-2 mt-4">
          Copyright ©2024 Job Finders. All rights reserved.
        </p>
      </div>
      <div className="text-white pt-5 ">
        <h2 className="text-2xl font-bold pb-3 ">Menu</h2>
        <p className="font-medium">
          <a href="/">Home</a>
        </p>
        <p className="font-medium">
          <a href="/allJobs">All Jobs</a>
        </p>
      </div>

      <div className="max-w-xl lg:max-w-lg pt-4">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Subscribe to our newsletter.
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Stay updated with the latest job opportunities! Subscribe to the Job
          Finder newsletter and never miss a career move.
        </p>
        <form
          className="mt-6 flex max-w-md gap-x-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            {...register("email")}
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#4CAF7A] sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-[#4CAF7A] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#54c388] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF7A] hover:transition-all hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
