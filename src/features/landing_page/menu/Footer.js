import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import logo from "../../../assets/img/jcp logo.png";
import { IconCard } from "../../../components/Card";

export const Footer = () => {
  return (
      <footer className="bg-sky-30 rounded-lg m-4">
          <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8">
              <div className="sm:flex sm:items-center justify-center">
                  <div className="flex flex-col w-50">
                    <span className="flex justify-center">
                        <img src={logo} alt="Logo" className="object-scale-down h-20 w-20"/>
                    </span>
                      <div className="flex justify-center items-center space-x-1">
                        {/* Facebook link */}
                          <IconCard link="https://www.facebook.com/jccpesquera/"
                                    icon="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    view="0 0 8 19"/>
                        {/* LinkedIn link */}
                          {/* <IconCard link="https://www.linkedin.com/in/john-christopher-pesquera-948049230/"
                                    icon="M19 0H5C3.9 0 3 0.9 3 2v20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-11 18h-3v-9h3v9zm-1.5-10.5c-.9 0-1.5-.7-1.5-1.5S6.6 4.5 7.5 4.5 9 5.2 9 6s-.7 1.5-1.5 1.5zm12.5 10.5h-3v-4.5c0-1.1-.9-1.5-1.5-1.5s-1.5.4-1.5 1.5v4.5h-3v-9h3v1.2c.4-.6 1.1-1.2 2.2-1.2 1.7 0 3 1.3 3 3v6.8z"
                                    view="1 1 20 20"/> */}
                        {/* X link */}
                          <IconCard link="https://x.com/jeyxxi22"
                                    icon="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                                    view="0 0 20 20"/>
                        {/* Github link */}
                          <IconCard link="https://github.com/XceedGone"
                                    icon="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    view="0 0 20 20" />
                      </div>
                      <hr/>
                      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 JCP. All Rights Reserved.</span>
                  </div>
              </div>
          </div>
      </footer>
  );
};
