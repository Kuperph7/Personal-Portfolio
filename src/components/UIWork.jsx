import "../styles/components/UIWork.scss";
import UIWorkContent from "./UIWork-Content";
import AOS from "aos";
import { useEffect } from "react";

export default function UIWork() {
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
    <div className="work" id="work" data-aos="fade-up">
      <div className="work-text">
        <h2 className="work-text-name">Work</h2>
        <div className="work-content">
          <UIWorkContent
            name="Web developer portfolio"
            description="A portfolio for a senior web developer using technologies such as
        Next.Js, Typescript, Sass, Kontent(CMS), JQuery and others."
            url="https://mataias.dev"
            img="https://mir-s3-cdn-cf.behance.net/project_modules/fs/76557e163698357.63ea775231dc1.png"
          />
          <UIWorkContent
            name="Landing page for a dental center"
            description="A landing page for a dental center. Project based on react"
            url="https://mk-odontologia-integral-hblkfd0kz-kuperph7.vercel.app/"
            img="https://mir-s3-cdn-cf.behance.net/project_modules/fs/97df30163700595.63ea7e2476801.png"
          />
          <UIWorkContent
            name="Giff search engine"
            description="A giff search engine that returns any giff you want to search for in the search engine."
            url="https://giffy-rbfzxuy4z-kuperph7.vercel.app"
            img="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2a0fef163700839.63ea7ef89e7d3.png"
          />
        </div>
      </div>
    </div>
  );
}
