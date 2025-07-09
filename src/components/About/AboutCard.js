import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi! I'm <span className="yellow">Dilan Bandara</span>, a passionate software engineer based in <span className="yellow">Hamilton, New Zealand</span>. 
            <br/>
            With professional experience in Java, Spring Boot, React.js, and AWS, I enjoy building 
            scalable applications and solving backend challenges. 
            <br/>
            I'm particularly interested in microservices, cloud-native development, and system performance tuning. 
            I'm currently expanding my skills in C#, .NET, DevOps and development security knowledge. 
            <br/>
            <br/>
            When I'm not coding, you'll find me travelling or exploring Kiwi tech communities!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
