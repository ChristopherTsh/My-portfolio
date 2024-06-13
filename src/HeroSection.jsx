import React from 'react';
import profileImage from '../assets/IMG_20240524_132742_325.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 px-20 md:gap-5">
      <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
        <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-gray-800">CHRISTOPHER THAPELO TSHOMA</h1>
        <h2 className="mb-6 text-4xl font-normal leading-7 lg:w-3/4 text-indigo-600">SOFTWARE Developer</h2>
      </div>
      <div className="items-center justify-center hidden col-span-1 md:flex">
        <img src={profileImage} alt="CHRISTOPHER TSHOMA" className="rounded-full shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;
