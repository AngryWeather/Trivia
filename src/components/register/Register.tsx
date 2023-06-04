import { FC, useEffect, useState } from "react";
import "../../form.css";
import { usePost } from "../../hooks/usePost";
import { useNavigate } from "react-router-dom";

export const Register: FC = () => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [userExistsError, setUserExists] = useState<string>();
  const [emailExistsError, setEmailExists] = useState<string>();
  const { handleSubmit, responseStatus, responseBody } = usePost({
    username,
    email,
    password,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (responseBody !== undefined) {
      if (
        responseStatus === 400 &&
        responseBody.error === "user and email already exist"
      ) {
        setUserExists("user already exists");
        setEmailExists("user with his email already exists");
      }
      if (
        responseStatus === 400 &&
        responseBody.error === "user already exists"
      ) {
        setUserExists("user already exists");
        setEmailExists(undefined);
      } else if (
        responseStatus === 400 &&
        responseBody.error === "user with this email already exists"
      ) {
        setEmailExists("user with this email already exists");
        setUserExists(undefined);
      }
    }
    if (responseStatus === 200) {
      navigate("/user/login");
    }
  }, [responseStatus, responseBody, navigate]);

  return (
    <div className="form" id="register">
      <form aria-label="form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <sup>
            <span className="required">*</span>
          </sup>
        </label>
        <div className="line"></div>
        <input
          onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
          id="username"
          type="text"
          required
        ></input>
        {userExistsError && <p className="error">{userExistsError}</p>}
        <label htmlFor="email">
          Email<span className="required">*</span>
        </label>
        <div className="line"></div>
        <input
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          type="email"
          id="email"
          required
        ></input>
        {emailExistsError && <p className="error">{emailExistsError}</p>}
        <label htmlFor="password">
          Password<span className="required">*</span>
        </label>
        <div className="line"></div>
        <input
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          type="password"
          id="password"
          minLength={6}
          required
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
