import { useRef, useEffect, useState } from "react";

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleScroll = () => {
    setTimeout(() => {
      projectsRef.current?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }, 400);
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 800);
  };

  useEffect(() => {
    if (isIntersecting) {
      disableScroll();
      handleScroll();
      enableScroll();
    }
  }, [isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entires) => {
        const entry = entires[0];
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );
    observer.observe(projectsRef.current!);
  }, []);

  return (
    <div ref={projectsRef} onClick={handleScroll} className="projects">
      <h2 className="projects__title">Here are some of my Projects</h2>
    </div>
  );
}
