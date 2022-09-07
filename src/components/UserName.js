import React, { useState, useEffect, useRef } from "react";
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

function UserName() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });
  const onSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    onClose();
  };
  const onChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);
  return (
    <>
      <Button onClick={onOpen}>
        {name !== "" ? name : "Lütfen İsminizi Girin"}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lütfen İsminizi Girin</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={onChange} placeholder={name} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Kapat
            </Button>
            <Button variant="ghost" onSubmit={onSubmit} onClick={onClose}>
              Uygula
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserName;
