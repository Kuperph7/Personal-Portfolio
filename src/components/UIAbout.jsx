import "../styles/components/UIAbout.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about-text">
        <h2 className="about-text-name">About</h2>
        <p className="about-text-paragraph">
          Hi, I'm Tomas Kuperman, I'm a full stack web developer specialized in
          frontend. I started learning about web programming a few years ago
          starting with HTML, CSS and JavaScript. <br /> <br />
          Nowadays I work as a freelancer, but I'm interested in getting a
          permanent job so I can work with people who can increase my skills and
          experience, and also to whom I can teach something.
        </p>

        <p>Technologies that I manage: </p>
        <div className="about-skills">
          <ul>
            <li>JavaScript</li>
            <li>React.JS</li>
            <li>Next.JS</li>
            <li>Typescript</li>
            <li>Node.JS</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <div className="about-img">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/881fc9163697977.63ea763a03906.jpeg"
          alt="ERR"
        />
      </div>
    </div>
  );
}
