import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiR,
  SiC,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";
import './Techstack.css';

function Techstack() {
  const techStacks = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiGit />, name: "Git" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiR />, name: "R Programming" },
    { icon: <FaTools />, name: "MATLAB" },
    { icon: <SiC />, name: "C Language" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStacks.map((tech, index) => (
        <Col xs={3} md={3} className="tech-icons" key={index}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {tech.icon}
              </div>
              <div className="flip-card-back">
                <span className="tech-name">{tech.name}</span>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
