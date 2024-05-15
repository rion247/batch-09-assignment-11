import { useLoaderData } from "react-router-dom";
import { Form, Input, Modal, message } from 'antd';
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useAuthHook from "../../../../CustomeHooks/useAuthHook/useAuthHook";
import { toast } from "react-toastify";
import axios from "axios";

const JobCategoryDetails = () => {

    const clickedJob = useLoaderData();
    const { jobBannerURL, jobTitle, jobDescription, salaryRange, jobCategory, userName, jobPostingDate, applicationDeadlineDate, jobApplicationNumber, _id, userEmail } = clickedJob;

    const currentDate = new Date();

    const { user } = useAuthHook();

    const applicantEmail = user?.email;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [form] = Form.useForm();


    const handleApplyButton = (_id) => {
        console.log(_id)
        showModal();
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    const handleOk = () => {

        form
            .validateFields()
            .then(values => {
                const jobOwnerEmail = values.email;
                const applicantUserName = values.username;
                const applicantResumeLink = values.url;


                if (currentDate > applicationDeadlineDate) {
                    return toast('Time Over!!!')
                }
                console.log(applicantEmail)
                console.log(jobOwnerEmail)

                if (applicantEmail === jobOwnerEmail) {
                    return toast('Sorry!!!You can not Apply for the Job.')
                }

                const forApplyJobSection = {
                    ...clickedJob, applicantEmail, applicantUserName, applicantResumeLink
                }

                axios.post('http://localhost:5000/appliedjobsdata', forApplyJobSection)
                    .then(function (response) {
                        console.log(response.data);
                        if (response.data.acknowledged) {
                            toast('You Have Succefully Applied for the Job');
                            axios.put(`http://localhost:5000/updatejobnumber/${_id}`);
                            form.resetFields();
                            setIsModalOpen(false);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            })
            .catch(errorInfo => {
                console.error('Validation failed:', errorInfo);
            });

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const initialValues = {
        username: userName,
        email: userEmail,
    };

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


                <button onClick={() => handleApplyButton(_id)} className="btn w-full bg-sky-900 text-white mt-4 hover:bg-sky-800">Apply Now</button>

                <Modal title="Apply For The Job" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Submit">

                    <Form
                        name="wrap"
                        labelCol={{ flex: '110px' }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}
                        colon={false}
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        form={form}
                        initialValues={initialValues}
                    >
                        <Form.Item label="User Name" name="username" rules={[{ required: true }]}>
                            <Input readOnly defaultValue={initialValues.username} />
                        </Form.Item>

                        <Form.Item label="Email Address" name="email" rules={[{ required: true }]}>
                            <Input readOnly defaultValue={initialValues.email} />
                        </Form.Item>

                        <Form.Item
                            name="url"
                            label="Your Resume URL"
                            rules={[{ required: true, message: 'Please input the URL' }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                        >
                            <Input placeholder="Enter Resume Link Here" />
                        </Form.Item>

                    </Form>

                </Modal>

            </div>

        </div>
    );
};

export default JobCategoryDetails;