import "../styles/components/UIHero.scss";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="hero-text-present">Hi, i´m</p>
        <h2 className="hero-text-name">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 80,
              strings: [
                "Tomas Kuperman.",
                "Web developer.",
                "Tech Enthusiast.",
              ],
            }}
          />
        </h2>
        <p className="hero-text-paragraph">
          I am Tomas Kuperman, a web developer passionate about technology and
          learning more every day. If you are interested in my profile, do not
          hesitate to{" "}
          <a href="mailto:kuper7ph@gmail.com" className="contact-hero">
            contact me.
          </a>
        </p>
      </div>
    </div>
  );
}
