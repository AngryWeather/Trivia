import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
};

type PropsType = {
  setCategory: React.ChangeEventHandler<HTMLSelectElement>;
};

export const SelectInput = (props: PropsType) => {
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
    <select onChange={props.setCategory} name="categories" id="categories">
      <option value="Any category">Any category</option>
      {categories &&
        categories!.map((key) => (
          <option key={key.id} value={key.name}>
            {key.name}
          </option>
        ))}
    </select>
  );
};
