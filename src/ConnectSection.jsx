import React from 'react';

const ConnectSection = () => {
  const cvLink = 'https://docs.google.com/document/d/your-doc-id/export?format=docx';

  return (
    <section id="connect" className="px-4 py-16 mx-auto max-w-7xl text-center">
      <h2 className="text-3xl font-extrabold leading-tight text-dark mb-8">
        Connect with Me
      </h2>
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
      <div>
        <a
          href="https://drive.usercontent.google.com/u/0/uc?id=1KCmREkTvO5A81zWzphpWKfSD8xMvsD0m&export=download"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          download
        >
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default ConnectSection;
