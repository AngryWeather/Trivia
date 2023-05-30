import { FC, useState } from "react";
import "./register.css";
import { usePost } from "../../hooks/usePost";

export const Register: FC = () => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { handleSubmit } = usePost({ username, email, password });

  return (
    <div className="form" id="register">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <div className="line"></div>
        <input
          onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
          id="username"
          type="text"
          required
        ></input>
        <label htmlFor="email">Email</label>
        <div className="line"></div>
        <input
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          type="email"
          id="email"
          required
        ></input>
        <label htmlFor="password">Password</label>
        <div className="line"></div>
        <input
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          type="password"
          id="password"
          minLength={6}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
