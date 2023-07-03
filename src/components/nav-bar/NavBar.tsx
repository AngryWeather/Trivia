import { Link } from "react-router-dom";
import "./nav-bar.css";
import { DisplayUsername } from "../display-username/Display-username";

type UsernameProp = {
  currentUser?: any;
};

export const NavBar = (props: UsernameProp) => {
  return (
    <nav>
      <ul>
        <li>
          {props.currentUser ? (
            <DisplayUsername currentUser={props.currentUser}></DisplayUsername>
          ) : (
            <>
              <Link className="login" to="/user/login">
                Log In
              </Link>
            </>
          )}
        </li>
        <li>
          <Link to="/user/register">Register</Link>
        </li>
        {localStorage.length >= 1 && (
          <li>
            <Link to="/user/logout">Logout</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
