import React from 'react';

const ConnectSection = ({ openContactModal }) => {
  return (
    <section className="connect-section bg-white text-gray-900 py-12" id="connect">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Connect with Me</h2>
        <p className="mb-8">Feel free to reach out through any of the platforms below:</p>
        <div className="flex justify-center space-x-4 mb-8">
        <a href="https://github.com/ChristopherTsh" target="_blank" rel="noopener noreferrer">
          <img src="../src/icons/github.png" alt="GitHub" className="h-8 w-8" />
        </a>
        <a href="https://www.linkedin.com/in/christophertshoma" target="_blank" rel="noopener noreferrer">
          <img src="../src/icons/linkedin-logo-png-2025.png" alt="LinkedIn" className="h-8 w-8" />
        </a>
        <a href="https://twitter.com/ChristopherTshoma" target="_blank" rel="noopener noreferrer">
          <img src="../src/icons/twitter-icon-98.png" alt="Twitter" className="h-8 w-8" />
        </a>
        <a href="https://www.youtube.com/@ChristopherTshoma" target="_blank" rel="noopener noreferrer">
          <img src="../src/icons/youtube-logo-png-3572.png" alt="YouTube" className="h-8 w-8" />
        </a>
        <a href="https://medium.com/@ChristopherTshoma" target="_blank" rel="noopener noreferrer">
          <img src="../src/icons/medium.png" alt="Medium" className="h-8 w-8" />
        </a>
      </div>
        <button
          onClick={openContactModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-8"
        >
          Contact Me
        </button>
        <a
          href="https://drive.usercontent.google.com/u/0/uc?id=1KCmREkTvO5A81zWzphpWKfSD8xMvsD0m&export=download" // Update this with your Google Docs link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 mt-4 ml-4"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};


export default ConnectSection;
