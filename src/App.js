import axios from "axios";
import uniqid from "uniqid";
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://6310743a826b98071a41c837.mockapi.io/todos")
      .then((res) => {
        setTodos(res.data);
        console.log(res.data);
      });
  }, []);

  //Remove Todo
  const removeTodo = (id) => {
    axios
      .delete(`https://6310743a826b98071a41c837.mockapi.io/todos/:${id}`)
      .then((res) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Add Todo
  const addTodo = (content) => {
    axios
      .post("https://6310743a826b98071a41c837.mockapi.io/todos", {
        content: content,
        id: uniqid(),
        isCompleted: false,
      })
      .then((res) => {
        setTodos([...todos, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Update Todo
  const UpdateTodo = (id, content) => {
    axios
      .put(`https://6310743a826b98071a41c837.mockapi.io/todos/:${id}`, {
        content: content,
      })
      .then((res) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, content: content } : todo
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input type="text" placeholder="isminiz" />
      {todos.map((todo, id) => {
        return <div key={id}>{todo.content}</div>;
      })}
    </div>
  );
}

export default App;
