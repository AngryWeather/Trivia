import { SyntheticEvent, useState } from "react";

type Data = {
  username: string;
  score: number;
};

export const useScorePost = ({ username, score }: Data) => {
  const [responseStatus, setResponseStatus] = useState<number>();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/trivia/score", {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        score,
      }),
    });
    setResponseStatus(response.status);
  }

  return { handleSubmit, responseStatus };
};
