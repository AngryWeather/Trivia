import { FC, useEffect, useState } from "react";

export const SelectInput: FC = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  useEffect(() => {
    const fetchQuestionCategories = async () => {
      try {
        const response = await fetch("http://localhost:8080/trivia/categories");
        const categories = await response.json();
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestionCategories();
  }, []);

  return <div></div>;
};
