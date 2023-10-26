// React
import { useState } from "react";

// Components
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import MainBody from "@/components/main-body";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <>
      <Header />
      <main>
        <Navbar setActiveTab={setActiveTab} />
        <MainBody activeTab={activeTab} />
      </main>
    </>
  );
}
