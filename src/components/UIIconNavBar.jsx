import "../styles/layouts/UIIconNavBar.scss";
import { useRef } from "react";

export default function UIIconNavBar() {
  const animationRef = useRef();

  const animation = () => {
    animationRef.current.classList.toggle("open");
  };

  return (
    <div>
      <div class="icon nav-icon-5" ref={animationRef} onClick={animation}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
