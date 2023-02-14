import "../styles/layouts/UIIconNavBar.scss";
import { useRef } from "react";

export default function UIIconNavBar() {
  const navRef = useRef();

  const animation = () => {
    navRef.current.classList.toggle("open");
  };

  return (
    <div>
      <div class="icon nav-icon-5" ref={navRef} onClick={animation}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
