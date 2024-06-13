import React from "react";
import Todo from "../src/IMG/To do list.png";
import Portfolio from "../src/IMG/Portfolio.png";
import BlackJack from "../src/IMG/black-jack.png";

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-16 mx-auto max-w-7xl bg-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold leading-tight text-gray-800">
          My Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Project
          title="Portfolio"
          imgSrc={Portfolio}
          description="I created this portfolio to showcase myself. It includes sections about me, my work, and what I do. The app was built using HTML, CSS, and JavaScript."
          githubLink="https://github.com/ChristopherTsh/CHRTSH528_BCL2401_GroupA_ChristopherThapeloTshoma_SDF06.git"
          liveLink="https://chris-101.netlify.app"
        />
        <Project
          title="To do list"
          imgSrc={Todo}
          description="This project uses Firebase and is hosted on Netlify. It allows you to add tasks that update in real-time. You can tap a task to mark it as completed."
          githubLink="https://github.com/ChristopherTsh/todo-list"
          liveLink="https://todo-list.netlify.app"
        />
        <Project
          title="Black-Jack"
          imgSrc={BlackJack}
          description=" My blackjack game lets you draw cards with the goal of reaching 21.
            You can keep drawing as long as your total is less than 21. If you
            go over 21, you lose. Using JavaScript and if statements, I created
            this game to check these conditions."
          githubLink="https://github.com/ChristopherTsh/todo-list"
          liveLink="https://todo-list.netlify.app"
        />
      </div>
    </section>
  );
};

const Project = ({ title, imgSrc, description, githubLink, liveLink }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105">
      <img className="rounded-lg mb-4" src={imgSrc} alt={title} />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a
          href={githubLink}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={liveLink}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
