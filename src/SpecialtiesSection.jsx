import React from 'react';

const SpecialtiesSection = () => {
  return (
    <section className="px-4 py-16 mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-gray-800">My Specialties</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        <Specialty title="UI Developer" description="A UI (User Interface) developer specializes in designing and developing the visual and interactive components of websites, web applications, and mobile applications." />
        <Specialty title="UX Developer" description="A UX developer, short for User Experience developer, is a professional who focuses on creating digital experiences that are intuitive, efficient, and enjoyable for users. I combine elements of design and technology to enhance the usability and accessibility of websites, applications, and other digital products. UX developers conduct user research, analyze data, and create wireframes and prototypes to understand user needs and preferences." />
        <Specialty title="Web Developer" description="I'm a web developer I design, create, and maintain websites. I use various programming languages such as HTML, CSS, and JavaScript to bring web pages to life. Web developers work on both the front end, which is what users see and interact with, and the back end, which involves server-side development and database management." />
      </div>
    </section>
  );
};

const Specialty = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center gap-6 px-6 py-5 rounded-3xl shadow-main hover:bg-indigo-500 hover:text-white transition duration-300">
      <div className="flex flex-col gap-2 text-center px-6">
        <h4 className="text-2xl font-extrabold text-gray-800">{title}</h4>
        <p className="font-medium text-indigo-600">{description}</p>
      </div>
    </div>
  );
};

export default SpecialtiesSection;
