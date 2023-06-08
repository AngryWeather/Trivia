import { FC, useContext, useEffect, useState } from "react";
import "./header.css";
import menu from "../../icons/menu-icon.svg";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { DisplayUsername } from "../display-username/Display-username";

export const Header: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.length !== 0) {
      setCurrentUser(JSON.parse(localStorage.getItem("user")!).username);
    }
    // console.log(currentUser);
    // console.log(typeof currentUser);
  }, [currentUser, setCurrentUser]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  if (width < 1000) {
    return (
      <header>
        <h1>Trivia</h1>
        <img
          onClick={() => setMobileNavVisible(mobileNavVisible ? false : true)}
          src={menu}
          alt="hamburger menu"
          className="menu"
        />
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
