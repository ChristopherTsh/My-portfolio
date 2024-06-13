import React, { useState }  from 'react';
import Navbar from '../src/Navbar';
import HeroSection from '../src/HeroSection';
import SpecialtiesSection from '../src/SpecialtiesSection';
import ProjectsSection from '../src/ProjectsSection';
import AboutSection from '../src/AboutSection';
import SkillsSection from '../src/SkillsSection';
import ConnectSection from '../src/ConnectSection';
import Footer from '../src/Footer';
import ContactModal from '../src/ContactModal';


function App() {
  
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <HeroSection />
      <SpecialtiesSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ConnectSection openContactModal={openModal}  />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal}  />
    </div>
  );
}

export default App;
