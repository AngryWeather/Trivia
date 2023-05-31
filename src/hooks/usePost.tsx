import { SyntheticEvent, useRef } from "react";

type Data = {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

export const usePost = ({ username, email, password }: Data) => {
  const response = useRef<number>();

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
    response.current = await request.status;
  }
  return { handleSubmit, response };
};
