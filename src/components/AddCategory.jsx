import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInpuntChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories((cat) => [inputValue, ...cat]);

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInpuntChange}
      />
    </form>
  );
};

export default AddCategory;
