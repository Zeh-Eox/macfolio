import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import TerminalWindow from "@/windows/Terminal";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import SafariWindow from "@/windows/Safari";
import ResumeWindow from "@/windows/Resume";
import FinderWindow from "@/windows/Finder";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <FinderWindow />
    </main>
  );
};

export default App;
