import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  MobileIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { useToast } from "../ui/use-toast";

export default function Links() {
  const { toast } = useToast();
  const linkStyle =
    "w-[15rem] text-center cursor-pointer transition-all-[0.3s] flex justify-center items-center hover:bg-[#202e37]";
  const iconSize =
    "w-[2.5rem] 1.5k:w-[3.2rem] 2k:w-[4rem] h-[2.5rem] 1.5k:h-[3.2rem] 2k:h-[4rem]";

  return (
    <section className="flex justify-center bg-[#151d28] w-[20rem] 1.5k:w-[20vw] 2k:w-[20vw] h-[6rem] border-t-[0.3rem] border-bg-body border-solid border-[#10141f]">
      <a
        className={linkStyle}
        href="https://www.linkedin.com/in/kevinhoffmannlu/"
        target="_blank"
      >
        <LinkedInLogoIcon className={iconSize} />
      </a>
      <a
        className={linkStyle}
        href="https://github.com/KevinHoffmannLU"
        target="_blank"
      >
        <GitHubLogoIcon className={iconSize} />
      </a>

      <button
        className={linkStyle}
        onClick={() => {
          navigator.clipboard.writeText("+352 691 924 533");
          toast({
            title: "Phone Number copied to clipboard",
            variant: "custom",
            duration: 1500,
          });
        }}
      >
        <MobileIcon className={iconSize} />
      </button>
      <button
        className={linkStyle}
        onClick={() => {
          navigator.clipboard.writeText("contact@hoffmannkevin.com");
          toast({
            title: "Email copied to clipboard",
            variant: "custom",
            duration: 1500,
          });
        }}
      >
        <EnvelopeClosedIcon className={iconSize} />
      </button>
    </section>
  );
}
