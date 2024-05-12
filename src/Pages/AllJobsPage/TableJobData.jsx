import { Link } from "react-router-dom";

const TableJobData = ({ job }) => {
    const { jobBannerURL, jobTitle, jobDescription, salaryRange, jobCategory, userName, jobPostingDate, applicationDeadlineDate, jobApplicationNumber, _id } = job;

    return (

        <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 text-left">
                <td className="p-3">
                    {jobTitle}
                </td>
                <td className="p-3">
                    {jobPostingDate.slice(0, 10)}
                </td>
                <td className="p-3">
                    {applicationDeadlineDate.slice(0, 10)}
                </td>
                <td className="p-3">
                    {salaryRange}
                </td>
                <td className="p-3">
                    <Link to={`/job/${_id}`}>
                        <button className="bg-sky-900 text-white hover:bg-sky-800 rounded-full px-2 py-1">View Details</button>
                    </Link>
                </td>
            </tr>

        </tbody >


    );
};

export default TableJobData;