import { Link } from "react-router-dom";
import logoImg from '../../../../assets/logoImage.png'
import userImg from '../../../../assets/user.png'

const Header = () => {
    return (
        <div className="navbar max-w-[360px] md:max-w-xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-2 md:mt-4 lg:mt-5 xl:mt-6 font-poppins flex items-center mb-2 md:mb-4 lg:mb-6 xl:mb-8">

            <div className="flex-1">
                <Link to='/' className="flex justify-start gap-x-2 md:gap-x-3 lg:gap-x-4 items-center">
                    <img className="w-6 md:w-7 lg:w-8 xl:w-10" src={logoImg} alt="...Loading" />
                    <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold font-poppins">ROOT<span className="text-yellow-500">JOBS</span></h4>
                </Link>
            </div>

            <div className="flex items-center space-x-2 lg:space-x-3 xl:space-x-4 justify-end">

                <div className="dropdown dropdown-hover dropdown-bottom">
                    <div tabIndex={0} role="button" className="md:btn md:btn-ghost md:btn-circle avatar flex items-center">
                        <div className="w-5 md:w-7 lg:w-8 xl:w-10 rounded-full ">
                            <img alt="...Loading" src={userImg} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-xs md:menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-40 md:w-52 lg:w-56 xl:w-60">
                        <li><a>Vivian Rion</a></li>
                        <li><a>Update Profile</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

                <Link to='/logIn' className="px-2 md:px-3 xl:px-6 py-1 md:py-2 bg-orange-400 hover:bg-orange-500 text-white rounded md:rounded lg:rounded-md xl:rounded-lg text-xs md:text-sm xl:text-lg uppercase">LogIn</Link>
                <Link to='/registration' className="px-2 md:px-3 xl:px-6 py-1 md:py-2 bg-sky-900 hover:bg-sky-950 text-white rounded md:rounded lg:rounded-md xl:rounded-lg text-xs md:text-sm  xl:text-lg uppercase">Register</Link>
            </div>
        </div>
    );
};

export default Header;