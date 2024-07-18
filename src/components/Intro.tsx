export default function Intro() {
  return (
    <section className="flex justify-center gap-[10rem]">
      <div className="flex flex-wrap items-start w-[80rem]">
        <p className="pt-[11rem] text-[5rem] opacity-50">Hey there! I'm</p>
        <h1 className="ml-[1.2rem] text-[15rem]">Kevin</h1>
        <p className="text-[6rem]">
          A <span className="text-[#a4dddb]">Web Developer</span> based out of
          Luxembourg
        </p>
      </div>
      <img
        className="w-[40rem] h-[40rem] object-cover rounded-[1rem]"
        src="./src/temp/4.jpg"
      />
    </section>
  );
}
