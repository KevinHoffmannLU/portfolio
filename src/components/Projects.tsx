import CogniBrain from "./CogniBrain";
import MyBooks from "./MyBooks";
import Portfolio from "./Portfolio";
import ProjectTitle from "./ProjectTitle";

export default function Projects() {
  return (
    <div className="h-[90rem] w-screen p-[5rem] bg-gray-900 grid grid-cols-6 grid-rows-2 gap-3">
      <ProjectTitle />
      <CogniBrain />
      <MyBooks />
      <Portfolio />
    </div>
  );
}
