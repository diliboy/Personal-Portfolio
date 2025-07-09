import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from "@emailjs/browser";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcmkpgf", 
        "template_fzipxmf", 
        form.current,
        "V_E5qLREEd_JDRb7I" 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); 
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row className="justify-content-center mb-5">
          <h1 className="project-heading">
            <strong className="blue">Contact Me</strong>
          </h1>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="from_name" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="from_email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={4} placeholder="Your message..." required />
              </Form.Group>
              <Button variant="primary" type="submit">Send</Button>
            </Form>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/diliboy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dilanbandara/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
