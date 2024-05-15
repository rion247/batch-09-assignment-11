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
import UpdateJob from "../Pages/MyJobPage/UpdateJob/UpdateJob";
import PrivateRoute from './../components/PrivateRoute/PrivateRoute';
import Blog1 from "../Pages/BlogsPage/Blog1/Blog1";
import Blog2 from "../Pages/BlogsPage/Blog2/Blog2";
import Blog3 from "../Pages/BlogsPage/Blog3/Blog3";

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
                element: <PrivateRoute><AppliedJobsPage /></PrivateRoute>,
            },
            {
                path: "/addJob",
                element: <PrivateRoute><AddJobPage/></PrivateRoute>,
            },
            {
                path: "/myJob",
                element: <PrivateRoute><MyJobPage/></PrivateRoute>,
            },
            {
                path: "/blogs",
                element: <BlogsPage />,
            },
            {
                path: "/blogs/tokens",
                element: <Blog1 />,
            },
            {
                path: "/blogs/node",
                element: <Blog2 />,
            },
            {
                path: "/blogs/code",
                element: <Blog3 />,
            },
            {
                path: "/job/:id",
                element: <PrivateRoute><JobCategoryDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`https://root-jobs-server-side.vercel.app/addJobs/${params.id}`),
            },
            {
                path: "/updatejobs/:id",
                element: <UpdateJob/>,
                loader: ({params}) => fetch(`https://root-jobs-server-side.vercel.app/addJobs/${params.id}`),
            },
        ],
    },
]);

export default router;