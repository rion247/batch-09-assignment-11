import { Link, useLoaderData } from "react-router-dom";

const JobCategoryDetails = () => {
    const clickedJob = useLoaderData();
    const { jobBannerURL, jobTitle, jobDescription, salaryRange, jobCategory, userName, jobPostingDate, applicationDeadlineDate, jobApplicationNumber, _id, userEmail } = clickedJob;

    return (
        <div className="max-w-[350px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-6 md:mt-8 lg:mt-10 xl:mt-12 font-poppins flex items-start border border-transparent rounded-xl flex-col mb-6 md:mb-8 lg:mb-10 xl:mb-12">

            <div className="w-full md:h-[300px] lg:h-[400px] xl:h-[500px]">
                <img className="object-cover rounded-xl w-full h-full" src={jobBannerURL} alt="...Loading" />
            </div>

            <div className="p-6 w-full mt-4">

                <div className="py-4 border-y border-dashed border-neutral-300 mb-4 flex flex-col-reverse md:flex-row justify-start md:justify-between items-start md:items-center gap-6">
                    <h6 className="text-xs md:text-sm lg:text-base italic font-medium text-neutral-500 uppercase dark:text-blue-400">Job ID: {_id}</h6>
                    <h6 className="text-sm text-white font-medium  bg-sky-900 px-1 md:px-2 lg:px-3 py-1 md:py-2 rounded-full uppercase dark:text-blue-400">Job Application Number: {jobApplicationNumber}</h6>
                </div>

                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{jobCategory}</span>
                    <a href="#" className="block mt-2 text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{jobTitle}</a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{jobDescription}</p>
                </div>

                <div className="mt-4">

                    <div className="mb-4">
                        <h6 className="mx-1 text-sm xl:text-base text-gray-600 dark:text-gray-300">Job Posting Date: {jobPostingDate.slice(0, 10)}</h6>
                        <h6 className="mx-1 text-sm xl:text-base text-gray-600 dark:text-gray-300">Application Deadline: {applicationDeadlineDate.slice(0, 10)}</h6>
                    </div>

                    <h6 className="mt-2 md:mt-3 lg:mt-4 mx-1 text-base md:text-lg lg:text-xl  font-semibold text-gray-800 dark:text-gray-300">Salary: {salaryRange}</h6>


                </div>

                <div className="py-4 border-t border-dashed border-neutral-300 mt-8 mb-4 text-base">
                    <h6 className=" p-2 font-medium  uppercase dark:text-blue-400 rounded-full">Job Posted By:</h6>
                    <h6 className=" p-2 font-medium  uppercase dark:text-blue-400 rounded-full">Name: {userName}</h6>
                    <h6 className=" p-2 font-medium   dark:text-blue-400 rounded-full">Email: {userEmail}</h6>
                </div>

                <Link>
                    <button className="btn w-full bg-sky-900 text-white mt-4 hover:bg-sky-800">Apply Now</button>
                </Link>
            </div>

        </div>
    );
};

export default JobCategoryDetails;