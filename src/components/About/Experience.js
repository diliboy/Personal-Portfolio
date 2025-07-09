import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const experiences = [
  {
    title: "Software Engineer",
    company: "DXDY Digital (Pvt) LTD (Consultant at Dialog Axiata PLC)",
    location: "Colombo",
    duration: "May 2024 - Feb 2025",
    tech: "Java, Spring Boot, REST API, React, MySQL, Apache Kafka, AWS, Agile, CI/CD"
  },
  {
    title: "Associate Software Engineer",
    company: "DXDY Digital (Pvt) LTD (Consultant at Dialog Axiata PLC)",
    location: "Colombo",
    duration: "Aug 2023 - May 2024",
    tech: "Java, Spring Boot, Node.js, React, Git, MySQL"
  },
  {
    title: "Software Engineer Intern",
    company: "Dialog Axiata PLC",
    location: "Colombo",
    duration: "Aug 2022 - Jul 2023",
    tech: "Java, Spring Boot, REST API, MySQL, Hibernate, JPA, Agile"
  },
];

function Experience() {
  return (
    <Container fluid className="about-section" id="experience">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience</strong>
        </h1>
        <Row style={{marginBottom:"60px", marginTop:"50px"}}>
          {experiences.map((exp, index) => (
            <Col md={12} key={index} className="mb-5">
              <div className="experience-entry">
                <h3 className="yellow">
                  {exp.title} 
                </h3>
                <h5>
                    @{" "}
                  <strong >{exp.company}</strong>
                </h5>
                <p style={{ marginBottom: "4px", color: "#aaa" }}>
                  <i>{exp.location}</i> | <i>{exp.duration}</i>
                </p>
                <p style={{ color: "#ccc", marginBottom: "10px", marginTop:"15px"}}>
                  <strong>Technologies:</strong> {exp.tech}
                </p>
                {/* <ul className="experience-list">
                  {exp.responsibilities.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul> */}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
