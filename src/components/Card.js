import { Col } from "react-bootstrap";

export const Card = ({ title, description, imgUrl }) => {
  return (
    <Col>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={imgUrl}/>
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
export const IconCard = ({ link, icon, view}) => {
    return (
        <a href={link}
           className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox={view}>
                <path fill-rule="evenodd"
                      d={icon}
                      clip-rule="evenodd"/>
            </svg>
        </a>
    );
};