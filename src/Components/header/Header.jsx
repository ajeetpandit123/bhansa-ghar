import React from 'react';

const Header = () => {
  return (
    <div
      className="h-[34vw] sm:h-[40vw] mt-[30px] mb-[30px] mx-auto bg-cover bg-center relative"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <div className="absolute flex flex-col items-start gap-[1.5vw] sm:max-w-[70%] md:max-w-[50%] bottom-[10%] left-[6vw]">
        <h1 className="text-[max(4.5vw,22px)] md:text-[max(4.5vw,28px)] font-bold text-white">
          Order your favorite food here
        </h1>

        <p className="text-white text-[1.5vw] md:text-[1.5vw] leading-relaxed hidden sm:block">
          Welcome to Bhansa-ghar. Browse restaurants, customize your favorite dishes, and enjoy fast delivery or pickup. With real-time tracking and personalized recommendations, Bhansa-ghar makes every meal convenient and delicious.
        </p>

        <button className="border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-full hover:scale-105 transition-transform duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
