import React, { useContext } from 'react'
import { StoreContext } from '../../Context/storeContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='mt-[30px] '>
      <h1 className='font-bold text-2xl'>Top dishes near you </h1>
      <div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] mt-[30px] gap-x-[30px] gap-y-[50px]'>
        {food_list.map((item,index)=>{
            if (category==="All" || category===item.category) {
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description}  price={item.price} image={item.image}/>
            }
        
           
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
