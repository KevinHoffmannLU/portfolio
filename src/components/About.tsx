import { toast } from "./ui/use-toast";

export default function About() {
  return (
    <section className="w-[94vw] h-[75.5rem] 2k:h-[94.375rem] bg-[#10141f] mt-12 2k:mt-[8rem] p-12 2k:p-[3.75rem] px-[20rem] 2k:px-[25rem] flex flex-col text-[2rem] 2k:text-[2.5rem]">
      <h1 className="text-[4.5rem] 2k:text-[5.6rem] text-center">About Me</h1>
      <p className="mt-12 2k:mt-[3.75rem] w-full text-center">
        I have always liked the idea of being a programmer some day and still
        fondly remember coding my first batch script when I was 8 years old.
        Although I never did really pursue the skill, it always lingered in the
        back of my mind.
      </p>
      <p className="mt-12 2k:mt-[3.75rem] w-full text-center">
        Later in life, while working as a fast food worker, I decided to try out
        CS50x while on my annual leave and I realized that Software Developement
        was something I wanted to pursue more seriously. So a couple of months
        later I handed in my resignation and dived straight into teaching my
        self all I could about the craft.
      </p>
      <p className="mt-12 2k:mt-[3.75rem] w-full text-center">
        I now understand the basics of computer science and have a grasp of how
        to write clean and efficient code. As I continue my journey to mastery I
        am now looking for oppertunities to work together with orthers, to
        contribute and learn as much as possible.
      </p>
      <section className="mt-[10rem] 2k:mt-[12.5rem] w-full flex flex-col items-center">
        <p className="mb-3">
          If you are interested in working together, please feel free to contact
          me:
        </p>
        <button
          className="px-4 2k:px-[1.25rem] py-2 2k:py-[0.625rem] hover:bg-[#ffffff10]"
          onClick={() => {
            navigator.clipboard.writeText("+352 691 924 533");
            toast({
              title: "Phone Number copied to clipboard",
              variant: "custom",
              duration: 1500,
            });
          }}
        >
          Phone Number: (+352)-691-924-533
        </button>
        <button
          className="px-4 2k:px-[1.25rem] py-2 2k:py-[0.625rem] hover:bg-[#ffffff10]"
          onClick={() => {
            navigator.clipboard.writeText("contact@hoffmannkevin.com");
            toast({
              title: "Email copied to clipboard",
              variant: "custom",
              duration: 1500,
            });
          }}
        >
          Email: contact@hoffmannkevin.com
        </button>
      </section>
    </section>
  );
}
