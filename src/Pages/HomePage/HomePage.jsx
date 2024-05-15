import { Helmet } from "react-helmet";
import HeroBanner from "./HeroBanner/HeroBanner";
import JobbyCategorySection from "./JobbyCategorySection/JobbyCategorySection";
import Advertisement from "./Advertisement/Advertisement";
import TestimonialSection from "./TestimonialSection/TestimonialSection";

const HomePage = () => {
    return (
        <div>

            <Helmet>
                <title>Root Jobs | Home Page</title>
            </Helmet>
            
            <HeroBanner />

            <JobbyCategorySection/>

            <Advertisement/>

            <TestimonialSection/>




        </div>
    );
};

export default HomePage;