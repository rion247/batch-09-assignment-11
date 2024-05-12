import axios from "axios";
import { useEffect } from "react";
import useAuthHook from "../useAuthHook/useAuthHook";
import { toast } from "react-toastify";
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
        }, function (error) {
            console.log(error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                signOutUser()
                    .then(() => {
                        navigate('/logIn');
                    }).catch((error) => {
                        toast(error.message);
                    });
            }
            return Promise.reject(error);
        });

    }, [navigate, signOutUser])

    return axiosSecure;
};

export default useAxiosSecure;