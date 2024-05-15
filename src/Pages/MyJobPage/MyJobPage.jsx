import { Helmet } from "react-helmet";
import { useQuery } from '@tanstack/react-query';
import useAuthHook from "../../CustomeHooks/useAuthHook/useAuthHook";
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import TableForMyJobsPage from "./TableForMyJobsPage";
import useAxiosSecure from './../../CustomeHooks/useAxiosSecure/useAxiosSecure';
import axios from "axios";
import Swal from 'sweetalert2';

const MyJobPage = () => {

    const { user } = useAuthHook();
    const axiosSecure = useAxiosSecure();

    // if (!user) {
    //     return <LoadingSpinner />
    // }

    const userEmail = user?.email;

    const { isPending, isError, data: jobsData = [], error, refetch } = useQuery({
        queryKey: ['myJobsData'],
        queryFn: () => getJobsData(),
    })

    const getJobsData = async () => {
        console.log(userEmail);
        const { data } = await axiosSecure.get(`/myjobs/${userEmail}`);
        return data;
    }

    if (isPending) {
        return <LoadingSpinner />

    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    const handleDeleteButton = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/myjobs/${id}`)
                    .then(res => {

                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }

                    })

            }
        });



    }

    return (
        <div className="mt-6 md:mt-8 xl:mt-12 max-w-[360px] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mb-10 min-h-[calc(100vh-375px)]">

            <Helmet>
                <title>Root Jobs | My Job Page</title>
            </Helmet>

            <table className="min-w-full text-xs">

                <thead className="dark:bg-gray-300">
                    <tr className="text-left">
                        <th className="p-1 md:p-2 lg:p-3">Job Title</th>
                        <th className="p-1 md:p-2 lg:p-3">Job Posting Date</th>
                        <th className="p-1 md:p-2 lg:p-3">Application Deadline</th>
                        <th className="p-1 md:p-2 lg:p-3">Salary Range</th>
                        <th className="p-1 md:p-2 lg:p-3 text-center">Action</th>
                    </tr>
                </thead>

                {
                    jobsData.map(job => <TableForMyJobsPage key={job._id} job={job} handleDeleteButton={handleDeleteButton} />)

                }

            </table>

        </div>
    );
};

export default MyJobPage;