import React, { useContext } from 'react'
import { StoreContext } from '../../Context/storeContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

   const {cartItems, food_list, removeFromCart,} = useContext(StoreContext)
   const navigate = useNavigate();

   // Calculate subtotal dynamically
   const subtotal = food_list.reduce((acc, item) => acc + (cartItems[item._id] || 0) * item.price, 0)
   const deliveryCharges = subtotal > 0 ? 5 : 0  // Example fixed delivery charge

  return (
    <div className="px-4 sm:px-10 md:px-20 py-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-[#262626] mb-6">Your Cart</h1>

        {/* Cart Table Header */}
        <div className="hidden md:grid grid-cols-6 gap-4 bg-[#FF6347]/20 p-4 rounded-t-lg text-[#262626] font-semibold">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-4">
            {food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                    return (
                        <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 items-center bg-white p-4 rounded-lg shadow-md">
                            <div className="flex justify-center md:justify-start">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                            </div>
                            <p className="text-[#262626] font-medium flex items-center justify-center md:justify-start">{item.name}</p>
                            <p className="text-[#FF6347] font-bold flex items-center justify-center">${item.price}</p>
                            <p className="text-[#262626] font-medium flex items-center justify-center">{cartItems[item._id]}</p>
                            <p className="text-[#262626] font-bold flex items-center justify-center">${item.price * cartItems[item._id]}</p>
                            <button 
                                onClick={() => removeFromCart(item._id)}
                                className="text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mx-auto md:mx-0 transition"
                            >
                                x
                            </button>
                        </div>
                    )
                }
            })}
        </div>

        {/* Promo Code Section */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
            <input 
                type="text" 
                placeholder="Enter Promo Code" 
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6347]"
            />
            <button className="bg-[#FF6347] hover:bg-[#FF7F50] text-white px-6 py-2 rounded-lg font-semibold transition">
                Apply
            </button>
        </div>

        {/* Subtotal and Delivery Charges */}
        <div className="mt-6 flex flex-col gap-4 max-w-md">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <span className="text-gray-700 font-medium">Subtotal</span>
                <span className="text-[#FF6347] font-bold">${subtotal}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <span className="text-gray-700 font-medium">Delivery Charges</span>
                <span className="text-[#FF6347] font-bold">${deliveryCharges}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow font-bold text-lg">
                <span>Total</span>
                <span>${subtotal + deliveryCharges}</span>
            </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-6 flex justify-end">
            <button  onClick={()=>navigate("/placeorder")} className="bg-[#FF6347] hover:bg-[#FF7F50] text-white px-6 py-3 rounded-lg font-semibold transition">
                Proceed to Checkout
            </button>
        </div>
    </div>
  )
}

export default Cart
