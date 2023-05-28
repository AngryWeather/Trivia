import { FC, useEffect, useRef, useState } from "react";
import "./header.css";
import menu from "../../icons/menu-icon.svg";
import { PopUp } from "../pop-up/PopUp";

export const Header: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const mobileBreakpoint = useRef(1000);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  if (width < mobileBreakpoint.current) {
    return (
      <header>
        <h1>Trivia</h1>
        <img
          onClick={() => setMobileNavVisible(mobileNavVisible ? false : true)}
          src={menu}
          alt="hamburger menu"
          className="menu"
        />
        {mobileNavVisible && <PopUp></PopUp>}
      </header>
    );
  } else {
    return (
      <header>
        <h1>Trivia</h1>
      </header>
    );
  }
};
