export default function MyBooks() {
  return (
    <section className="col-start-1 col-end-4 row-start-2 row-end-3 bg-black/10 rounded-md p-12 relative flex flex-col">
      <h1 className="text-[5rem] mb-5">MyBooks</h1>
      <p className="text-[2rem] w-[50rem]">
        MyBooks is a simple website made in vanilla JavaScript that helps me
        keep track of my book collection. It has search, topic selectio n
        impleneted into it
      </p>
      <div className="mt-auto flex h-[5rem] w-[8rem]">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
      </div>
      <a
        href="https://kevinhoffmannlu.github.io/MyBooks/"
        target="_blank"
        className="lg:h-[30rem] lg:w-[60rem] absolute top-[12%] right-12 rounded-lg overflow-hidden"
      >
        <img
          src="/images/my-books.png"
          alt="CogniBrain"
          className="object-cover "
        />
      </a>
    </section>
  );
}
