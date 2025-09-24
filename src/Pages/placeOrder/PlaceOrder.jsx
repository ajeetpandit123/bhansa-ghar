import React, { useContext } from 'react';
import { StoreContext } from '../../Context/storeContext';

const PlaceOrder = () => {
  const { subtotal } = useContext(StoreContext);
  const deliveryCharges = 5;

  return (
    <div className="px-4 sm:px-8 lg:px-20 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#FF6347]">Place Your Order</h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left: Delivery Info */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
          <form className="flex flex-col gap-4">

            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="First Name" className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6347]" />
              <input type="text" placeholder="Last Name" className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6347]" />
            </div>

            <input type="email" placeholder="Email Address" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6347]" />
            <input type="text" placeholder="Street" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6347]" />

            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="City" className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6347]" />
              <input type="text" placeholder="State" className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6347]" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="Zip Code" className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6347]" />
              <input type="text" placeholder="Country" className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6347]" />
            </div>

            <input type="number" placeholder="Phone" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6347]" />
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="flex-1 bg-[#FF6347] text-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center bg-[#FF7F50] p-4 rounded-lg">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center bg-[#FF7F50] p-4 rounded-lg">
              <span>Delivery Charges</span>
              <span>${deliveryCharges.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center bg-white text-[#FF6347] p-4 rounded-lg font-bold text-lg">
              <span>Total</span>
              <span>${(subtotal + deliveryCharges).toFixed(2)}</span>
            </div>
          </div>

          <button className="mt-6 bg-white text-[#FF6347] hover:text-white hover:bg-[#FF7F50] font-semibold px-6 py-3 rounded-lg transition">
            Proceed to Payment
          </button>
        </div>

      </div>
    </div>
  );
};

export default PlaceOrder;
