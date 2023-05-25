import { FC, useState } from "react";

export const Register: FC = () => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <section id="register">
      <form>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => (e.target as HTMLInputElement).value}
          id="username"
          type="text"
        ></input>
        <label htmlFor="email">email</label>
        <input
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          type="email"
          id="email"
        ></input>
        <label htmlFor="password">password</label>
        <input
          onChange={(e) => (e.target as HTMLInputElement).value}
          type="password"
          id="password"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
