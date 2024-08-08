export default function Work() {
  return (
    <section className="w-[94vw] h-[80vh] 2k:h-[85vh] bg-[#10141f] mt-12 flex items-center justify-center gap-[10rem] p-10 rounded-lg">
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
  const imgSize = "w-[6rem] h-[6rem]";

  return (
    <section className="p-12 pb-0 flex flex-col items-center w-[70rem] h-full bg-black/10">
      <h1 className="text-[4.5rem] text-center">{project.title}</h1>
      <p className="text-[1.7rem] mt-12 w-full">{project.description}</p>
      <div className="w-full flex gap-10">
        <p className="text-[1.5rem] mt-5">
          {project.features ? "Features:" : ""}
        </p>
        <ul className="mt-5 text-[1.5rem] list-disc">
          {project.features?.map((feature: string) => (
            <li className="">{feature}</li>
          ))}
        </ul>
      </div>
      <a
        href={project.links.page}
        target="_blank"
        className="mt-auto rounded-lg overflow-hidden"
      >
        <img
          src={project.img}
          alt="CogniBrain"
          className="object-cover w-[45rem] h-[25rem]"
        />
      </a>
      <section className="mt-auto flex justify-left gap-[3rem] w-full h-[8rem]">
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
  features: ["Search through books", "Switch between categories"],
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
    "MyBooks is a simple website made in vanilla JavaScript that helps me keep track of my book collection.",
  features: ["Search through books", "Switch between categories"],
  img: "/images/my-books.pn",
  links: {
    page: "https://kevinhoffmannlu.github.io/MyBooks/",
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
    "A simple website made in React to link to my socials and show my work.",
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
