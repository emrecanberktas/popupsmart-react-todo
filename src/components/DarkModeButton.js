import React from "react";
import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Button onClick={toggleColorMode} colorScheme="teal" m="10px">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
}

export default DarkModeButton;
