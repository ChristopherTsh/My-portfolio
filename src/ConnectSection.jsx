import React from 'react';

const ConnectSection = () => {
  return (
    <section id="connect" className="px-4 py-16 mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold leading-tight text-gray-800">Connect with Me</h2>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="https://linkedin.com/in/christopher-tshoma" className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-linkedin fa-3x"></i>
        </a>
        <a href="https://github.com/ChristopherTsh" className="text-gray-900 hover:text-gray-700">
          <i className="fab fa-github fa-3x"></i>
        </a>
        <a href="https://twitter.com/christopher_tsh" className="text-blue-400 hover:text-blue-600">
          <i className="fab fa-twitter fa-3x"></i>
        </a>
        {/* Add more social icons here */}
      </div>
    </section>
  );
};

export default ConnectSection;
