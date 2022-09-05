import React from "react";
import { useColorMode, Button } from "@chakra-ui/react";

function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </div>
  );
}

export default DarkModeButton;
