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

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos/${id}`, {
        content: editedContent,
      })
      .then(() => {
        getTodos();
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <form onSubmit={onSubmit}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input type="text" value={editedContent} onChange={handleInput} />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Kapat
              </Button>
              <Button type="submit">Güncelle</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditModal;
