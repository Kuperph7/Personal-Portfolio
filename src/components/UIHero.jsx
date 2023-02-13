import "../styles/components/UIHero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="hero-text-present">Hi, mi name is</p>
        <h2 className="hero-text-name">Tomas Kuperman</h2>
        <p className="hero-text-paragraph">
          I am a web developer passionate about technology and learning more
          every day. If you are interested in my profile, do not hesitate to{" "}
          <a href="mailto:kuper7ph@gmail.com" className="contact-hero">
            contact me.
          </a>
        </p>
      </div>
    </div>
  );
}
