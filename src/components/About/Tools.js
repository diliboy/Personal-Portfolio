import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import intellij from "../../Assets/tools/IntelliJ IDEA.png";
import vscode from "../../Assets/tools/Visual Studio Code (VS Code).png";
import vstudio from "../../Assets/tools/Visual Studio.png";
import postman from "../../Assets/tools/Postman.png";
import prometheus from "../../Assets/tools/Prometheus.png";


const techSkills = [
    { name: "IntelliJ IDEA", icon: intellij },
    { name: "Visual Studio Code", icon: vscode },
    { name: "Visual Studio", icon: vstudio },
    { name: "Postman", icon: postman },
    { name: "Prometheus", icon: prometheus }
];

function Tools() {
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

export default Tools;
