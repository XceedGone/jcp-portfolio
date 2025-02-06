import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="skill" id="about">
      <Container>
        <Row>
          <Col>
            <div>
              <h2 class="text-center">About me</h2>
              <p className="text-justify">
              I started my career as a Software Engineer at Sebi Technologies, where I worked on a Learning Management System (LMS).
              During this time, I gained experience in web development using JavaScript, PHP, and PostgreSQL. This role helped me build a strong
              foundation in creating web applications and improve my skills in both front-end and back-end development.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
