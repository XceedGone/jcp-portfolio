import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import { Skills } from './menu/Skills';
import { Project } from './menu/Project';
import { About } from './menu/About';
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel";

export const Template = () => {
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

  return (
    <section className="template" id="template">
        <Carousel
            responsive={responsive}
            className="slider"
        >
            <About />
            <Skills />
            <Project />
        </Carousel>
    </section>
  );
};
