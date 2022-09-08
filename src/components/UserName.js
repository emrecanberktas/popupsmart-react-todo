import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";

const getName = () => {
  return localStorage.getItem("name") || "";
};

function UserName() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(getName);
  const [displayName, setDisplayName] = useState(getName);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    setDisplayName(name);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>
        {displayName !== "" ? displayName : "Lütfen İsminizi Girin"}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={onSubmit}>
            <ModalHeader>Lütfen İsminizi Girin</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input onChange={onChange} placeholder={name} type="text" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Uygula
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Kapat
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserName;
