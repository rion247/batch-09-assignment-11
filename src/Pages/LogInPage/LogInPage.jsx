import { Helmet } from "react-helmet";
import logInPic from '../../assets/logInPage.png';
import logPic from '../../assets/logoImage.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuthHook from './../../CustomeHooks/useAuthHook/useAuthHook';
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogInPage = () => {

    const { signInUserManually, googleSignIn, SetReload } = useAuthHook();

    const [showPassWord, SetShowPassWord] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        signInUserManually(email, password)
            .then((result) => {
                toast.success('Login Successful');
                navigate(location?.state ? location?.state : '/logIn');
                console.log(result.user);
                SetReload();
                reset();
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleGoogleLogInButton = () => {
        googleSignIn()
            .then((result) => {
                toast.success('Login Successful');
                navigate(location?.state ? location?.state : '/logIn');
                console.log(result.user);
                SetReload();
                reset();
            }).catch((error) => {
                toast.error(error.message);
            });
    }

    const handleshowPassWordButton = () => {
        SetShowPassWord(!showPassWord);
    }

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen max-w-80 md:max-w-xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-10 xl:mt-6 font-poppins gap-x-6 mb-10 xl:mb-6">

            <Helmet>
                <title>Root Jobs | LogIn Page</title>
            </Helmet>

            <div className="hidden lg:flex justify-center">
                <img className="lg:w-full xl:w-9/12" src={logInPic} alt="...Loading" />
            </div>

            <div className="w-full lg:max-w-xl p-4 border border-transparent rounded-lg shadow-lg sm:p-8 dark:bg-gray-50 dark:text-gray-800 lg:shadow-xl xl:shadow-2xl">

                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src={logPic} alt="...Loading" />
                </div>

                <p className="mt-3 text-sm md:text-base lg:text-xl text-center text-gray-600 dark:text-gray-200">
                    Welcome back!
                </p>

                <h2 className="mt-3 mb-3 text-xl md:text-2xl lg:text-3xl font-semibold text-center">Login to your account</h2>

                <div className="my-6 space-y-4 ">
                    <button onClick={handleGoogleLogInButton} aria-label="Login with Google" type="button" className="flex border border-neutral-300 items-center justify-center w-full p-2 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <div className="px-0 py-2">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>
                        <p>Login with Google</p>
                    </button>
                </div>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600 border-neutral-200" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600 border-neutral-200" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                    <div className="space-y-4">

                        <div className="space-y-3">
                            <label htmlFor="email" className="block text-base">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email Address" className="w-full px-4 py-4 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="space-y-3 relative">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-base">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type={showPassWord ? "text " : "password"} name="password" id="password" placeholder="*****" className="w-full px-4 py-4 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("password", { required: true })} />

                            {errors.password && <span className="text-red-500">This field is required</span>}

                            <div onClick={handleshowPassWordButton} className="absolute text-sm md:text-base xl:text-lg top-11 right-4 text-neutral-500">

                                {
                                    showPassWord ? <FaEyeSlash /> : <FaEye />
                                }

                            </div>

                        </div>

                    </div>

                    <button type="submit" className="w-full px-8 py-3 font-semibold bg-sky-900 hover:bg-sky-800 text-white rounded-md dark:bg-violet-600 dark:text-gray-50">Login</button>

                    <p className="text-sm md:text-base text-center dark:text-gray-600">Dont have account?
                        <Link to='/registration' rel="noopener noreferrer" className="focus:underline hover:underline text-orange-500 font-medium"> Register Now</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LogInPage;













