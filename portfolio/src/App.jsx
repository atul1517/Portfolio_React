import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  return (
    <div id="wrapper"> 
     <div className="container">
        <Navbar />
         <HeroSection />  
     </div>  
        <ProjectSection />
      <SkillsSection />
      <ContactForm />
      <Footer />  
    </div>
  );
};

export default App;
