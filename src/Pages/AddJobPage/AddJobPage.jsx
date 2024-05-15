import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuthHook from './../../CustomeHooks/useAuthHook/useAuthHook';
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const AddJobPage = () => {

    const [jobPostingDate, setJobPostingDate] = useState(new Date());
    const [applicationDeadlineDate, setApplicationDeadlineDate] = useState(new Date());

    const { user } = useAuthHook();

    const userEmail = user?.email;
    const userName = user?.displayName;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const postAddJobData = { ...data, userEmail: userEmail, userName: userName, jobPostingDate: jobPostingDate, applicationDeadlineDate: applicationDeadlineDate };

        axios.post('http://localhost:5000/addJobs', postAddJobData)
            .then(function (response) {
                console.log(response);
                if (response.data.acknowledged === true) {
                    toast('Job Data Posted Successfully');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <div className="w-full max-w-80 p-4 mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl md:p-12 rounded-md shadow sm:p-8 border border-neutral-300 text-black mt-6 md:mt-8 xl:mt-12 font-poppins mb-16 md:mb-20 lg:mb-32 xl:mb-40">

            <Helmet>
                <title>Root Jobs | Add Job Page</title>
            </Helmet>

            <div className="space-y-2 col-span-full lg:col-span-1 text-start lg:text-center mb-4 md:mb-6 lg:mb-8 xl:mb-12">
                <p className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 md:mb-4 xl:mb-6">Add Job Section</p>
                <p className="text-xs text-justify md:text-sm xl:text-base text-neutral-500">Submit your job openings here and connect with talented individuals ready to make an impact. Our platform offers a seamless experience for posting new positions, reaching a wide audience of potential candidates, and managing applications effortlessly.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-10">

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobTitle" className="block text-sm md:text-base xl:text-lg">Job Title</label>
                        <input type="text" name="jobTitle" id="jobTitle" placeholder="Enter Job Title" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400"
                            {...register("jobTitle", { required: true })}
                        />
                        {errors.jobTitle && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobBannerURL" className="block text-sm md:text-base xl:text-lg">Job Banner URL</label>
                        <input type="text" name="jobBannerURL" id="jobBannerURL" placeholder="Enter Job Banner URL" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400"
                            {...register("jobBannerURL", { required: true })}
                        />
                        {errors.jobBannerURL && <span className="text-red-500">This field is required</span>}

                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobCategory" className="block text-sm md:text-base xl:text-lg">Job Category</label>
                        <select {...register("jobCategory")} className="select select-bordered w-full h-auto md:h-[50px] xl:h-[62px] px-3 py-1 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-400 text-sm md:text-base xl:text-lg focus:border-violet-400" required>
                            <option disabled selected>Select Job Category</option>
                            <option value='onSite'>On Site</option>
                            <option value='remote'>Remote</option>
                            <option value='partTime'>Part-Time</option>
                            <option value='hybrid'>Hybrid</option>
                        </select>
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="salaryRange" className="block text-sm md:text-base xl:text-lg">Salary Range</label>
                        <input type="text" name="salaryRange" id="salaryRange" placeholder="Enter Salary Range" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400"
                            {...register("salaryRange", { required: true })}
                        />
                        {errors.salaryRange && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobDescription" className="block text-sm md:text-base xl:text-lg">Job Description</label>
                        <input type="text" name="jobDescription" id="jobDescription" placeholder="Enter Job Description" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400"
                            {...register("jobDescription", { required: true })}
                        />
                        {errors.jobDescription && <span className="text-red-500">This field is required</span>}

                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobApplicationNumber" className="block text-sm md:text-base xl:text-lg">Job Application Number</label>
                        <input type="number" name="jobApplicationNumber" id="jobApplicationNumber" defaultValue={0} className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" {...register("jobApplicationNumber", { required: true })} readOnly />
                        {errors.jobApplicationNumber && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobPostingDate" className="block text-sm md:text-base xl:text-lg">Job Posting Date</label>
                        <DatePicker dateFormat="dd/MM/yyyy" className="px-3 py-2 md:py-3 xl:py-4 border rounded-md  border-neutral-300 bg-transparent text-gray-400 text-sm md:text-base xl:text-lg focus:border-violet-400 
                        w-[286px] md:w-[275px] lg:w-[387px] xl:w-[579px]" selected={jobPostingDate} onChange={(date) => setJobPostingDate(date)} required />

                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="applicationDeadlineDate" className="block text-sm md:text-base xl:text-lg">Application Deadline Date</label>
                        <DatePicker dateFormat="dd/MM/yyyy" className="px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-400 text-sm md:text-base xl:text-lg focus:border-violet-400
                        w-[286px] md:w-[275px] lg:w-[387px] xl:w-[579px] " selected={applicationDeadlineDate} onChange={(date) => setApplicationDeadlineDate(date)} required />

                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="email" className="block text-sm md:text-base xl:text-lg">Email address</label>
                        <input type="email" name="email" id="email" placeholder={userEmail} className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" readOnly />

                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="name" className="block text-sm md:text-base xl:text-lg">Your Name</label>
                        <input type="text" name="name" id="name" placeholder={userName} className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" readOnly />
                    </div>

                </div>

                <button type="submit" className="w-full px-8 py-3 font-medium rounded-md bg-sky-900 hover:bg-sky-800 text-white text-sm md:text-base lg:text-lg">Add Job</button>

            </form >

        </div >
    );
};

export default AddJobPage;










