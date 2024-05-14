import img2 from '../../../assets//node.jpg'
const Blog2 = () => {
    return (
        <div className="max-w-[350px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-6 md:mt-8 lg:mt-10 xl:mt-12 font-poppins flex items-start border border-transparent rounded-xl flex-col mb-6 md:mb-8 lg:mb-10 xl:mb-12">

            <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
                <img className="object-cover rounded-xl w-full h-full" src={img2} alt="...Loading" />
            </div>

            <div className="max-w-80 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto mt-4">

                <div className="mt-4 lg:mt-6">

                    <p className='text-sm lg:text-base'>
                        Express.js is a popular and lightweight web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for creating server-side applications in JavaScript. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and much more, making it a go-to choice for developers building web applications using Node.js.
                    </p>

                    <h6 className='text-lg lg:text-xl font-bold underline mt-2 lg:mt-4 p-4 lg:p-6'>Key features of Express.js include:</h6>

                    <ul className='space-y-4 list-decimal pl-6 md:pl-8 lg:pl-10 xl:pl-12 text-sm lg:text-base'>
                        <li><b>Routing:</b> Express.js allows developers to define routes for handling different HTTP requests (e.g., GET, POST, PUT, DELETE) to specific URLs or endpoints.</li>
                        <li><b>Middleware:</b> Express.js provides middleware functions that can be used to preprocess requests, perform authentication, logging, error handling, and other tasks. Middleware functions can be added to the request-response cycle in a flexible and modular way.</li>
                        <li><b>Template Engines:</b> Express.js supports various template engines (e.g., EJS, Handlebars, Pug) for generating dynamic HTML content to be sent to the client.</li>
                        <li><b>Static File Serving:</b> It enables serving static files (e.g., HTML, CSS, JavaScript, images) from a directory on the server.</li>
                        <li><b>Error Handling:</b> Express.js provides mechanisms for handling errors gracefully, including built-in error handling middleware and error routing.</li>
                        <li><b>Integration with Node.js Ecosystem:</b> Express.js seamlessly integrates with other Node.js modules and frameworks, allowing developers to leverage the vast ecosystem of Node.js libraries and tools.</li>

                    </ul>

                    <p className='text-sm lg:text-base mt-4 lg:mt-6'>
                        On the other hand, NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and heavily inspired by Angular, sharing many of its concepts and design patterns. NestJS leverages the power of Express.js under the hood but provides additional features and abstractions to streamline the development process.
                    </p>

                    <h6 className='text-lg lg:text-xl font-bold underline mt-2 lg:mt-4 p-4 lg:p-6'>Key features of NestJS include:</h6>

                    <ul className='space-y-4 list-decimal pl-6 md:pl-8 lg:pl-10 xl:pl-12 text-sm lg:text-base'>
                        <li><b>Modular Architecture:</b> NestJS encourages a modular, scalable architecture by organizing the application into modules, each with its own controllers, services, and modules.</li>
                        <li><b>Dependency Injection:</b> NestJS utilizes dependency injection to manage the instantiation and injection of components, promoting code reusability and testability.</li>
                        <li><b>Decorators and Metadata:</b> NestJS makes extensive use of decorators and metadata to define routes, middleware, and other application features in a declarative manner.</li>
                        <li><b>Middleware and Guards:</b> It provides robust support for middleware functions and guards to intercept and process incoming requests, enabling features like authentication, authorization, logging, and more.</li>
                        <li><b>Built-in Support for WebSockets:</b> NestJS offers built-in support for WebSockets, allowing real-time bidirectional communication between the client and server.</li>
                        <li><b>CLI Tool:</b> NestJS provides a command-line interface (CLI) tool for generating boilerplate code, scaffolding modules, controllers, and services, and managing application configuration.</li>

                    </ul>

                </div>

                <p className='text-sm lg:text-base mt-4 lg:mt-6' >
                    Overall, both Express.js and NestJS are powerful frameworks for building server-side applications in JavaScript/TypeScript, with Express.js being more lightweight and minimalist, while NestJS offers additional features and abstractions for building enterprise-grade applications.
                </p>

                <div className="py-4 border-t border-dashed border-neutral-300 mt-8 mb-4 text-base">
                    <h6 className=" p-2 font-medium  uppercase dark:text-blue-400 rounded-full">Job Posted By: </h6>
                    <h6 className=" p-2 font-medium  uppercase dark:text-blue-400 rounded-full">Name: Joe Hoffman</h6>
                    <h6 className=" p-2 font-medium   dark:text-blue-400 rounded-full">Email: Joe.Hoffman@example.com</h6>
                </div>

            </div>

        </div>
    );
};

export default Blog2;