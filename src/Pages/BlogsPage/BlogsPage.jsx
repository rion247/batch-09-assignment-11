import { Helmet } from "react-helmet";
import BlogsSection from "./BlogsSection";

const BlogsPage = () => {


    return (
        <div className="w-full max-w-80 p-4 mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl md:p-12 rounded-md shadow sm:p-8 border border-transparent text-black mt-6 md:mt-8 xl:mt-12 font-poppins mb-16 md:mb-20 lg:mb-32 xl:mb-40">

            <Helmet>
                <title>Root Jobs | Blogs Page</title>
            </Helmet>

            <div className="space-y-2 col-span-full lg:col-span-1 text-start lg:text-center mb-4 md:mb-6 lg:mb-8 xl:mb-12">
                <p className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 md:mb-4 xl:mb-6">Blogs</p>
                <p className="text-xs text-justify md:text-sm xl:text-base text-neutral-500">Welcome to our Blog Page - your go-to destination for expert insights, tips, and advice on navigating the dynamic world of job hunting! Discover invaluable strategies for crafting the perfect resume, acing interviews, and standing out in todays competitive job market.</p>
            </div>

            <BlogsSection />

        </div>
    );
};

export default BlogsPage;