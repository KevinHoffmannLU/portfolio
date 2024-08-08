export default function Skills() {
  const imgSize =
    "w-[4rem] h-[4rem] 1.5k:w-[6.4rem] 1.5k:h-[6.4rem] 2k:w-[8rem] 2k:h-[8rem]";

  return (
    <section className="w-[35rem] 1.5k:w-[80vw] 1.5k:h-[8rem] 2k:w-[80vw] 2k:h-[10rem] py-[1rem] px-[2rem] 1.5k:px-[8rem] 2k:px-[10rem] mt-[3rem] 1.5k:mt-[5.2rem] 2k:mt-[6.5rem] bg-[#151d28] rounded-[1rem] flex justify-between">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        className={imgSize}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        className={imgSize}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        className={imgSize}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        className={imgSize}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        className={imgSize}
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        className={imgSize}
      />
    </section>
  );
}
