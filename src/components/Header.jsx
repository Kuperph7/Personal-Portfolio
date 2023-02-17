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
              <a href="#about" className="home" onClick={showNavBar}>
                About
              </a>
            </li>
            <li>
              <a href="#work" className="menu" onClick={showNavBar}>
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="menu" onClick={showNavBar}>
                Contact
              </a>
            </li>
            <UIButton
              name="Resume / CV"
              url="https://media.licdn.com/dms/image/C4D2DAQEhpicknATbDA/profile-treasury-document-images_800/1/1676659423046?e=1677715200&v=beta&t=sMgw09Dz9Hp3A_wU662Zu52QJvRf2pn5A9LKx81pq0o"
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
