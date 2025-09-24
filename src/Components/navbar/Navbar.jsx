import React, { useState, useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/storeContext.jsx';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("menu");
    const { cartItems } = useContext(StoreContext); // access cartItems

    const hasItems = Object.keys(cartItems).some(id => cartItems[id] > 0); // check if any item quantity > 0

    return (
        <div className='px-5 sm:px-8 md:px-12 flex flex-wrap justify-between items-center py-4 bg-white shadow-md'>
            
            {/* Logo */}
            <Link to="/"> 
                <img src={assets.newLogo} alt="logo" className='w-[150px]' />
            </Link>

            {/* Menu items */}
            <ul className='flex flex-wrap list-none gap-4 sm:gap-6 md:gap-8 text-[#49557e] text-sm sm:text-[18px] mt-3 md:mt-0'>
                <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "pb-2 border-b-2 border-[#49557e] cursor-pointer" : "pb-2 cursor-pointer"}>Home</Link>
                <a href='#menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "pb-2 border-b-2 border-[#49557e] cursor-pointer" : "pb-2 cursor-pointer"}>Menu</a>
                <a href='#mobile-app' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "pb-2 border-b-2 border-[#49557e] cursor-pointer" : "pb-2 cursor-pointer"}>Mobile-App</a>
                <a href='#contact-us' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "pb-2 border-b-2 border-[#49557e] cursor-pointer" : "pb-2 cursor-pointer"}>Contact-Us</a>
            </ul>

            {/* Right section: search, basket, sign in */}
            <div className='flex flex-wrap items-center gap-3 sm:gap-5 mt-3 md:mt-0'>
                <img src={assets.search_icon} alt="search icon" className='w-6 sm:w-7 cursor-pointer'/>

                <div className='relative'>
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="basket" className='cursor-pointer w-6 sm:w-7' />
                    </Link>
                    {hasItems && (
                        <div className='absolute min-w-[10px] min-h-[10px] rounded-full -mt-2 -mr-2 bg-red-400'></div>
                    )}
                </div>

                <button onClick={() => setShowLogin(true)} className='cursor-pointer bg-transparent text-[14px] sm:text-[16px] text-[#49557e] border rounded-full py-1 px-5 hover:bg-[#fff4f2] transition duration-300 whitespace-nowrap'>
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default Navbar;
