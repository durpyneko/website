// Chakra Imports
import { Center, Grid, GridItem } from "@chakra-ui/react";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

// Components
import ProjectsBox from "@/components/ProjectsBox";
import Header from "@/components/Header";

export default function Projects() {
  const columnCounts = {
    base: 1, // On smaller screens
    sm: 1, // On small screens and above
    md: 2, // On medium screens and above
    lg: 3, // On large screens and above
  };
  return (
    <>
      <Header header="Projects" />
      <Center className={`${JetBrainsMono.className}`}>
        <Grid
          templateColumns={{
            base: `repeat(${columnCounts.base}, 1fr)`,
            sm: `repeat(${columnCounts.sm}, 1fr)`,
            md: `repeat(${columnCounts.md}, 1fr)`,
            lg: `repeat(${columnCounts.lg}, 1fr)`,
          }}
        >
          <GridItem>
            <ProjectsBox
              title={"Website"}
              href={"https://github.com/durpyneko/website"}
              github=""
              image={"/project_thumbnails/website.png"}
              description={"Personal website and portfolio"}
            />
          </GridItem>
          <GridItem>
            <ProjectsBox
              title={"neko logger"}
              href={"https://github.com/durpyneko/neko-logger"}
              github=""
              image={"/project_thumbnails/neko-logger.png"}
              description={"a custom javascript console logger"}
            />
          </GridItem>
          <GridItem>
            <ProjectsBox
              title={"loggy-neko"}
              href={"https://github.com/durpyneko/loggy-neko"}
              github=""
              image={"/project_thumbnails/loggy-banner.png"}
              description={"Thread-safe logging tool with dynamic log level configuration."}
            />
          </GridItem>
          <GridItem>
            <ProjectsBox
              title={"Kikuri web"}
              href={"https://kikuri.durpy.dev"}
              github="https://github.com/durpyneko/kikuri-web"
              image={"/project_thumbnails/kikuri-web.png"}
              description={"a website of / for Hiroi Kikuri"}
            />
          </GridItem>
          <GridItem>
            <ProjectsBox
              title={"imisssaru"}
              href={"https://imisssaru.vercel.app"}
              github={"https://github.com/durpyneko/imisssaru"}
              image={"/project_thumbnails/imisssaru.png"}
              description={"imisssaru inspired by imissfauna"}
            />
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}
