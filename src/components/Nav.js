import React from "react";
import { BsChatTextFill } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { MdMoreHoriz } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';
import GroupsDropdown from "./groupsDropdown";
import { useState } from "react";

const Nav = () => {
    const [activeNavButton, setActiveNavButton] = useState('Home');

    const handleNavButtons = (event) => {
        setActiveNavButton(event.target.name);
    };

    return (
        <React.Fragment>
            <div className="navbar sticky top-0 bg-base-100 shadow-lg z-50">
                <div className="navbar-start lg:ml-6">
                    <div className="dropdown">
                        <label htmlFor="my-drawer" tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex="0">
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center tooltip tooltip-bottom cursor-pointer" data-tip="Home">
                        <img className="h-7" src="/assets/images/logo.png" alt="" />
                        <h1 className="text-xl font-semibold ml-2">Drixico</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-2">
                        <li><a onClick={handleNavButtons} href="#home" name="Home" className={activeNavButton === "Home" ? "active" : ""}>Home</a></li>
                        <li><a onClick={handleNavButtons} href="#about" name="About" className={activeNavButton === "About" ? "active" : ""} >About</a></li>
                        <li><a onClick={handleNavButtons} href="#aboutOwner" name="About Owner" className={activeNavButton === "About Owner" ? "active" : ""}>About Owner</a></li>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex="0"><li><a href="#groups" name="Groups" onClick={handleNavButtons} className={activeNavButton === "Groups" ? "active" : ""}>Groups <IoMdArrowDropdown /></a></li></label>
                            <div tabIndex="0" className="dropdown-content card p-2 bg-white shadow">
                                <GroupsDropdown />
                            </div>
                        </div>
                        <li><a href="#testimonials" name="Testimonials" onClick={handleNavButtons} className={activeNavButton === "Testimonials" ? "active" : ""}>Testimonials</a></li>
                        <li><a href="#faq" onClick={handleNavButtons} name="FAQ" className={activeNavButton === "FAQ" ? "active" : ""}>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end mr-2 lg:mr-6">
                    <div className="indicator cursor-pointer tooltip tooltip-bottom" data-tip="3 notifications">
                        <span className="indicator-item badge badge-primary">3</span>
                        <FaBell className="text-3xl" />
                    </div>
                    <div className="indicator cursor-pointer tooltip tooltip-bottom ml-4" data-tip="9 new messages">
                        <span className="indicator-item badge badge-primary">9</span>
                        <BsChatTextFill className="text-3xl" />
                    </div>
                    <label htmlFor="my-drawer" className="avatar indicator cursor-pointer ml-4 tooltip tooltip-bottom" data-tip="Account">
                        <span className="indicator-item indicator-bottom badge px-1"><MdMoreHoriz /></span>
                        <div className="w-10 rounded-full">
                            <img src="/assets/images/profile.png" />
                        </div>
                    </label>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Nav;