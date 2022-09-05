import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Add Todo..."
          minLength="3"
        />
      </form>
    </div>
  );
}

export default TodoForm;
