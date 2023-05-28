import { FC, SyntheticEvent, useState } from "react";

export const Register: FC = () => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function handleSubmit(e: SyntheticEvent): Promise<void> {
    e.preventDefault();
    const request = await fetch("http://localhost:8080/user/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const response = await request.json();
    console.log(response);
  }

  return (
    <section id="register">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
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
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          type="password"
          id="password"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
