import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateJob = () => {

    const jobsData = useLoaderData();

    const { jobBannerURL, jobTitle, jobDescription, salaryRange, jobCategory, userName, jobPostingDate, applicationDeadlineDate, jobApplicationNumber, _id, userEmail } = jobsData

    const [updateJobPostingDate, setUpdateJobPostingDate] = useState(new Date());
    const [updateApplicationDeadlineDate, setUpdateApplicationDeadlineDate] = useState(new Date());

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const updatedDoc = { ...data, jobPostingDate: updateJobPostingDate, applicationDeadlineDate: updateApplicationDeadlineDate }
        console.log(updatedDoc);
        axios.put(`http://localhost:5000/myjobs/${_id}`, updatedDoc).then(response => {
            if (response.data.modifiedCount > 0) {
                toast('Updated Successfully');
            }
            console.log(response.data)
        })
    };

    return (
        <div className="w-full max-w-80 p-4 mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl md:p-12 rounded-md shadow sm:p-8 border border-neutral-300 text-black mt-6 md:mt-8 xl:mt-12 font-poppins mb-16 md:mb-20 lg:mb-32 xl:mb-40">

            <Helmet>
                <title>Root Jobs | Update Job Page</title>
            </Helmet>

            <div className="space-y-2 col-span-full lg:col-span-1 text-start lg:text-center mb-4 md:mb-6 lg:mb-8 xl:mb-12">
                <p className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 md:mb-4 xl:mb-6">Update Job Section</p>
                <p className="text-xs text-justify md:text-sm xl:text-base text-neutral-500">Revitalize your career path with our updated job listings! Explore exciting opportunities tailored to your expertise and aspirations.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-10">

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobTitle" className="block text-sm md:text-base xl:text-lg">Job Title</label>
                        <input type="text" name="jobTitle" id="jobTitle" placeholder="Enter Job Title" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" defaultValue={jobTitle}
                            {...register("jobTitle", { required: true })}
                        />
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobBannerURL" className="block text-sm md:text-base xl:text-lg">Job Banner URL</label>
                        <input type="text" name="jobBannerURL" id="jobBannerURL" placeholder="Enter Job Banner URL" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" defaultValue={jobBannerURL}
                            {...register("jobBannerURL", { required: true })}
                        />
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobCategory" className="block text-sm md:text-base xl:text-lg">Job Category</label>
                        <select {...register("jobCategory")} className="select select-bordered w-full h-auto md:h-[50px] xl:h-[62px] px-3 py-1 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-400 text-sm md:text-base xl:text-lg focus:border-violet-400">
                            <option disabled selected>{jobCategory}</option>
                            <option value='onSite'>On Site</option>
                            <option value='remote'>Remote</option>
                            <option value='partTime'>Part-Time</option>
                            <option value='hybrid'>Hybrid</option>
                        </select>
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="salaryRange" className="block text-sm md:text-base xl:text-lg">Salary Range</label>
                        <input type="text" name="salaryRange" id="salaryRange" placeholder="Enter Salary Range" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" defaultValue={salaryRange}
                            {...register("salaryRange", { required: true })}
                        />
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobDescription" className="block text-sm md:text-base xl:text-lg">Job Description</label>
                        <input type="text" name="jobDescription" id="jobDescription" placeholder="Enter Job Description" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" defaultValue={jobDescription}
                            {...register("jobDescription", { required: true })}
                        />
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobApplicationNumber" className="block text-sm md:text-base xl:text-lg">Job Application Number</label>
                        <input type="number" name="jobApplicationNumber" id="jobApplicationNumber" defaultValue={jobApplicationNumber} className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" readOnly />
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="jobPostingDate" className="block text-sm md:text-base xl:text-lg">Job Posting Date</label>
                        <DatePicker dateFormat="dd/MM/yyyy" className="px-3 py-2 md:py-3 xl:py-4 border rounded-md  border-neutral-300 bg-transparent text-gray-400 text-sm md:text-base xl:text-lg focus:border-violet-400 
                        w-[286px] md:w-[275px] lg:w-[387px] xl:w-[579px]" selected={jobPostingDate} onChange={(date) => setUpdateJobPostingDate(date)} />
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="applicationDeadlineDate" className="block text-sm md:text-base xl:text-lg">Application Deadline Date</label>
                        <DatePicker dateFormat="dd/MM/yyyy" className="px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-400 text-sm md:text-base xl:text-lg focus:border-violet-400
                        w-[286px] md:w-[275px] lg:w-[387px] xl:w-[579px] " selected={applicationDeadlineDate} onChange={(date) => setUpdateApplicationDeadlineDate(date)} />

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

                <button type="submit" className="w-full px-8 py-3 font-medium rounded-md bg-sky-900 hover:bg-sky-800 text-white text-sm md:text-base lg:text-lg">Update Job</button>

            </form >

        </div >
    );
};

export default UpdateJob;