import React from 'react'
import { assets } from '../../assets/assets.js'

const Footer = () => {
    return (
        <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-20' id='contact-us'> 
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-20'>
                
                {/* Logo + Info */}
                <div className='flex flex-col items-start gap-5'>
                    <img src={assets.newLogo} alt="Bhansa Ghar Logo" className="w-40 sm:w-44 md:w-48" />
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        Bhansa Ghar brings authentic flavors to your doorstep. Freshly prepared, hygienic, and delivered with care. Order now and experience homely taste with quick, reliable service anytime, anywhere.
                    </p>
                    <div className="flex gap-4">
                        <img src={assets.facebook_icon} alt="Facebook" className="w-6 cursor-pointer hover:opacity-80" />
                        <img src={assets.twitter_icon} alt="Twitter" className="w-6 cursor-pointer hover:opacity-80" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" className="w-6 cursor-pointer hover:opacity-80" />
                    </div>
                </div>

                {/* Company */}
                <div className='flex flex-col items-start gap-5'>
                    <h1 className="text-lg font-bold">COMPANY</h1>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About us</li>
                        <li className="hover:text-white cursor-pointer">Delivery</li>
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className='flex flex-col items-start gap-5'>
                    <h1 className="text-lg font-bold">GET IN TOUCH</h1>
                    <ul className="space-y-2 text-sm">
                        <li>+91-9546936532</li>
                        <li>bhansaghar@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr className="w-full border-gray-600 mt-6" />
            <p className="text-center text-xs sm:text-sm mt-4">© 2025 Bhansa Ghar. All rights reserved.</p>
        </div>
    )
}

export default Footer
