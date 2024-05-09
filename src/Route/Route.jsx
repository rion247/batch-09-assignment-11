import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomePage";

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
        ],
    },
]);

export default router;