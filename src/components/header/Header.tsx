import { FC, useContext, useEffect, useState } from "react";
import "./header.css";
import menu from "../../icons/menu-icon.svg";
import { UserContext } from "../../contexts/UserContext";
import { NavBar } from "../nav-bar/NavBar";
import { PopUp } from "../pop-up/PopUp";

export const Header: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.length !== 0) {
      setCurrentUser(JSON.parse(localStorage.getItem("user")!).username);
    }
  }, [currentUser, setCurrentUser]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  if (width < 1000) {
    return (
      <header>
        <a href="/trivia">
          <h1>Trivia</h1>
        </a>
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
        <a href="/trivia">
          <h1>Trivia</h1>
        </a>
        <NavBar currentUser={currentUser}></NavBar>
      </header>
    );
  }
};
