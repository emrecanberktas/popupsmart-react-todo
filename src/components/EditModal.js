import React, { useRef } from "react";
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

function EditModal({ id, getTodos, isModalOpen }) {
  const ref = useRef();
  const { isOpen, onClose } = useDisclosure();

  // Update Todo
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
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input />
            apsldpalsd
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
