import Intro from "./main/Intro";
import Links from "./main/Links";
import Skills from "./main/Skills";

export default function Main() {
  return (
    <main className="bg-[#10141f] h-screen w-screen flex flex-col items-center justify-center">
      <Intro />
      <Skills />
      <Links />
    </main>
  );
}
