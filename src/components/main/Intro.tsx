export default function Intro() {
  return (
    <section className="flex flex-col-reverse 1.4k:flex-row items-center 1.4k:items-stretch justify-center gap-[4rem] 1.4k:gap-[10rem]">
      <div className="flex flex-col 1.4k:flex-row flex-wrap items-center 1.4k:items-start 1.4k:w-[80rem]">
        <div className="flex pt-1">
          <p className="mt-auto text-[2.5rem] 1.4k:text-[5rem] opacity-50">
            Hey there! I'm
          </p>
          <h1 className="mt-auto ml-[1.2rem] text-[7rem] 1.4k:text-[15rem] leading-none">
            Kevin
          </h1>
        </div>
        <p className="text-[2rem] px-[2rem] text-center 1.4k:text-left 1.4k:px-0 1.4k:text-[6rem]">
          A <span className="text-[#a4dddb] ">Web Developer</span> based out of
          Luxembourg
        </p>
      </div>
      <img
        className="w-[20rem] h-[20rem] 1.4k:w-[40rem] 1.4k:h-[40rem] object-cover rounded-[1rem]"
        src="/images/kevin.png"
      />
    </section>
  );
}
