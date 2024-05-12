import { Link } from "react-router-dom";

const AllJobs = ({ job }) => {

    const { jobBannerURL, jobTitle, jobDescription, salaryRange, jobCategory, userName, jobPostingDate, applicationDeadlineDate, jobApplicationNumber, _id } = job;

    return (
        <div className="max-w-80 md:max-w-xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-6 md:mt-8 lg:mt-10 xl:mt-12 font-poppins flex items-start border border-neutral-200 rounded-xl flex-col lg:flex-row">

            <div className="w-full lg:w-2/4 h-full">
                <img className="object-cover rounded-xl w-full h-full" src={jobBannerURL} alt="...Loading" />
            </div>

            <div className="p-6 w-full lg:w-2/4">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{jobCategory}</span>
                    <a href="#" className="block mt-2 text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{jobTitle}</a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{jobDescription}</p>
                </div>

                <div className="mt-2 md:mt-3 lg:mt-4">

                    <div className="mt-2 md:mt-3 lg:mt-4">
                        <h6 className="mx-1 text-xs md:text-sm xl:text-base text-gray-600 dark:text-gray-300">Job Posting Date: {jobPostingDate.slice(0, 10)}</h6>
                        <h6 className="mx-1 text-xs md:text-sm xl:text-base text-gray-600 dark:text-gray-300">Application Deadline: {applicationDeadlineDate.slice(0, 10)}</h6>
                    </div>

                    <h6 className="mt-2 md:mt-3 lg:mt-4 mx-1 text-base md:text-lg lg:text-xl  font-semibold text-gray-800 dark:text-gray-300">Salary: {salaryRange}</h6>


                </div>

                <div className="mt-4 flex flex-col xl:flex-row xl:justify-start gap-3 items-start xl:items-center">

                    <h6 className="text-xs p-2 font-medium bg-blue-200 uppercase dark:text-blue-400 rounded-full">Job Posted By: {userName}</h6>
                    <h6 className="text-xs font-medium  bg-red-300 px-3 py-2 rounded-full uppercase dark:text-blue-400">Job Application Number:{jobApplicationNumber}</h6>

                </div>

                <Link to={`/job/${_id}`}>
                    <button className="btn w-full bg-sky-900 text-white mt-4 hover:bg-sky-800">View Details</button>
                </Link>
            </div>

        </div>
    );
};

export default AllJobs;


