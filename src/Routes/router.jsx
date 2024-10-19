import Main from "@/Main/Main";
import AllJobs from "@/Pages/AllJobs/AllJobs";
import CategoryWiseJob from "@/Pages/CategoryWiseJob/CategoryWiseJob";
import Home from "@/Pages/Home/Home/Home";
import JobDetails from "@/Pages/JobDetails/JobDetails";
import UploadNewJob from "@/Pages/UploadNewJob/UploadNewJob";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: async () => {
          return fetch(`http://localhost:5000/allJobs`);
        },
      },
      {
        path: "/:categoryName",
        element: <CategoryWiseJob></CategoryWiseJob>,
        loader: async () => {
          return fetch(`http://localhost:5000/allJobs`);
        },
      },
      {
        path: "/uploadNewJob",
        element: <UploadNewJob></UploadNewJob>,
      },
    ],
  },
]);

export default router;
