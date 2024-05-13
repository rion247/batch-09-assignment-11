import { Link } from "react-router-dom";

const TableForMyJobsPage = ({job, handleDeleteButton}) => {
    const { jobBannerURL, jobTitle, jobDescription, salaryRange, jobCategory, userName, jobPostingDate, applicationDeadlineDate, jobApplicationNumber, _id } = job;
    return (
        <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 text-left">
                <td className="p-1 md:p-2 lg:p-3">
                    {jobTitle}
                </td>
                <td className="p-1 md:p-2 lg:p-3">
                    {jobPostingDate.slice(0, 10)}
                </td>
                <td className="p-1 md:p-2 lg:p-3">
                    {applicationDeadlineDate.slice(0, 10)}
                </td>
                <td className="p-1 md:p-2 lg:p-3">
                    {salaryRange}
                </td>
                <td className="p-1 md:p-2 lg:p-3 text-center">
                    <Link to={`/updatejobs/${_id}`}>
                        <button className="bg-sky-900 text-white hover:bg-sky-800 rounded-full px-2 py-1 mb-2">Update</button>
                    </Link><br />
                    <button onClick={()=>handleDeleteButton(_id)} className="bg-red-500 text-white hover:bg-red-400 rounded-full px-2 py-1">Delete</button>
                </td>
            </tr>
        </tbody >
    );
};

export default TableForMyJobsPage;