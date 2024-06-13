import React from 'react';

const SkillsSection = () => {
  return (
    <section className="px-4 py-16 mx-auto max-w-7xl bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold leading-tight text-gray-800">My Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Skill name="HTML" />
        <Skill name="CSS" />
        <Skill name="JavaScript" />
        <Skill name="React" />
        <Skill name="Tailwind CSS" />
        <Skill name="Firebase" ><img src='../src/icons/javascript-39424.png'></img></Skill>
        {/* Add more Skill components here */}
      </div>
    </section>
  );
};

const Skill = ({ name }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
    </div>
  );
};

export default SkillsSection;
