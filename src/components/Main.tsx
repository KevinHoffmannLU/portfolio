import Intro from "./Intro";
import Links from "./Links";
import Skills from "./Skills";

export default function Main() {
  return (
    <main className="bg-[#10141f] h-screen w-screen flex flex-col items-center justify-center">
      <Intro />
      <Skills />
      <Links />
    </main>
  );
}
