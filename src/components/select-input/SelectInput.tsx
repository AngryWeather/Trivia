import { FC, useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
};

export const SelectInput: FC = () => {
  const [categories, setCategories] = useState<Array<Category>>();

  useEffect(() => {
    const fetchQuestionCategories = async () => {
      try {
        const response = await fetch("http://localhost:8080/trivia/categories");
        const categories = await response.json();
        // trivia_categories is inside an object
        setCategories(categories.trivia_categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestionCategories();
  }, []);

  return (
    <select name="categories" id="categories">
      {categories &&
        categories!.map((key) => (
          <option key={key.id} value={key.name}>
            {key.name}
          </option>
        ))}
    </select>
  );
};
