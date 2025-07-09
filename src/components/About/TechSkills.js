import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Add all imported images here
import java from "../../Assets/tech/Java.png";
import springboot from "../../Assets/tech/Spring.png";
import csharp from "../../Assets/tech/CSharp.png";
import javascript from "../../Assets/tech/JavaScript.png";
import hibernate from "../../Assets/tech/Hibernate.png";
import react from "../../Assets/tech/React.png";
import git from "../../Assets/tech/Git.png";
import jenkins from "../../Assets/tech/Jenkins.png";
import aws from "../../Assets/tech/AWS.png";
import docker from "../../Assets/tech/Docker.png";
import kubernetes from "../../Assets/tech/Kubernetes.png";
import junit from "../../Assets/tech/JUnit.png";
import Python from "../../Assets/tech/Python.png";
import mysql from "../../Assets/tech/MySQL.png";
import sqlserver from "../../Assets/tech/Sqlserver.png";
import postgresql from "../../Assets/tech/PostgresSQL.png";

// Create an array of tech skills
const techSkills = [
    { name: "Java", icon: java },
    { name: "Spring Boot", icon: springboot },
    { name: "C#", icon: csharp },
    { name: "JavaScript", icon: javascript },
    { name: "Python", icon: Python },
    { name: "React", icon: react },
    { name: "Hibernate", icon: hibernate },
    { name: "Git", icon: git },
    { name: "Jenkins", icon: jenkins },
    { name: "AWS", icon: aws },
    { name: "Docker", icon: docker },
    { name: "Kubernetes", icon: kubernetes },
    { name: "JUnit", icon: junit },
    { name: "MySQL", icon: mysql },
    { name: "SQL Server", icon: sqlserver },
    { name: "PostgreSQL", icon: postgresql },
];

function TechSkills() {
    return (
        <Container className="techstack-section">
            <Row style={{ justifyContent: "center" }}>
                {techSkills.map((tech, index) => (
                    <Col
                        key={index}
                        xs={4}
                        sm={3}
                        md={2}
                        className="techstack-item text-center mb-4"
                    >
                        <div className="tech-icon-wrapper">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="tech-icon-img"
                            />
                        </div>
                        <p style={{ marginTop: "10px", fontSize: "0.95rem", color: "white" }}>
                            {tech.name}
                        </p>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TechSkills;
