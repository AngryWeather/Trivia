import { FC } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";

export const NavBar: FC = () => {
  return (
    <nav>
      <Link to="/user/register">Register</Link>
    </nav>
  );
};
