import { SyntheticEvent, useState } from "react";

type Data = {
  email: string | undefined;
  password: string | undefined;
};

export const useLoginPost = ({ email, password }: Data) => {
  const [responseStatus, setResponseStatus] = useState<number>();
  const [responseBody, setResponseBody] = useState<any>();

  async function handleSubmit(e: SyntheticEvent): Promise<void> {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    setResponseStatus(response.status);
    try {
      setResponseBody(await response.json());
      console.log("LOGIN POST");
    } catch (error) {
      console.error(error);
    }
  }
  return { handleSubmit, responseStatus, responseBody };
};
