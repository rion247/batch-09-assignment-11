import { register } from 'swiper/element/bundle';
import bgImg1 from '../../../assets/bgImg1.jpg';
import bgImg2 from '../../../assets/bgImg2.jpg';
import bgImg3 from '../../../assets/bgImg3.jpg';

register();
const HeroBanner = () => {
    return (
        <div className="max-w-80 md:max-w-xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-2 md:mt-4 lg:mt-5 xl:mt-6 font-poppins">

            <swiper-container class="mySwiper" slides-per-view="1" speed="500" loop="true" css-mode="true" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
                centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">

                <swiper-slide>

                    <div className="container px-6 py-3 lg:py-16 mx-auto">

                        <div className="items-center flex flex-col-reverse lg:flex-row">

                            <div className="w-full lg:w-1/2">

                                <div className="lg:max-w-lg space-y-6">
                                    <h1 className="font-semibold text-gray-800 dark:text-white text-2xl md:text-4xl xl:text-5xl space-y-4">Find Your Dream<br /><span className="text-blue-500 font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">Career Today!</span></h1>

                                    <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm md:text-base">Explore limitless opportunities and discover your perfect career match with our comprehensive job hunting platform. Start your journey towards professional fulfillment now.</p>

                                    <button className="w-full px-6 py-3 mt-6 text-sm tracking-wider font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Join Now</button>
                                </div>

                            </div>

                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img className="w-full h-full lg:max-w-3xl" src={bgImg1} alt="Catalogue-pana.svg" />
                            </div>

                        </div>

                    </div>

                </swiper-slide>

                <swiper-slide>

                    <div className="container px-6 py-3 lg:py-16 mx-auto">

                        <div className="items-center flex flex-col-reverse lg:flex-row">

                            <div className="w-full lg:w-1/2">

                                <div className="lg:max-w-lg space-y-6">
                                    <h1 className="font-semibold text-gray-800 dark:text-white text-2xl md:text-4xl xl:text-5xl space-y-4">Grab Opportunity<br /><span className="text-blue-500 font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">Start Here!</span></h1>

                                    <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm md:text-base">Navigate the job market with confidence and precision using our dynamic job hunting platform. From personalized job recommendations to expert career advice.</p>

                                    <button className="w-full px-6 py-3 mt-6 text-sm tracking-wider font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Learn More</button>
                                </div>

                            </div>

                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img className="w-full h-full lg:max-w-3xl" src={bgImg2} alt="Catalogue-pana.svg" />
                            </div>

                        </div>

                    </div>

                </swiper-slide>

                <swiper-slide>

                    <div className="container px-6 py-3 lg:py-16 mx-auto">

                        <div className="items-center flex flex-col-reverse lg:flex-row">

                            <div className="w-full lg:w-1/2">

                                <div className="lg:max-w-lg space-y-6">
                                    <h1 className="font-semibold text-gray-800 dark:text-white text-2xl md:text-4xl xl:text-5xl space-y-4">Ignite Your Future<br /><span className="text-blue-500 font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">Careers Begin!</span></h1>

                                    <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm md:text-base">Empower your job search with our innovative platform designed to match your skills and aspirations with the perfect job opportunities. Whether seeking a new challenge.</p>

                                    <button className="w-full px-6 py-3 mt-6 text-sm tracking-wider font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Register Now</button>
                                </div>

                            </div>

                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img className="w-full h-full lg:max-w-3xl" src={bgImg3} alt="Catalogue-pana.svg" />
                            </div>

                        </div>

                    </div>

                </swiper-slide>

            </swiper-container>

        </div>
    );
};

export default HeroBanner;