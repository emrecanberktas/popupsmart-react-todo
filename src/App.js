import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TodoForm from "./components/TodoForm";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import EditModal from "./components/EditModal";
function App() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef();
  const getTodos = () => {
    axios
      .get(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos`)
      .then((res) => {
        setTodos(res.data);
        console.log(res.data);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);

  //Remove Todo
  const removeTodo = (id) => {
    axios
      .delete(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos/${id}`)
      .then((res) => {
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Add Todo
  const addTodo = (content) => {
    axios
      .post(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos`, {
        content,
        isCompleted: false,
      })
      .then((res) => {
        console.log(res.data);
        getTodos();
      });
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, id) => {
        return (
          <div style={{ display: "flex" }}>
            <div
              contentEditable
              ref={ref}
              key={id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {todo.content}
            </div>
            <button onClick={() => removeTodo(todo.id)}>
              {<DeleteIcon />}
            </button>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              {<EditIcon />}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
