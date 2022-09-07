import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TodoForm from "./components/TodoForm";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import EditModal from "./components/EditModal";
import { Heading, Flex, Spacer } from "@chakra-ui/react";
import DarkModeButton from "./components/DarkModeButton";
import UserName from "./components/UserName";
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

  const openModal = () => {
    setIsModalOpen(true);
  };

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
        getTodos();
      });
  };

  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="5">
        <Heading as="h2">Popupsmart</Heading>
        <Spacer />
        <UserName />
        <DarkModeButton />
      </Flex>

      <TodoForm addTodo={addTodo} />
      <br />
      {todos.map((todo, id) => {
        return (
          <div
            key={id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div ref={ref} key={id}>
              {todo.content}
            </div>
            <button onClick={() => removeTodo(todo.id)}>
              {<DeleteIcon w={5} h={5} />}
            </button>
            <EditModal />
          </div>
        );
      })}
    </div>
  );
}

export default App;
