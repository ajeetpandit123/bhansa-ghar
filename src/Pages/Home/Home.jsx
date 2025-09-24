import React, { useState } from 'react'
import Header from '../../Components/header/Header.jsx'
import ExploreMenu from '../../Components/exploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../Components/foodDisplay/FoodDisplay.jsx'
import AppDownload from '../../Components/app-download/AppDownload.jsx'

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
       <Header/>
       <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}/>
       <AppDownload/>
    </div>
  )
}

export default Home
