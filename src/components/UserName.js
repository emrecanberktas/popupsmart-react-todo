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
  FormLabel,
} from "@chakra-ui/react";

function UserName() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    onClose();
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
          <FormLabel>
            <ModalHeader>Lütfen İsminizi Girin</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input onChange={onChange} placeholder={name} type="text" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Uygula
              </Button>
              <Button variant="ghost" onClick={onClose} onSubmit={onSubmit}>
                Kapat
              </Button>
            </ModalFooter>
          </FormLabel>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserName;
