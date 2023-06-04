import { FC, useState } from "react";
import { useLoginPost } from "../../hooks/useLoginPost";

export const Login: FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { handleSubmit, responseStatus, responseBody } = useLoginPost({
    email,
    password,
  });

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
        />
        <label htmlFor="password-login">Password</label>
        <div className="line"></div>
        <input
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          type="password"
          name="password-login"
          id="password-login"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
