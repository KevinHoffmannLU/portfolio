import { useState } from "react";
import ViewButtons from "./ViewButtons";
import About from "./About";
import Work from "./Work";

type TView = "work" | "about";

export default function Projects() {
  const [view, setView] = useState<TView>("work");

  return (
    <div className="h-screen w-screen bg-[#151d28] flex flex-col items-center">
      <ViewButtons view={view} setView={setView} />
      {view === "work" ? <Work /> : <About />}
    </div>
  );
}
