import { SyntheticEvent } from "react";

type Data = {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

export const usePost = ({ username, email, password }: Data) => {
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
  return { handleSubmit };
};
