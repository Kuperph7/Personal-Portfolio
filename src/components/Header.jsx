import React, { useEffect, useRef, useState } from "react";
import "../styles/layouts/UIHeader.scss";
import { UIButton } from "./UIButton";
import UIIconNavBar from "./UIIconNavBar";

export default function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <div className="header" id="home">
        <div className="header-logo">
          <h2>K</h2>
        </div>
        <nav className="header-nav">
          <ul ref={navRef}>
            <li>
              <a href="#about" className="home" ref={navRef}>
                About
              </a>
            </li>
            <li>
              <a href="#work" className="menu" ref={navRef}>
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="menu" ref={navRef}>
                Contact
              </a>
            </li>
            <UIButton
              name="Resume / CV"
              url="https://media.licdn.com/dms/image/C4D2DAQGRhGSecdcLMw/profile-treasury-document-images_1280/1/1670339059165?e=1677110400&v=beta&t=658XNOyJ3cLD_Hk6u-x1Hr8NrcXa-dzq8ReMF2JFr5k"
            />
          </ul>
        </nav>
        <div className="burguer" onClick={showNavBar}>
          <UIIconNavBar />
        </div>
      </div>
    </div>
  );
}
