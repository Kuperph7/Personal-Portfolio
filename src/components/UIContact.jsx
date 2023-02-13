import "../styles/components/UIContact.scss";
import { useEffect } from "react";
import { UIButton } from "./UIButton";
import AOS from "aos";

export default function UIContact() {
  const handleScroll = function () {
    AOS.init({ duration: 2000 });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="contact" id="contact" data-aos="fade-up">
      <h2 className="contact-text-name">Get in touch</h2>
      <p className="contact-text-paragraph">
        I am currently active in a job search. If you are interested in my
        profile, do not hesitate to contact me. Best regards
      </p>
      <div className="contact-button">
        <UIButton name="Contact me" url="mailto:kuper7ph@gmail.com" />
      </div>
    </div>
  );
}
