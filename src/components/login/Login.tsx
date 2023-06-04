import { FC, useState } from "react";

export const Login: FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className="form" id="login">
      <form aria-label="form" action="">
        <label htmlFor="email-login">Email</label>
        <div className="line"></div>
        <input type="email" name="email-login" id="email-login" />
        <label htmlFor="password-login">Password</label>
        <div className="line"></div>
        <input type="password" name="password-login" id="password-login" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
