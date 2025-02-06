import { Card } from "../../../components/Card";
import Carousel from "react-multi-carousel";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import { IconModalButton } from "../../../components/ComponentUtils";
import { images } from "../../../utils/images";

export const Project = () => {
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

  const myObject = {
    Simple: [
      { title: 'Portfolio', imageUrl: images.portfolio, showDescription: true, description: 'This portfolio, built with ReactJS, showcases my skills and capabilities in the IT industry.', siteUrl: 'https://xceedgone.github.io/jcp-portfolio/' },
      { title: 'Guess Game', imageUrl: images.placeholder, showDescription: true, description: 'Not yet available. Not yet available.' },
    ],
    Moderate: [
      { title: 'Chocoholics', imageUrl: images.choco, showDescription: true, description: 'This was my first experience with REST API. It was built using the Ionic framework, with PHP and MySQL for the backend. Unfortunately, the page currently only displays static content.', siteUrl: 'https://sage-bavarois-7de00a.netlify.app' },
      { title: 'CRM System', imageUrl: images.placeholder, showDescription: true, description: 'Not yet available. Not yet available.' }
    ],
    Complex: [
      { title: 'Loop', imageUrl: images.placeholder, showDescription: true, description: 'This project was a collaborative effort with my capstone team. It’s a game designed to teach programming languages through the use of code blocks.' }
    ]
  }
  return (
    <section className="skill" id="projects">
      <Container>
        <Row>
          <Col>
            <div>
              <h2 className="text-center">Project</h2>
              <p>
                Here’s a collection of my projects, showcasing my journey in programming. I’ve worked on everything from simple web pages to more complex websites or even a game!
              </p>
              <IconModalButton btnTitle='Show my projects' modalTitle='List of Projects' itemList={myObject}/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
