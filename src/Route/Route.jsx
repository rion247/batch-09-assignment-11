import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import LogInPage from "../Pages/LogInPage/LogInPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";
import BlogsPage from "../Pages/BlogsPage/BlogsPage";
import AllJobsPage from "../Pages/AllJobsPage/AllJobsPage";
import AddJobPage from "../Pages/AddJobPage/AddJobPage";
import AppliedJobsPage from "../Pages/AppliedJobsPage/AppliedJobsPage";
import MyJobPage from "../Pages/MyJobPage/MyJobPage";
import JobCategoryDetails from "../Pages/HomePage/JobbyCategorySection/JobCategoryDetails/JobCategoryDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/logIn",
                element: <LogInPage />,
            },
            {
                path: "/registration",
                element: <RegistrationPage />,
            },
            {
                path: "/allJobs",
                element: <AllJobsPage />,
            },
            {
                path: "/appliedJobs",
                element: <AppliedJobsPage />,
            },
            {
                path: "/addJob",
                element: <AddJobPage/>,
            },
            {
                path: "/myJob",
                element: <MyJobPage/>,
            },
            {
                path: "/blogs",
                element: <BlogsPage />,
            },
            {
                path: "/job/:id",
                element: <JobCategoryDetails/>,
                loader: ({params}) => fetch(`https://root-jobs-server-side.vercel.app/addJobs/${params.id}`),
            },
        ],
    },
]);

export default router;