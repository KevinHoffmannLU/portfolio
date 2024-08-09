export default function Work() {
  return (
    <section className="w-[94vw] h-[75.5rem] 2k:h-[94.375rem] bg-[#10141f] mt-12 2k:mt-[8rem] flex items-center justify-center gap-[10rem] 2k:gap-[12.5rem] p-10 2k:p-[3.125rem] rounded-lg">
      <Project project={myBooks} />
      <Project project={ravenMap} />
      <Project project={portfolio} />
    </section>
  );
}

type TProject = {
  title: string;
  description: string;
  features?: string[];
  img: string;
  links: {
    page: string;
  };
  tech: string[];
};

function Project({ project }: { project: TProject }) {
  const imgSize = "w-[6rem] h-[6rem] 2k:w-[7.5rem] 2k:h-[7.5rem]";

  return (
    <section className="p-12 2k:p-[3.75rem] pb-0 flex flex-col items-center w-[70rem] 2k:2-[87.5rem] h-full bg-black/10">
      <h1 className="text-[4.5rem] 2k:text-[5.625rem] text-center">
        {project.title}
      </h1>
      <p className="text-[1.7rem] 2k:text-[2.125rem] mt-12 2k:mt-[3.75rem] w-full">
        {project.description}
      </p>
      {/* <div className="w-full flex gap-10 2k:gap-[3.125rem]">
        <p className="text-[1.5rem] 2k:text-[1.875rem] mt-5 2k:mt-[1.56rem]">
          {project.features ? "Features:" : ""}
        </p>
        <ul className="mt-5 text-[1.5rem] 2k:text-[1.875rem] list-disc">
          {project.features?.map((feature: string) => (
            <li className="">{feature}</li>
          ))}
        </ul>
      </div> */}
      <a
        href={project.links.page}
        target="_blank"
        className="mt-auto rounded-lg overflow-hidden border-[#000] border-[2px]"
      >
        <img
          src={project.img}
          alt="CogniBrain"
          className="object-cover w-[45rem] 2k:w-[56.25rem] h-[25rem] 2k:h-[31.25rem]"
        />
      </a>
      <section className="mt-auto flex justify-left gap-[3rem] 2k:gap-[3.75rem] w-full h-[8rem] 2k:h-[10rem]">
        {project.tech.map((tech: string) => (
          <img className={imgSize} src={tech} />
        ))}
      </section>
    </section>
  );
}

const myBooks = {
  title: "MyBooks",
  description:
    "MyBooks is a simple website made in vanilla JavaScript that helps me keep track of my book collection.",
  img: "/images/my-books.png",
  links: {
    page: "https://kevinhoffmannlu.github.io/MyBooks/",
  },
  tech: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  ],
};

const ravenMap = {
  title: "RavenMap",
  description:
    "Raven map is a webapp that allows users to capture, organize and work with all the information that passes them in their day to day lives, built in Next.js. It focuses on the interlinkedness of information and building systems to simplify life,  in a minimal and nice to use fashion.",
  img: "/images/raven-map.png",
  links: {
    page: "https://www.ravenmap.com/",
  },
  tech: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  ],
};

const portfolio = {
  title: "Portfolio",
  description:
    "A simple website made in React to introduce myself and show my work.",
  img: "/images/portfolio.png",
  links: {
    page: "https://hoffmannkevin.com/",
  },
  tech: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  ],
};
