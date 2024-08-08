export default function Intro() {
  return (
    <section className="flex flex-col-reverse 1.5k:flex-row 1.5k:items-stretch 2k:flex-row items-center 2k:items-stretch justify-center gap-[4rem] 1.5k:gap-[8rem] 2k:gap-[10rem]">
      <div className="flex flex-col 1.5k:flex-row 2k:flex-row flex-wrap items-center 1.5k:items-center 2k:items-start 1.5k:w-[64rem] 2k:w-[80rem]">
        <div className="flex pt-1">
          <p className="mt-auto text-[2.5rem] 1.5k:text-[4rem] 2k:text-[5rem] opacity-50">
            Hey there! I'm
          </p>
          <h1 className="mt-auto ml-[1.2rem] text-[7rem] 1.5k:text-[12rem] 2k:text-[15rem] leading-none">
            Kevin
          </h1>
        </div>
        <p className="text-[2rem] px-[2rem] text-center 1.5k:text-left 1.5k:px-0 1.5k:text-[4.8rem] 2k:text-left 2k:px-0 2k:text-[6rem]">
          A <span className="text-[#a4dddb] ">Web Developer</span> based out of
          Luxembourg
        </p>
      </div>
      <img
        className="w-[20rem] h-[20rem] 1.5k:w-[32rem] 1.5k:h-[32rem] 2k:w-[40rem] 2k:h-[40rem] object-cover rounded-[1rem]"
        src="/images/kevin.png"
      />
    </section>
  );
}
