import axios from "axios";
import uniqid from "uniqid";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos`)
      .then((res) => {
        setTodos(res.data);
        console.log(res.data);
      });
  }, []);

  //Remove Todo
  const removeTodo = (id) => {
    axios
      .delete(
        `https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos/:${id}`
      )
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
      .post(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos`, {
        content: content,
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
      .put(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos/:${id}`, {
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
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, id) => {
        return <div key={id}>{todo.content}</div>;
      })}
    </div>
  );
}

export default App;
