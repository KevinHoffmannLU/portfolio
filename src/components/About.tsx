export default function About() {
  return (
    <section className="w-[95vw] h-[80vh] 2k:h-[85vh] bg-[#10141f] mt-12 p-12 px-[20rem] flex flex-col text-[2rem] 2k:text-[2.4rem]">
      <h1 className="text-[4.5rem] 2k:text-[5.5rem] text-center">About Me</h1>
      <p className="mt-12 w-full text-center">
        I have always like the idea of being a programmer some day and still
        fondly remember coding my first shell script when I was 8 years old.
        Although I never did really pursue the skill, it was always in the back
        of my mind.
      </p>
      <p className="mt-12 w-full text-center">
        Later in life, while working as a fast food worker, I decided to try out
        CS50 while on my annual leave and I realized that Software Developement
        was something I wanted to pursue more seriously. So a couple of months
        later I handed in my resignation and dived straight into teaching my
        self all I could about the craft.
      </p>
      <p className="mt-12 w-full text-center">
        I now understand the basics of computer science and have a grasp of how
        to write clean and efficient code. As I continue my journey to master
        the art of code I am now looking for oppertunities to work together with
        orthers, to contribute and learn as much as possible.
      </p>
      <section className="mt-[10rem] w-full flex flex-col items-center">
        <p className="mb-3">
          If you are interested in working together, please feel free to contact
          me:
        </p>
        <button>Phone Number: (+352)-691-924-533</button>
        <button>Email: contact@hoffmannkevin.com</button>
      </section>
    </section>
  );
}
