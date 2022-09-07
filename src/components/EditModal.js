import React, { useRef, useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

function EditModal({ id, getTodos }) {
  const [editedContent, setEditedContent] = useState("");
  const ref = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateTodo = (id, content) => {
    axios
      .put(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos/${id}`, {
        content: ref.current.textContent,
      })
      .then(() => {
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    updateTodo(id, ref.current.textContent);
  };
  console.log("im here");
  return (
    <>
      <button>
        <EditIcon onClick={onOpen} />
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={handleEdit} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditModal;
