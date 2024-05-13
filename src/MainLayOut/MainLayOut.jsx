import { Outlet } from "react-router-dom";
import NavBar from "../components/SharedComponents/NavBar/NavBar";
import Footer from "../components/SharedComponents/Footer/Footer";

const MainLayOut = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>


            <Outlet />

            <Footer/>

        </div>
    );
};

export default MainLayOut;