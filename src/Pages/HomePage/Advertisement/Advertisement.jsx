
const Advertisement = () => {
    return (
        <div className="bg-sky-950 w-full h-56 md:h-60 lg:h-72 xl:h-80 py-6 flex items-center">

            <div className="w-full max-w-80 mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl text-black font-poppins text-center ">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white max-w-5xl mx-auto font-medium mb-6 md:mb-8 lg:mb-10 xl:mb-12">
                    Keep striving, keep believing, and let your determination illuminate the path to your dream career.
                </p>

                <div className="flex justify-center items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 text-sky-950 font-semibold">

                    <button className="px-3 md:px-4 lg:px-5 xl:px-6 py-2 font-medium tracking-wide text-sky-950 capitalize transition-colors duration-300 transform bg-white rounded-lg hover:bg-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Join Us</button>
                    <button className="px-3 md:px-4 lg:px-5 xl:px-6 py-2 font-medium tracking-wide text-sky-950 capitalize transition-colors duration-300 transform bg-white rounded-lg hover:bg-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Learn More</button>

                </div>

            </div>

        </div>
    );
};

export default Advertisement;