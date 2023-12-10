// Chakra Imports
import { Center, VStack } from "@chakra-ui/react";

// Components
import SocialsButton from "./SocialsButton";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

// Icons
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
            icon={""}
            href={"https://bsky.app/profile/durpy.assassin.dev"}
          />
          <SocialsButton icon={FaDiscord} href={"durpyneko"} />
          <SocialsButton
            icon={FaGithub}
            href={"https://github.com/durpyneko"}
          />
          <SocialsButton
            icon={SiAnilist}
            href={"https://anilist.co/user/durpyneko"}
          />
          <SocialsButton
            icon={FaSteam}
            href={"https://steamcommunity.com/id/durpyneko/"}
          />
        </VStack>
      </Center>
    </>
  );
}
