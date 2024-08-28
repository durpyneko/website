// Chakra
import { Center, VStack } from "@chakra-ui/react";

// Components
import SocialsButton from "@/components/SocialsButton";
import Header from "@/components/Header";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

// Icons
import { FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAnilist } from "react-icons/si";
import { FaSteam } from "react-icons/fa";

export default function SocialsContent() {
  return (
    <>
      <Header header="Socials" />
      <Center className={`${JetBrainsMono.className}`} p={"20px"}>
        <VStack>
          <SocialsButton
            icon={FaTwitter}
            href={"https://twitter.com/durpyneko"}
          />
          <SocialsButton
            icon={FaYoutube}
            href={"https://www.youtube.com/@durpyneko"}
          />
          <SocialsButton
            icon={FaTwitch}
            href={"https://www.twitch.tv/durpyneko"}
          />
          <SocialsButton
            icon={FaGithub}
            href={"https://github.com/durpyneko"}
          />
          <SocialsButton
            icon={SiAnilist}
            href={"https://anilist.co/user/durpyneko"}
          />
        </VStack>
      </Center>
    </>
  );
}
