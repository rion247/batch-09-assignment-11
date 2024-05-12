import { Helmet } from "react-helmet";
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
import TableJobData from "./TableJobData";

const AllJobsPage = () => {

    const { isPending, isError, data: jobs = [], error } = useQuery({
        queryKey: ['allJobsData'],
        queryFn: () => getJobsData(),
    })

    const getJobsData = async () => {
        const { data } = await axios.get('https://root-jobs-server-side.vercel.app/addJobs');
        return data;
    }

    console.log(jobs);

    if (isPending) {
        return <LoadingSpinner />
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className="mt-6 md:mt-8 xl:mt-12 max-w-[360px] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
            <Helmet>
                <title>Root Jobs | All Jobs Page</title>
            </Helmet>
            <table className="min-w-full text-xs">

                <thead className="dark:bg-gray-300">
                    <tr className="text-left">
                        <th className="p-3">Job Title</th>
                        <th className="p-3">Job Posting Date</th>
                        <th className="p-3">Application Deadline</th>
                        <th className="p-3">Salary Range</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>

                {
                    jobs.map(job => <TableJobData key={job._id} job={job} />)

                }

            </table>
        </div>
    );
};

export default AllJobsPage;