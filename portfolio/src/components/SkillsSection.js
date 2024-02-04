import React from 'react';
import '../index.css';


const SkillsSection = () => {
  return (
    <div id="skills" className="container skills-container">
      <div className="skill-fade-text">Skills</div>
      
      <div className="skill-container-left">
            <h2 className="skill-heading">
              <span className="caps">M</span>e and
              <br />
              MyTech Stack
            </h2>

            <div className="skill-subHeading">
              <p>
              Hello, I'm Atul Kumar. I am currently serve as a full-stack developer 
              at Softeon, where I've honed my skills and expertise in a
               variety of technologies. With a solid foundation in 
               Java ,JSP,Servlets ,Spring , Spring Boot,REST APIs, 
               I bring 2 years  of hands-on experience in creating 
               and optimizing applications. I am particularly adept at
               building Supply Chain Solutions to improve the Warehouse operations
               efficiently and reduce the repetative tasks.
              </p>
            </div>
          </div>

          <div className="skill-container-right">
            <img src="./images/userAsset/blob vector.png" className="blob-style" alt="" />

            <img src="./images/stack/HTML.png" alt="" className="skills-logo" />
            <img src="./images/stack/CSS.png" alt="" className="skills-logo" />
            <img src="./images/stack/Javascript.svg" alt="" className="skills-logo" />
            <img src="./images/stack/React.png" alt="" className="skills-logo" />
            <img src="./images/stack/java.png" alt="" className="skills-logo" />
            <img src="./images/stack/spring.png" alt="" className="skills-logo" />
            <img src="./images/stack/Rest.png" alt="" className="skills-logo" />
            <img src="./images/stack/Tailwind.png" alt="" className="skills-logo" />
            <img src="./images/stack/Git.svg" alt="" className="skills-logo" />
            <img src="./images/stack/Github.svg" alt="" className="skills-logo" />
            <img src="./images/stack/Vercel.svg" alt="" className="skills-logo" />
          </div>
        </div>

  );
};

export default SkillsSection;
