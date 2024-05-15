
const Advertisement = () => {
    return (
        <div className="bg-sky-950 w-full h-80 py-7 mb-16 md:mb-20 lg:mb-32 xl:mb-40">

            <div className="w-full max-w-[360px] mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl text-black mt-10 md:mt-12 lg:mt-16 xl:mt-20 font-poppins text-center ">
                <p className="text-3xl text-white max-w-5xl mx-auto font-medium mb-12">
                    Keep striving, keep believing, and let your determination illuminate the path to your dream career.
                </p>

                <div className="flex justify-center items-center gap-6 text-sky-950 font-semibold">

                    <button className="px-6 py-2 font-medium tracking-wide text-sky-950 capitalize transition-colors duration-300 transform bg-white rounded-lg hover:bg-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Join Us</button>
                    <button className="px-6 py-2 font-medium tracking-wide text-sky-950 capitalize transition-colors duration-300 transform bg-white rounded-lg hover:bg-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Learn More</button>

                </div>

            </div>

        </div>
    );
};

export default Advertisement;