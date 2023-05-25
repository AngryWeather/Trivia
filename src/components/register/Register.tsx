import { FC, useState } from "react";

export const Register: FC = () => {
  const [email, setEmail] = useState<string>();

  return (
    <section id="register">
      <form>
        <label htmlFor="username">Username</label>
        <input type="text"></input>
        <label
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          htmlFor="email"
        >
          email
        </label>
        <input type="email"></input>
        <label htmlFor="password">password</label>
        <input type="password"></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
