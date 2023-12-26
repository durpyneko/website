// Chakra
import { Box, HStack } from "@chakra-ui/react";

// Components
import TechStackIcon from "./TechStackIcon";

export default function TechStack() {
  return (
    <Box mt={"5px"}>
      <HStack>
        <TechStackIcon icon="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
        <TechStackIcon icon="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
        <TechStackIcon icon="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
        <TechStackIcon icon="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white" />
        <TechStackIcon icon="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <TechStackIcon icon="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" />
        <TechStackIcon icon="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white" />
        <TechStackIcon icon="https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF" />
      </HStack>
    </Box>
  );
}
