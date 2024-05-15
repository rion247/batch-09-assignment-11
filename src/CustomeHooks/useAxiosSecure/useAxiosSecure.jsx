import axios from "axios";
import { useEffect } from "react";
import useAuthHook from "../useAuthHook/useAuthHook";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://root-jobs-server-side.vercel.app',
    withCredentials: true,
});

const useAxiosSecure = () => {

    const { signOutUser } = useAuthHook();

    const navigate = useNavigate();

    useEffect(() => {

        axiosSecure.interceptors.response.use((response) => {
            return response;

        }, (error) => {
            
            if (error.response.status === 401 || error.response.status === 403) {
                // console.log('after error response status : log out the user')
                signOutUser();
                navigate('/logIn');
            }

            return Promise.reject(error);

        });


    }, [navigate, signOutUser])

    return axiosSecure;
};

export default useAxiosSecure;