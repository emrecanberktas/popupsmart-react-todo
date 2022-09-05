import React, { useState } from "react";
import { Input, Flex, Spacer } from "@chakra-ui/react";

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
    <Flex justifyContent="center" alignItems="center">
      <div>
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
    </Flex>
  );
}

export default TodoForm;
