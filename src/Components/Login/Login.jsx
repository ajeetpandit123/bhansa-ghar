import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
    const [currentStep, setCurrentStep] = useState("login");

    // Disable background scrolling when popup is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
            <form className="bg-gradient-to-br from-[#FF6347] via-[#FF7F50] to-[#FFA07A]
                             w-[90%] max-w-md p-6 rounded-2xl shadow-2xl relative 
                             flex flex-col gap-5 text-white">
                
                {/* Header */}
                <div className="flex justify-between items-center border-b border-white/30 pb-3">
                    <h1 className="text-xl font-bold capitalize">{currentStep}</h1>
                    <img 
                        src={assets.cross_icon} 
                        alt="close" 
                        onClick={() => setShowLogin(false)} 
                        className="cursor-pointer w-6 h-6 hover:scale-110 transition"
                    />
                </div>

                {/* Input Fields */}
                <div className="flex flex-col gap-4 mt-3">
                    {currentStep === "login" ? <></> : (
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            required 
                            className="p-3 rounded-lg focus:ring-2 focus:ring-[#FF6347] outline-none text-black"
                        />
                    )}
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        className="p-3 rounded-lg focus:ring-2 focus:ring-[#FF6347] outline-none text-black"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        className="p-3 rounded-lg focus:ring-2 focus:ring-[#FF6347] outline-none text-black"
                    />
                </div>

                {/* Button */}
                <button className="w-full bg-[#323232] text-white py-3 rounded-lg font-semibold hover:bg-[#262626] transition">
                    {currentStep === "sign up " ? "Create account" : "Login"}
                </button>

                {/* Terms */}
                <div className="flex items-start gap-2 text-sm text-white/90">
                    <input type="checkbox" required className="mt-1" />
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>

                {/* Switch */}
                {currentStep === "login" ? 
                 <p className="text-center text-sm">
                    Create a new account?{" "}
                    <span 
                        onClick={() => setCurrentStep("sign up")} 
                        className="cursor-pointer font-semibold hover:underline"
                    >
                        click here
                    </span>
                 </p> 
                :
                 <p className="text-center text-sm">
                    Already have an account?{" "}
                    <span 
                        onClick={() => setCurrentStep("login")}  
                        className="cursor-pointer font-semibold hover:underline"
                    >
                        login here
                    </span>
                 </p>
                }
            </form>
        </div>
    )
}

export default Login
