import Name from "./intro/Name";
import Role from "./intro/Role";
import About from "./intro/About";
import Image from "./intro/Image";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro__title">
        <Name />
        <Role />
      </div>
      <div className="intro__about">
        <About />
        <Image />
      </div>
    </div>
  );
}
