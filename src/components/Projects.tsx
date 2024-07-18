import CogniBrain from "./CogniBrain";
import MyBooks from "./MyBooks";
import Portfolio from "./Portfolio";
import ProjectTitle from "./ProjectTitle";

export default function Projects() {
  return (
    <div className="h-screen w-screen p-12 bg-gray-900 grid grid-cols-6 grid-rows-2">
      <ProjectTitle />
      <CogniBrain />
      <MyBooks />
      <Portfolio />
    </div>
  );
}
