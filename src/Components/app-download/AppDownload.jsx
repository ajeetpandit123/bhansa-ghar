import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className="text-center my-12 px-4 sm:px-8 md:px-16 lg:px-20" id='mobile-app'>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-5">
          For Better Experience Download <br/> 
          <span className="text-[tomato] font-bold text-xl sm:text-2xl lg:text-3xl">BhansaGhar App</span>
        </p>

        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8">
            <img 
              src={assets.play_store} 
              alt="Play Store" 
              className="w-[120px] sm:w-[140px] md:w-[150px] cursor-pointer hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={assets.app_store} 
              alt="App Store" 
              className="w-[120px] sm:w-[140px] md:w-[150px] cursor-pointer hover:scale-105 transition-transform duration-300"
            />
        </div>
    </div>
  )
}

export default AppDownload
