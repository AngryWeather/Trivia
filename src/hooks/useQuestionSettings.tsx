import { SyntheticEvent, useState } from "react";

type BodyType = {
  numOfQuestions: string;
  category: string | undefined;
  difficulty: string | undefined;
  type: string | undefined;
};

export const useQuestionSettings = ({
  numOfQuestions,
  category,
  difficulty,
  type,
}: BodyType) => {
  const [responseStatus, setResponseStatus] = useState<number>();
  const [responseBody, setResponseBody] = useState();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (category === "Any category") {
      category = undefined;
    }

    if (difficulty === "any") difficulty = undefined;
    if (type === "any") type = undefined;

    try {
      const response = await fetch("http://localhost:8080/trivia/data", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")!).token,
        },
        body: JSON.stringify({
          numOfQuestions,
          category,
          difficulty,
          type,
        }),
      });
      setResponseStatus(response.status);
      setResponseBody(await response.json());
    } catch (error) {
      console.error(error);
    }
  };
  return { handleSubmit, responseStatus, responseBody };
};
