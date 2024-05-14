import img1 from '../../assets/token.jpg';
import img2 from '../../assets/node.jpg';
import img3 from '../../assets/explaincode.jpg';
import { Link } from 'react-router-dom';

const BlogsSection = () => {
    return (

        <div className="container  max-w-80 md:max-w-xl lg:max-w-4xl xl:max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12 text-gray-900">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={img1} />
                    <div className="my-2 md:my-4 lg:my-6 xl:my-8 space-y-2">
                        <h3 className="text-lg lg:text-2xl font-semibold group-hover:underline group-focus:underline">Access Token & Refresh Token</h3>
                        <span className="text-xs text-gray-400">January 21, 2024</span>
                        <p className=' text-xs text-justify md:text-sm lg:text-base'>Access tokens and refresh tokens are components of OAuth 2.0, a protocol used for secure authorization between applications. They serve different purposes in the authentication process and are used to access protected resources on behalf of a user.For ensuring the security and integrity.</p>
                    </div>
                    <Link to='/blogs/tokens'>
                        <button type="submit" className="w-full px-8 py-3 font-medium rounded-md bg-sky-900 hover:bg-sky-800 text-white text-sm md:text-base lg:text-lg">Learn More</button>
                    </Link>

                </a>

                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={img2} />
                    <div className="my-2 md:my-4 lg:my-6 xl:my-8 space-y-2">
                        <h3 className="text-lg lg:text-2xl font-semibold group-hover:underline group-focus:underline">What is Express JS & Nest JS describe briefly</h3>
                        <span className="text-xs text-gray-400">March 12, 2024</span>
                        <p className=' text-xs text-justify md:text-sm lg:text-base'>Express.js is a popular and lightweight web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for creating server-side applications in JavaScript. Express.js simplifies the process of handling HTTP requests.</p>
                    </div>
                    <Link to='/blogs/node'>
                        <button type="submit" className="w-full px-8 py-3 font-medium rounded-md bg-sky-900 hover:bg-sky-800 text-white text-sm md:text-base lg:text-lg">Learn More</button>
                    </Link>
                </a>

                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={img3} />
                    <div className="my-2 md:my-4 lg:my-6 xl:my-8 space-y-2">
                        <h3 className="text-lg lg:text-2xl font-semibold group-hover:underline group-focus:underline">Briefly Explaining my React JS code</h3>
                        <span className="text-xs text-gray-400">May 14, 2024</span>
                        <p className=' text-xs text-justify md:text-sm lg:text-base'>Welcome to our React.js Root Job website, a platform designed to revolutionize the way job seekers explore career opportunities, connect with employers, and advance their professional aspirations. With a user-centric approach and cutting-edge technologies. It serves as a one-stop destination.</p>
                    </div>
                    <Link to='/blogs/code'>
                        <button type="submit" className="w-full px-8 py-3 font-medium rounded-md bg-sky-900 hover:bg-sky-800 text-white text-sm md:text-base lg:text-lg">Learn More</button>
                    </Link>
                </a>

            </div>

        </div>



    );
};

export default BlogsSection;