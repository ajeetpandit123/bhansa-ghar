import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/storeContext'

const FoodItem = ({id,name,price, description,image}) => {
    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='w-[100%] m-auto rounded-[15px] shadow-[0_0_0_#00000015]  '>
         <div className='relative ' >
            <img  src={image} alt="" className='w-[100%] rounded-t-[15px]' />
            {
                !cartItems[id]
                ? <img className='w-[35px] absolute bottom-[15px] mr-[15px] cursor-pointer rounded-[50%]' src={assets.add_icon_white} alt="" onClick={()=>addToCart(id)} />
                : <div className='absolute  bottom-[15px] mr-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                    <img className='w-[30px] cursor-pointer' src={assets.remove_icon_red} alt="" onClick={()=> removeFromCart(id)} />
                    <p>{cartItems[id]}</p>
                    <img className='w-[30px] cursor-pointer' src= {assets.add_icon_green} alt=""  onClick={()=> addToCart(id)} />
                </div>
            }
         </div>
         <div className='p-[20px] '>
         <div className='flex justify-between items-center mb-[10px]'>
            <p className='text-[2oopx] font-bold'>{name} </p>
            <img src={assets.rating_starts} alt=""  className='w-[70px]'/>
         </div>
         <div>
            <p className='text-[#676767] text-[12px]'>{description}</p>
            <p className='text-[tomato] text-[22px] font-bold mx-[10px] my-[0px]'>${price} </p>
         </div>
</div>
    </div>
  )
}

export default FoodItem
