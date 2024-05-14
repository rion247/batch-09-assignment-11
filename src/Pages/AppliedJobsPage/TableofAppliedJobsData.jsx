
const TableofAppliedJobsData = ({ appliedjob }) => {
    const { jobTitle, salaryRange, jobCategory, userName, _id, jobBannerURL, jobDescription, jobApplicationNumber, userEmail: jobOwnerEmail, userName: jobOwnerName, jobPostingDate, applicationDeadlineDate, applicantEmail, applicantUserName, applicantResumeLink } = appliedjob;

    return (
        <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 text-left">
                <td className="p-1 md:p-2 lg:p-3">
                    {jobTitle}
                </td>
                <td className="p-1 md:p-2 lg:p-3">
                    {jobCategory}
                </td>
                <td className="p-1 md:p-2 lg:p-3">
                    {salaryRange}
                </td>
                <td className="p-1 md:p-2 lg:p-3">
                    {applicantResumeLink}
                </td>
                <td className="p-1 md:p-2 lg:p-3">

                    <button className="bg-sky-900 text-white hover:bg-sky-800 rounded-full px-2 py-1">Download</button>

                </td>
            </tr>

        </tbody >
    );
};

export default TableofAppliedJobsData;