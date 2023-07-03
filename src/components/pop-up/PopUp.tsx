import { FC, useContext } from "react";
import { NavBar } from "../nav-bar/NavBar";
import { UserContext } from "../../contexts/UserContext";

export const PopUp: FC = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <NavBar currentUser={currentUser}></NavBar>
    </>
  );
};
