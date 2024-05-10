import { Helmet } from "react-helmet";
import HeroBanner from "./HeroBanner/HeroBanner";

const HomePage = () => {
    return (
        <div>

            <Helmet>
                <title>Root Jobs | Home Page</title>
            </Helmet>
            
            <HeroBanner />




        </div>
    );
};

export default HomePage;