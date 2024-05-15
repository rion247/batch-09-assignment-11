import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllJobs from './AllJobs/AllJobs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const JobbyCategorySection = () => {

    const { isPending, isError, data: jobs = [], error } = useQuery({
        queryKey: ['allJobsData'],
        queryFn: () => getJobsData(),
    })

    const getJobsData = async () => {
        const { data } = await axios.get('http://localhost:5000/addJobs');
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
        <div className="w-full max-w-[360px] p-4 mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl md:p-12 rounded-md shadow sm:p-8 text-black mt-10 md:mt-12 lg:mt-16 xl:mt-20 font-poppins mb-16 md:mb-20 lg:mb-32 xl:mb-40">

            <div className="space-y-2 col-span-full lg:col-span-1 text-start md:text-center mb-4 md:mb-8 xl:mb-12">
                <p className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-2 md:mb-4 xl:mb-6">Job by Category</p>
                <p className="text-xs text-justify md:text-center md:text-sm xl:text-base text-neutral-500 mx-auto w-80 md:w-[600px] lg:w-[700px] xl:w-[800px] capitalize">remote work, seek the balance of part-time positions, or desire the best of both worlds with hybrid jobs, our platform offers something for everyone.</p>
            </div>


            <Tabs>
                <TabList>
                    <Tab>All Jobs</Tab>
                    <Tab>On Site</Tab>
                    <Tab>Remote</Tab>
                    <Tab>Part-Time</Tab>
                    <Tab>Hybrid</Tab>
                </TabList>

                <TabPanel >
                    <div className='grid grid-cols-1 gap-2'>
                        {
                            jobs.map(job => <AllJobs key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-2'>
                        {
                            jobs.filter(i => i.jobCategory === 'onSite').map(job => <AllJobs key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-2'>
                        {
                            jobs.filter(i => i.jobCategory === 'remote').map(job => <AllJobs key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-2'>
                        {
                            jobs.filter(i => i.jobCategory === 'partTime').map(job => <AllJobs key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-2'>
                        {
                            jobs.filter(i => i.jobCategory === 'hybrid').map(job => <AllJobs key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default JobbyCategorySection;