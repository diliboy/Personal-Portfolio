import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecom from "../../Assets/Projects/ecom.jpg";
import movie from "../../Assets/Projects/movie.jpg";
import grocery from "../../Assets/Projects/Grocery.jpg";
import SN from "../../Assets/Projects/SN.jpg";
import PM from "../../Assets/Projects/PM-System.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="blue">My Recent Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PM}
              isBlog={false}
              title="Patient Management System"
              description="A microservices-based backend system built with Java 21 and Spring Boot that manages patient records in a distributed architecture. It features RESTful APIs, gRPC for inter-service communication, Kafka for asynchronous messaging, and JWT-based authentication via a dedicated auth service. The system includes an API Gateway using Spring Cloud Gateway and is fully Dockerized with PostgreSQL databases and LocalStack for AWS cloud simulation."
              ghLink="https://github.com/diliboy/Patient-Management-System-Java"

            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="Grocery Store Management System"
              description="A grocery store management web application developed using Flask (Python) with a MySQL database and a responsive Bootstrap-powered UI. Ideal for demonstrating backend logic, database integration, and frontend responsiveness in a compact project."
              ghLink="https://github.com/diliboy/Sample-Grocery-Store-Python"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SN}
              isBlog={false}
              title="Social Network"
              description="A full-stack web application built using C# ASP.NET Core for the backend and React.js for the frontend, with Microsoft SQL Server as the database. The platform enables users and administrators to interact in a streamlined content publishing environment."
              ghLink="https://github.com/diliboy/Social-Network-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie App"
              description="A simple and responsive web application built with React.js that allows users to search for movies using a third-party API and add selected titles to a personalized favorites section. The application features a clean user interface, dynamic content rendering, and efficient state management using React hooks."
              ghLink="https://github.com/diliboy/React_Movie_Project"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="React E-commerce Website"
              description="A e-commerce web application built with React.js, developed as part of a video tutorial to deepen practical understanding of React concepts. While currently in a foundational stage, it is structured for future enhancements such as authentication, checkout flow, and backend integration."
              ghLink="https://github.com/diliboy/dilishop"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
