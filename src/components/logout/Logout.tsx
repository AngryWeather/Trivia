import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const Logout = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    localStorage.clear();
    setCurrentUser(null);
    navigate("/");
  }, [navigate, setCurrentUser]);

  return <></>;
};
