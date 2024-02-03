import React from 'react';
import '../index.css';


const ProjectSection = () => {
  return (
    
    <div className="project-section" id="projects">
            <h2 className="page-header">Projects</h2>

            <div className="project-container">
                <div className="project-card" id="project1">
                    <div className="project-number project-number-right">01</div>
                    <div className="project-content project-content-left">

                        <div className="project-skills-container">
                            <img className="project-skill" src="./images/stack/HTML.png" alt="" />
                            <img className="project-skill" src="./images/stack/CSS.png" alt="" />
                            <img className="project-skill" src="./images/stack/Javascript.svg" alt="" />
                            <img className="project-skill" src="./images/stack/java.png" alt="" />
                            <img className="project-skill" src="./images/stack/spring.png" alt="" />
                            <img className="project-skill" src="./images/stack/Rest.png" alt="" />
                            <img className="project-skill" src="./images/stack/Redux.svg" alt="" />
                            <img className="project-skill" src="./images/stack/Vercel.svg" alt="" />
                        </div>

                        <h2 className="project-heading">Supply Chain Solutions</h2>

                        <p className="project-subHeading">Warehouse Management System (WMS), the focus shifts to efficiently fulfilling customer orders and coordinating their delivery. This stage involves tasks such as order picking, packing, and preparing shipments for handover to delivery partners. 
                        </p>
                        <div className="btn-grp">
                            <button className="btn-pink btn-project">Read More</button>
                            <a href="">
                            <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                            </a>
                            <a href="">
                            <i title="Live Link" className="fa-solid fa-link icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                
          
          
            </div>

        </div>

  );
};

export default ProjectSection;
