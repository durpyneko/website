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
      content = null;
  }
  return <>{content}</>;
}
