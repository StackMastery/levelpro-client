import { Link, NavLink } from "react-router-dom";
import Logo from '/public/favicon.png';
import Button from '../ui/Button';
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    // Menu items array
    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Pricing", path: "/pricing" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" }
    ];

    return (
        <>
            {
                isMenuOpen &&
                <section className="backdrop-blur-sm fixed z-10 top-0 w-full h-screen bg-transparent"></section>
            }
            <header className="flex justify-center relative z-[999999999] bg-bg-1">
                <div className="inline-flex items-center justify-between w-primary p-5 lg:p-8">
                    {/* Logo */}
                    <Link to={'/'} className="flex items-center gap-2">
                        <img width={130} src={Logo} alt="Level Pro" />
                    </Link>
                    
                    {/* Desktop Menu */}
                    <nav className="text-text-1 hidden lg:block font-medium bg-[#16181e] px-5 py-2 rounded-full border border-border-1 scale-105">
                        <ul className="flex gap-8">
                            {menuItems.map(({ label, path }) => (
                                <NavLink 
                                    key={path} 
                                    className={({ isActive }) =>
                                        `${isActive && 'content-[""] before:mt-[30px] before:bg-gradient-to-r before:from-color-1  before:to-purple-400 before:rounded-full before:w-[42px] before:h-[3px] before:shadow-lg before:shadow-color-1 before:absolute'}`
                                    } 
                                    to={path}
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </ul>
                    </nav>

                    {/* Sign In Button and Mobile Menu Toggle */}
                    <div className="flex items-center gap-5">
                        <Link to={'/login'} className="hidden sm:block">
                            <Button className={`scale-105`}>
                                Sign In
                            </Button>
                        </Link>
                        <div className="lg:hidden">
                            <Hamburger size={29} onToggle={toggled => setisMenuOpen(toggled)} />
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <section className={`hidden justify-center ${isMenuOpen && '!flex'} lg:!hidden absolute w-full bg-bg-1 z-[999999999999] shadow-[0_60px_60px_0px] shadow-color-1/50`}>
                <div className="inline-flex w-primary p-5 py-8 border-y border-border-1">
                    <ul className="flex flex-col gap-5 w-full">
                        {menuItems.map(({ label, path }) => (
                            <NavLink 
                                key={path} 
                                className={({ isActive }) =>
                                    `${isActive && 'content-[""] before:mt-[25px] before:bg-gradient-to-r before:from-color-1  before:to-purple-400 before:rounded-full before:w-[48px] before:h-[3px] before:shadow-lg before:shadow-color-1 before:absolute'}`
                                } 
                                to={path}
                            >
                                {label}
                            </NavLink>
                        ))}
                        <Link to={'/login'} className="block !w-full sm:hidden">
                            <Button className={`scale-105`}>
                                Sign In
                            </Button>
                        </Link>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Header;
