export default function Portfolio() {
  return (
    <section className="col-start-4 col-end-7 row-start-2 row-end-3 bg-black/10 p-12 relative flex flex-col">
      <h1 className="text-[5rem] mb-5">Portfolio</h1>
      <p className="text-[2rem] w-[35rem]">
        This is my portfolio website, built using React and Tailwind CSS. It
        showcases my personal projects, skills, and experience.
      </p>
      <div className="mt-auto flex h-[5rem] w-[8rem]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
      </div>
      <a
        href="/"
        target="_blank"
        className="1k:h-[20rem] 1k:w-[40rem] 2k:h-[25rem] 2k:w-[50rem] 2.4k:w-[60rem] 2.4k:h-[30rem] rounded-lg absolute top-[12%] right-12 overflow-hidden"
      >
        <img
          src="/images/portfolio.png"
          alt="Portfolio"
          className=" object-cover "
        />
      </a>
    </section>
  );
}

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />;
