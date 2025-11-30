import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import TerminalWindow from "@/windows/Terminal";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import SafariWindow from "@/windows/Safari";
import ResumeWindow from "@/windows/Resume";
import FinderWindow from "@/windows/Finder";
import TextWindow from "@/windows/Text";
import ImageWindow from "@/windows/Image";
import ContactWindow from "@/windows/Contact";

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
      <TextWindow />
      <ImageWindow />
      <ContactWindow />
    </main>
  );
};

export default App;
