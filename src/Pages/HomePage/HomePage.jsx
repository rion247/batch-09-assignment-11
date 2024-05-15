import { Helmet } from "react-helmet";
import HeroBanner from "./HeroBanner/HeroBanner";
import JobbyCategorySection from "./JobbyCategorySection/JobbyCategorySection";
import Advertisement from "./Advertisement/Advertisement";

const HomePage = () => {
    return (
        <div>

            <Helmet>
                <title>Root Jobs | Home Page</title>
            </Helmet>
            
            <HeroBanner />

            <JobbyCategorySection/>

            <Advertisement/>




        </div>
    );
};

export default HomePage;