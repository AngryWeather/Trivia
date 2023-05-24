import { FC, useEffect, useState } from "react";
import "./header.css";
import menu from "../../icons/menu-icon.svg";

export const Header: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  if (width < 1000) {
    return (
      <header>
        <h1>Trivia</h1>
        <img onClick={() => setMobileNavVisible(true ? false : true)}
          src={menu} alt="hamburger menu" className="menu" />
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
