import { Helmet } from "react-helmet";
import useAuthHook from "../../CustomeHooks/useAuthHook/useAuthHook";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import TableofAppliedJobsData from "./TableofAppliedJobsData";


const AppliedJobsPage = () => {

    const { user, loading } = useAuthHook();

    if (loading) {
        return <LoadingSpinner />
    }

    const applicant = user?.email;

    const { isPending, isError, data: appliedJobs = [], error } = useQuery({
        queryKey: ['appliedJobs'],
        queryFn: () => appliedJobsData(),
    })

    const appliedJobsData = async () => {
        const { data } = await axios(`http://localhost:5000/appliedjobsdata/${applicant}`);
        return data;
    }

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className="mt-6 md:mt-8 xl:mt-12 max-w-[360px] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mb-10 md:mb-16 lg:mb-20 xl:mb-40">
            <Helmet>
                <title>Root Jobs | Applied Jobs Page</title>
            </Helmet>
            <table className="min-w-full text-xs">

                <thead className="dark:bg-gray-300">
                    <tr className="text-left">
                        <th className="p-1 md:p-2 lg:p-3">Job Title</th>
                        <th className="p-1 md:p-2 lg:p-3">Job Posting Date</th>
                        <th className="p-1 md:p-2 lg:p-3">Application Deadline</th>
                        <th className="p-1 md:p-2 lg:p-3">Salary Range</th>
                        <th className="p-1 md:p-2 lg:p-3">Action</th>
                    </tr>
                </thead>

                {
                    appliedJobs.map(appliedjob => <TableofAppliedJobsData key={appliedjob._id} appliedjob={appliedjob} />)
                }

            </table>
        </div>
    );
};

export default AppliedJobsPage;