export default function Intro() {
  return (
    <section className="flex justify-center gap-[10rem]">
      <div className="flex flex-wrap items-start w-[80rem] ">
        <div className="flex pt-1">
          <p className="mt-auto text-[5rem] opacity-50">Hey there! I'm</p>
          <h1 className="mt-auto ml-[1.2rem] text-[15rem] leading-none">
            Kevin
          </h1>
        </div>
        <p className="text-[6rem]">
          A <span className="text-[#a4dddb] ">Web Developer</span> based out of
          Luxembourg
        </p>
      </div>
      <img
        className="w-[40rem] h-[40rem] object-cover rounded-[1rem]"
        src="/images/kevin.jpg"
      />
    </section>
  );
}
