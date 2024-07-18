import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Main />

      <Toaster />

      <Projects />

      <Contact />
    </>
  );
}

export default App;
