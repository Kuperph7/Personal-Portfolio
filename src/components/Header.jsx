import React from "react";
import "../styles/layouts/UIHeader.scss";
import { UIButton } from "./UIButton";

export default function Header() {
  return (
    <div>
      <div className="header" id="home">
        <div className="header-logo">
          <h2>K</h2>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="#home" className="home">
                About
              </a>
            </li>
            <li>
              <a href="#servicios" className="relleno">
                Work
              </a>
            </li>
            <li>
              <a href="#acerca" className="relleno">
                Contact
              </a>
            </li>
            <UIButton
              name="Resume / CV"
              url="https://media.licdn.com/dms/image/C4D2DAQGRhGSecdcLMw/profile-treasury-document-images_1280/1/1670339059165?e=1677110400&v=beta&t=658XNOyJ3cLD_Hk6u-x1Hr8NrcXa-dzq8ReMF2JFr5k"
            />
          </ul>
        </nav>
      </div>
    </div>
  );
}
