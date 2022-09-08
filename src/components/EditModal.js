import React, { useState } from "react";
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
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

function EditModal({ id, getTodos }) {
  const [editedContent, setEditedContent] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateTodo = (id, content) => {
    axios
      .put(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos/${id}`, {
        content: content,
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
  };

  // get modal input value
  const handleInput = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <>
      <button>
        <EditIcon onClick={onOpen} />
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <FormControl>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input type="text" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditModal;
