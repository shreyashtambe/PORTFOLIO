import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images\IMG 3.jpg"
                alt="avatar"
                style={{ height: "250px" , borderRadius:"15px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Shreyash Tambe</h2>
            <h4 style={{ color: "grey" }}>Spring Boot (Java) Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is Shreyash Tambe. I’m an aspiring software engineer student currently persuing my BE(Computer Science).
              I’m mainly skilled with C++, java & Mysql and also  proficient in Data Strucuture & Algorithm.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Narhe, Pune(411041), Maharshtra</p>
            <h5>Phone</h5>
            <p>(+91) 7507549354</p>
            <h5>Email</h5>
            <p>shreyashtambe7171@gmail.com</p>
            <h5>Download Resume</h5>
            <div  className="butt" >
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color:"black"}}
              href="https://drive.google.com/file/d/1QUYc6QAFcZ4vRLHLGmwgoXD6uBpfVOxn/view?usp=sharing"
            >
              My Update Resume
            </a>
            </div>
            <h5>Download CV</h5>
            <div  className="butt" >
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color:"black" }}
              href="https://drive.google.com/file/d/1QUYc6QAFcZ4vRLHLGmwgoXD6uBpfVOxn/view?usp=sharing"
            >
              My Update CV
            </a>
            </div>
          </Cell>
          <Cell col={8}>
          <div  className="resume-right-col" >  
              <h2>Internship</h2>
            <Experience
              startYear={"August 2021"}
              endYear={"November 2022"}              
              jobName={"Java Developer"}
              companyName={"College of Engineering, Pune"}
              jobDesc={
                [
                  "COEP Virtual Maths Lab portal tends to help students(upto HSC) to practise mathematics",
                  "Developing a dynamic code using java, Mysql and Jdbc ",
                  "developed code rerturns the the dynamic Mathematics Question Set along with correct answers and appropriate explaination",
                  "Enhancing features and improvements existing functionality of a COEP Virtual Maths Lab portal" 
                ]
              }
            />
            <Experience
              startYear={"August 2021"}
              endYear={"October 2021"}
              duration= {3}
              jobName={"Full Stack Developer"}
              companyName={"Trainity"}
              jobDesc={[
                "Worked on active development project. Developed Skills like HTML, CSS, JS, Node, MongoDB",
                "Also developed small projects like weather monitoring Application ",
                "Learned to deploy projects using heroku & netlify."
              ]
              }
            />
             </div>           
             <div  className="resume-right-col" >   
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2023}
              schoolName={"Savitribai Phule Pune University"}
              degreeName={"BE in Computer Science"}
            />
           </div>  
            <div  className="resume-right-col" >             
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS/JS"} progress={85} />
            <Skills skill={"ReactJS"} progress={80} />
            <Skills skill={"Spring Boot"} progress={50} />
            <Skills skill={"SQL"} progress={92} />
            <Skills skill={"NodeJS"} progress={80} />
            <Skills skill={"JAVA"} progress={95} />
            <Skills skill={"C++"} progress={90} />
            <Skills skill={"Machine Learning"} progress={90} /> 
            </div>  
            
            <div  className="resume-right-col" >   
            <h2>Achievments</h2>
            <h6>First rank in Sinhagad institute Of Technology And Sciences, Narhe.  </h6>
            <h6>CTA students association lead sinhagad </h6>
            <h6>Internshala student partner</h6>
            <h6>Certificate in coding contests on data structure and algorithms held by IIT Allahabad </h6>
            </div>  
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
