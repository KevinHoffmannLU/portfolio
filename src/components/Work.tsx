export default function Work() {
  return (
    <section className="w-[95vw] h-[85vh] bg-[#10141f] mt-12 flex items-center justify-center gap-[10rem] p-10">
      <Project />
      <Project />
      <Project />
    </section>
  );
}
function Project() {
  return (
    <section className="p-12 flex flex-col items-center w-[70rem] h-full bg-black/10">
      <h1 className="text-[4.5rem] text-center">MyBooks</h1>
      <p className="text-[1.5rem] mt-12 w-full">
        MyBooks is a simple website made in vanilla JavaScript that helps me
        keep track of my book collection.
      </p>
      <p className="text-[1.5rem] mt-5 w-full">
        Features: Searching, Switching Topics
      </p>
      <a
        href="https://kevinhoffmannlu.github.io/MyBooks/"
        target="_blank"
        className="mt-[10rem] rounded-lg overflow-hidden"
      >
        <img
          src="/images/my-books.png"
          alt="CogniBrain"
          className="object-cover "
        />
      </a>
      <section className="mt-auto flex justify-center gap-[5rem] w-full h-[8rem]">
        <img
          className="w-[8rem] h-[8rem]"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />
        <img
          className="w-[8rem] h-[8rem]"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        />
      </section>
    </section>
  );
}
