import Header from "./Header/Header";
import NavMenuItems from "./NavMenuItems/NavMenuItems";

const NavBar = () => {
    return (
        <div className="z-50">
            <Header />
            <div className="bg-sky-950">
                <NavMenuItems />
            </div>
        </div>
    );
};

export default NavBar;