import { useState, useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle, Link} from "react-bootstrap-icons";
import header from "../assets/img/jcp-img.png";

export const Banner = () => {
  const Typewriter = ({ toRotate, period }) => {
    const [text, setText] = useState('');
    const [loopNum, setLoopNum] = useState(0);
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(500); // Initial delta value, can be adjusted

    const tick = useCallback(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex((prevIndex) => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500); // Reset delta value after loop
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, [isDeleting, loopNum, period, text, toRotate]);

    useEffect(() => {
      const ticker = setInterval(() => {
        tick();
      }, delta);

      return () => {
        clearInterval(ticker);
      };
    }, [delta, tick]);

    // Ensuring the effect runs only when delta or tick changes

    return <span>{text}</span>;
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h2><span className="tagline">Welcome!</span></h2>
            <h1>
              Hi I'm JC!
              <br></br>
              <Typewriter toRotate={["Hello World", "This is my portfolio", "I'm a developer"]} period={1000} />
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>
              Let's Connect! <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div data-aos="fade-left">
              <img src={header} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
