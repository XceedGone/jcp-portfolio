import { Col } from "react-bootstrap";

export const Card = ({ title, description, imgUrl }) => {
  return (
    <Col>
      <div className="proj-imgbx">
        <img src={imgUrl} />
      </div>
      <div className="proj-card">
        <h5>{title}</h5>
        <h6>
          <span>{description}</span>
        </h6>
      </div>
    </Col>
  );
};
