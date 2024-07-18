import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  MobileIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export default function Links() {
  const linkStyle =
    "w-[15rem] text-center cursor-pointer transition-all-[0.3s] flex justify-center items-center hover:bg-[#202e37]";

  return (
    <section className="flex justify-center bg-[#151d28] w-[20vw] h-[6rem] border-t-[0.3rem] border-bg-body border-solid border-[#10141f]">
      <a
        className={linkStyle}
        href="https://www.linkedin.com/in/kevinhoffmannlu/"
        target="_blank"
      >
        <LinkedInLogoIcon className="w-[4rem] h-[4rem]" />
      </a>
      <a
        className={linkStyle}
        href="https://github.com/KevinHoffmannLU"
        target="_blank"
      >
        <GitHubLogoIcon className="w-[4rem] h-[4rem]" />
      </a>

      <button className={linkStyle}>
        <MobileIcon className="w-[4rem] h-[4rem]" />
      </button>
      <button className={linkStyle}>
        <EnvelopeClosedIcon className="w-[4rem] h-[4rem]" />
      </button>
    </section>
  );
}
