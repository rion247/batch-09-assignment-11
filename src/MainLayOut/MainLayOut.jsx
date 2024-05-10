import { Outlet } from "react-router-dom";
import NavBar from "../components/SharedComponents/NavBar/NavBar";

const MainLayOut = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>


            <Outlet />

        </div>
    );
};

export default MainLayOut;