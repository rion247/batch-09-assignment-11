import { Helmet } from "react-helmet";
import HeroBanner from "./HeroBanner/HeroBanner";
import JobbyCategorySection from "./JobbyCategorySection/JobbyCategorySection";

const HomePage = () => {
    return (
        <div>

            <Helmet>
                <title>Root Jobs | Home Page</title>
            </Helmet>
            
            <HeroBanner />

            <JobbyCategorySection/>




        </div>
    );
};

export default HomePage;