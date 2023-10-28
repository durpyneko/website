// Chakra Imports
import { Center, VStack } from "@chakra-ui/react";

// Components
import SocialsButton from "./SocialsButton";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

// Icons
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAnilist } from "react-icons/si";
import { FaSteam } from "react-icons/fa";

export default function SocialsContent() {
  return (
    <>
      <Center className={`${JetBrainsMono.className}`} p={"40px"}>
        <VStack>
          <SocialsButton
            title={"Twitter"}
            icon={FaTwitter}
            href={"https://twitter.com"}
          />
          <SocialsButton
            title={"durpyneko"}
            icon={FaDiscord}
            href={"https://discord.com"}
          />
          <SocialsButton
            title={"durpyneko"}
            icon={FaGithub}
            href={"https://github.com/durpyneko"}
          />
          <SocialsButton
            title={"durpyneko"}
            icon={SiAnilist}
            href={"https://anilist.co/user/durpyneko"}
          />
          <SocialsButton
            title={"durpyneko"}
            icon={FaSteam}
            href={"https://steamcommunity.com/id/durpyneko/"}
          />
        </VStack>
      </Center>
    </>
  );
}
