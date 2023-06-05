import { FC, useEffect, useState } from "react";
import { useLoginPost } from "../../hooks/useLoginPost";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { handleSubmit, responseStatus, responseBody } = useLoginPost({
    email,
    password,
  });
  const [incorrectEmail, setIncorrectEmail] = useState<string>();
  const [incorrectPassword, setIncorrectPassword] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    if (responseBody !== undefined) {
      if (responseStatus === 200) {
        navigate("/");
      } else if (responseBody.error === "Email is incorrect") {
        setIncorrectEmail(responseBody.error);
      } else if (responseBody.error === "Incorrect password") {
        setIncorrectPassword(responseBody.error);
      }
    }
  }, [responseStatus, responseBody, navigate]);

  return (
    <div className="form" id="login">
      <form onSubmit={handleSubmit} aria-label="form" action="">
        <label htmlFor="email-login">Email</label>
        <div className="line"></div>
        <input
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          type="email"
          name="email-login"
          id="email-login"
          required
        />
        {incorrectEmail && <p className="error">{incorrectEmail}</p>}
        <label htmlFor="password-login">Password</label>
        <div className="line"></div>
        <input
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          type="password"
          name="password-login"
          id="password-login"
          required
        />
        {incorrectPassword && <p className="error">{incorrectPassword}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
