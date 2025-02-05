import Carousel from "react-multi-carousel";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import { IconModalButton } from "../../../components/ComponentUtils";
import Laravel from "../../../assets/img/skills/laravel.png";
import C from "../../../assets/img/skills/c.png";
import Php from "../../../assets/img/skills/php.png";
import Unity from "../../../assets/img/skills/unity.png";
import WebDev from "../../../assets/img/skills/web-dev.png";

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

  const mySkillsArray = [
    { title: 'Php', imageUrl: Laravel },
    { title: 'Laravel', imageUrl: Php },
    { title: 'Html/CSS/JavaScript', imageUrl: WebDev },
    { title: 'Unity', imageUrl: Unity },
    { title: 'C#', imageUrl: C },
  ]
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <IconModalButton btnTitle='Show my skills' modalTitle='List of Skills' mySkills={mySkillsArray}/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Skills
