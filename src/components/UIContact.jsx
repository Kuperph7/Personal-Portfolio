import "../styles/components/UIContact.scss";
import { UIButton } from "./UIButton";

export default function UIContact() {
  return (
    <div className="contact">
      <h2 className="contact-text-name">Get in touch</h2>
      <p className="contact-text-paragraph">
        I am currently active in a job search. If you are interested in my
        profile, do not hesitate to contact me. Best regards
      </p>
      <div className="contact-button">
        <UIButton name="Contact me" url="/" />
      </div>
    </div>
  );
}
