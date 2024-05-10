import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavMenuItems = () => {

    const [theme, SetTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const getLocalTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', getLocalTheme);
    }, [theme]);

    const handleThemeButton = (e) => {
        if (e.target.checked) {
            SetTheme('dark');
        }else{
            SetTheme('light');
        }
    }

    const links = <>

        <NavLink to='/' className={({ isActive }) => isActive ? "px-3 xl:px-5 py-2 bg-slate-600 rounded font-medium" : "px-3 xl:px-5 py-2 bg-transparent font-normal"}>Home</NavLink>
        <NavLink to='/allJobs' className={({ isActive }) => isActive ? "px-3 xl:px-5 py-2 bg-slate-600 rounded font-medium" : "px-3 xl:px-5 py-2 bg-transparent font-normal"}>All Jobs</NavLink>
        <NavLink to='/appliedJobs' className={({ isActive }) => isActive ? "px-3 xl:px-5 py-2 bg-slate-600 rounded font-medium" : "px-3 xl:px-5 py-2 bg-transparent font-normal"}>Applied Jobs</NavLink>
        <NavLink to='/addJob' className={({ isActive }) => isActive ? "px-3 xl:px-5 py-2 bg-slate-600 rounded font-medium" : "px-3 xl:px-5 py-2 bg-transparent font-normal"}>Add Job</NavLink>
        <NavLink to='/myJob' className={({ isActive }) => isActive ? "px-3 xl:px-5 py-2 bg-slate-600 rounded font-medium" : "px-3 xl:px-5 py-2 bg-transparent font-normal"}>My Jobs</NavLink>
        <NavLink to='/blogs' className={({ isActive }) => isActive ? "px-3 xl:px-5 py-2 bg-slate-600 rounded font-medium" : "px-3 xl:px-5 py-2 bg-transparent font-normal"}>Blogs</NavLink>

    </>

    return (
        <div className="navbar text-white max-w-[360px] md:max-w-xl lg:max-w-4xl xl:max-w-7xl mx-auto font-poppins">

            <div className="navbar-start lg:w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-sky-950 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal tracking-wide lg:gap-x-3 xl:gap-x-4 lg:text-base xl:text-lg font-lato">
                        {links}
                    </ul>
                </div>
            </div>

            <div className="navbar-end">

                <label className="flex cursor-pointer gap-2" onChange={handleThemeButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>

            </div>

        </div>
    );
};

export default NavMenuItems;