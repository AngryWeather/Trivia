<<<<<<< HEAD
import { FC, useEffect, useRef, useState } from "react";
import "./header.css";
import menu from "../../icons/menu-icon.svg";
import { PopUp } from "../pop-up/PopUp";
=======
import { FC, useContext, useEffect, useState } from "react";
import "./header.css";
import menu from "../../icons/menu-icon.svg";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { DisplayUsername } from "../display-username/Display-username";
>>>>>>> master

export const Header: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
<<<<<<< HEAD
  const mobileBreakpoint = useRef(1000);
=======
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.length !== 0) {
      setCurrentUser(JSON.parse(localStorage.getItem("user")!).username);
    }
  }, [currentUser, setCurrentUser]);
>>>>>>> master

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
<<<<<<< HEAD
        {mobileNavVisible && <PopUp></PopUp>}
=======
>>>>>>> master
      </header>
    );
  } else {
    return (
      <header>
        <h1>Trivia</h1>
        {currentUser ? (
          <DisplayUsername currentUser={currentUser}></DisplayUsername>
        ) : (
          <Link className="login" to="/user/login">
            Log In
          </Link>
        )}
      </header>
    );
  }
};
