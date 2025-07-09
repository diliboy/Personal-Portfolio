import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/ed.png";
import TechSkills from "./TechSkills";
import Tools from "./Tools";
import Experience from "./Experience";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "40px",
            }}
          >
            <h1 style={{ fontSize: "2.6em" }} className="blue">
              Let Me Introduce Myself
            </h1>
            <br />
            <Aboutcard />
          </Col>
        </Row>
        <h1 style={{paddingTop:"50px"}}>
          <strong className="purple">Education</strong>
        </h1>
        <Row>
          <Col
            md={7}
            style={{
              paddingTop: "60px",
              paddingBottom: "50px",
            }}
          >
            <strong className="yellow" style={{fontSize:"1.2em"}}>BSc (Hons) in Information Technology</strong><br />
            Rajarata University of Sri Lanka<br />
            <span style={{ fontStyle: "italic" }}>2017 - 2023</span>
            <br/>
            <br/>
            <br/>
            <span>Awarded <strong>Dr. Sena Yaddehige Gold Medal</strong> for <strong><br/>"Most Outstanding Student (Information Technology)"</strong>.</span>
            <br/>
            <br/>
            <span>GPA of 3.66/4.0</span>
  
            
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

          <Experience/>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <TechSkills/>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>

        <Tools/>

      </Container>
    </Container>
  );
}

export default About;
