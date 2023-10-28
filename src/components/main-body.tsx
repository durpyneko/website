// Chakra
import { Text } from "@chakra-ui/react";

// Components
import HomeContent from "@/components/HomeContent";
import ProjectsContent from "@/components/ProjectsContent";
import SocialsContent from "@/components/SocialsContent";

export default function MainBody({ activeTab }: { activeTab: any }) {
  let content;

  switch (activeTab) {
    case "home":
      content = <HomeContent />;
      break;
    case "projects":
      content = <ProjectsContent />;
      break;
    case "socials":
      content = <SocialsContent />;
      break;
    default:
      content = (
        <Text>Nothing here to display. How did you even get here?</Text>
      );
  }
  return <>{content}</>;
}
