import React from 'react';
import MyImg from "../src/IMG/IMG_20240524_132742_325.jpg"

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-16 mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold leading-tight text-gray-800">About Me</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img className="rounded-lg shadow-lg w-96" src={MyImg} alt="Christopher Tshoma" />
        </div>
        <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
          <p className="text-gray-700 text-lg leading-relaxed">
            Hello! I am Christopher Thapelo Tshoma, a passionate software developer with experience in developing user interfaces and enhancing user experience. I specialize in creating dynamic and beautiful web pages. In addition to my technical skills, I am a problem-solver who loves taking on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
