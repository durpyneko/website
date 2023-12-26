// Chakra
import { Box, Image } from "@chakra-ui/react";

// Interface
interface TechStackIconProps {
  icon: string;
}

export default function TechStackIcon({ icon }: TechStackIconProps) {
  return (
    <Box>
      <Image src={icon} />
    </Box>
  );
}
