import { SyntheticEvent, useEffect, useState } from "react";

type Data = {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

export const usePost = ({ username, email, password }: Data) => {
  const [responseStatus, setResponseStatus] = useState<number>();
  const [responseBody, setResponseBody] = useState<any>();

  // useEffect(() => {
  //    setResponseStatus(responseStatus);
  //    if (responseStatus !== 200) {

  //    }
  // }, [responseStatus, responseBody])

  async function handleSubmit(e: SyntheticEvent): Promise<void> {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/user/register", {
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
    setResponseStatus(response.status);
    try {
      setResponseBody(await response.json());
    } catch (error) {
      console.error(error);
    }
  }
  return { handleSubmit, responseStatus, responseBody };
};
