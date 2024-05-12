import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import registerPic from '../../assets/registrationPic.jpg';
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuthHook from "../../CustomeHooks/useAuthHook/useAuthHook";
import axios from "axios";


const RegistrationPage = () => {

    const { createUserManually, userProfileUpdater, SetReload } = useAuthHook();

    const [showPassWord, SetShowPassWord] = useState(false);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const yourName = data.fullName;
        const photoURL = data.photoURL;

        const forUserDataBase = {
            userName: yourName,
            userPhoto: photoURL,
            userEmail: email,
            userPassWord: password,
        }

        console.log();

        if (password.length < 6) {
            return toast('Sorry!!!Six character password required.');
        }

        const passWordValidationforLowerCaseAndUpperCase = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        const passWordValidationCheckingforLowerCaseAndUpperCaseCharacter = passWordValidationforLowerCaseAndUpperCase.test(password);

        if (!passWordValidationCheckingforLowerCaseAndUpperCaseCharacter) {
            return toast('Must Have a Lowercase and an Uppercase character in the password.');
        }

        createUserManually(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('CONGRATS!!!Your account has been successfully created.');
                userProfileUpdater(yourName, photoURL)
                    .then(() => {
                        console.log('Profile Updated!');
                        axios.post('https://root-jobs-server-side.vercel.app/users', forUserDataBase)
                            .then((response) => {
                                console.log(response.forUserDataBase);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                        reset();
                        SetReload();
                    }).catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    };


    const handleshowPassWordButton = () => {
        SetShowPassWord(!showPassWord);
    }



    return (
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen max-w-80 md:max-w-xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-10 xl:mt-6 font-poppins gap-x-6 mb-10 xl:mb-6">

            <Helmet>
                <title>Root Jobs | Registration Page</title>
            </Helmet>

            <div className="hidden xl:flex justify-center w-2/4">
                <img className="" src={registerPic} alt="...Loading" />
            </div>

            <div className="w-full lg:max-w-2xl xl:max-w-xl p-4 border border-transparent rounded-lg shadow-lg sm:p-8 dark:bg-gray-50 dark:text-gray-800 lg:shadow-xl xl:shadow-2xl">

                <h2 className="mt-3 mb-3 text-xl md:text-2xl lg:text-3xl font-semibold text-start">Get Your Free Account Now.</h2>

                <p className="text-gray-400 mb-12 text-xs md:text-sm lg:text-base">Let’s get you all set up so you can verify your personal account and begin setting up your profile.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                    <div className="space-y-4">

                        <div className="space-y-3">
                            <label htmlFor="fullName" className="block text-base">Your Name</label>
                            <input type="text" name="fullName" id="fullName" placeholder="Enter Your Full Name" className="w-full px-4 py-4 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("fullName", { required: true })} />
                            {errors.fullName && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="space-y-3">
                            <label htmlFor="photoURL" className="block text-base">Your Photo</label>
                            <input type="text" name="photoURL" id="photoURL" placeholder="Enter Your Photo URL" className="w-full px-4 py-4 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("photoURL", { required: true })} />
                            {errors.photoURL && <span className="text-red-500">This field is required</span>}
                        </div>

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
                            <input type={showPassWord ? 'text' : 'password'} name="password" id="password" placeholder="Enter Your Password" className="w-full px-4 py-4 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("password", { required: true })} />

                            {errors.password && <span className="text-red-500">This field is required</span>}

                            <div onClick={handleshowPassWordButton} className="absolute text-sm md:text-base xl:text-lg top-11 right-4 text-neutral-500">

                                {
                                    showPassWord ? <FaEyeSlash /> : <FaEye />
                                }

                            </div>

                        </div>

                    </div>

                    <button type="submit" className="w-full px-8 py-3 font-semibold bg-sky-900 hover:bg-sky-800 text-white rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>

                    <p className="text-sm md:text-base text-center dark:text-gray-600">Already have an account?
                        <Link to='/logIn' rel="noopener noreferrer" className="focus:underline hover:underline text-orange-500 font-medium"> Login Now</Link>
                    </p>
                </form>
            </div>
        </div>

    );
};

export default RegistrationPage;



