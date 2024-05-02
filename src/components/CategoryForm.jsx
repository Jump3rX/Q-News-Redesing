import Card from "./Card";
import { useState } from "react";
import GetNews from "./GetNews";
const CategoryForm = () => {
  const [category, setCategory] = useState("Top");

  const getCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="category-form">
        <select className="form-select" value={category} onChange={getCategory}>
          <option disabled>Select a New Category</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="environment">Environment</option>
          <option value="food">Food</option>
          <option value="health">Health</option>
          <option value="politics">Politics</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Tech</option>
          <option value="world">World</option>
        </select>
      </div>
      {category && <GetNews category={category} />}
    </>
  );
};

export default CategoryForm;
