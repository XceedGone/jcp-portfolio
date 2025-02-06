import { Col } from "react-bootstrap";

export const CardWithImage = ({ title, description, imgUrl, showDescription, siteUrl }) => {
  return (
    <Col>
        <div className="max-w-xs bg-sky-100 border border-gray-200 rounded-lg shadow-lg">
            <img className="rounded-t-lg w-full h-48 object-contain" src={imgUrl} alt={title} />
            <div className="p-4">
                <h5 className="text-center text-xl font-semibold text-gray-900 dark:text-black">{title}</h5>
                {
                    showDescription &&
                    <div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis line-clamp-2" title={description}>
                            {description}
                        </p>
                        <a href={siteUrl}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline">
                            More details
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                }
                
            </div>
        </div>
    </Col>
  );
};

/**
 * This is used in footer for the logo of soc-med platforms
 * **/
export const IconCard = ({link, icon, view}) => {
    return (
        <a
            href={link}
            target="_blank" rel="noopener noreferrer"
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