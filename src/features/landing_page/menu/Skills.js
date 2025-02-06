import Carousel from "react-multi-carousel";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import { IconModalButton } from "../../../components/ComponentUtils";
import { images } from "../../../utils/images";

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const responsive = {
    superLargeDesktop: {
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
    Core: [
      { title: 'Html/CSS/JavaScript', imageUrl: images.WebDev },
      { title: 'VueJS', imageUrl: images.vueJS },
      { title: 'Php', imageUrl: images.Php },
      { title: 'Laravel', imageUrl: images.Laravel },
      { title: 'RestAPI', imageUrl: images.restAPI },
      { title: 'GraphQL', imageUrl: images.graphQL },
      { title: 'PostgreSQL', imageUrl: images.pgSQL },
    ],
    Knowledgeable: [
      { title: 'React JS', imageUrl: images.reactJS },
      { title: 'Ionic Framework', imageUrl: images.ionic },
      { title: 'Unity', imageUrl: images.Unity },
      { title: 'C#', imageUrl: images.C },
    ]
  }
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div>
              <h2 className="text-center">Skills</h2>
              <p>
                I bring a diverse set of programming skills that enable me to develop innovative solutions for real-world challenges.
              </p>
              <IconModalButton btnTitle='Show my skills' modalTitle='List of Skills' itemList={myObject}/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Skills
