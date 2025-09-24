import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='flex flex-col gap-5 px-4 md:px-10 lg:px-20' id='menu'>
            <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-[#262626]'>Explore our menu</h1>
            <p className='max-w-full sm:max-w-[80%] md:max-w-[60%] text-sm sm:text-base text-[#808080]'>
                At Bhansa Ghar, the explore menu offers a delightful variety of authentic dishes, blending tradition with flavor. Discover vibrant meals crafted with care for an unforgettable dining experience.
            </p>

            <div className='flex justify-start items-center gap-5 sm:gap-8 my-5 overflow-x-auto scrollbar-hide'>
                {menu_list.map((item, index) => {
                    return (
                        <div 
                            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                            key={index} 
                            className='flex flex-col items-center flex-shrink-0'
                        >
                            <img 
                                src={item.menu_image} 
                                alt="" 
                                className={`w-[20vw] sm:w-[10vw] md:w-[7.5vw] min-w-[60px] sm:min-w-[80px] cursor-pointer rounded-full transition-all duration-200
                                    ${category === item.menu_name ? "border-4 border-orange-500 p-[2px]" : ""}`} 
                            />
                            <p className='mt-2 sm:mt-3 text-[#747474] font-bold text-sm sm:text-lg lg:text-xl cursor-pointer'>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>

            <hr className='my-2 sm:my-3 h-[2px] bg-[#e2e2e2] border-none'/>
        </div>
    )
}

export default ExploreMenu
