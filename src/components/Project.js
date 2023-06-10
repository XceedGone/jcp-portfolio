import { Card } from "./Card";
import Carousel from "react-multi-carousel";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import Sample_1 from "../assets/img/project/sample-1.png";

export const Project = () => {
  const projects = [
    {
      title: "Laravel",
      description: "Backend",
      imgUrl: Sample_1,
    },
    {
      title: "Php",
      description: "Backend",
      imgUrl: Sample_1,
    },
    {
      title: "Php",
      description: "Backend",
      imgUrl: Sample_1,
    },
    {
      title: "Php",
      description: "Backend",
      imgUrl: Sample_1,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="skill-tx">
              <h2>Projects</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="skill-bx" data-aos="flip-right">
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {projects.map((project, index) => {
                  return (
                    <div className="project-item" key={index}>
                      <Card {...project} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
