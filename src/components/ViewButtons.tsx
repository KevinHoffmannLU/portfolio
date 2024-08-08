export default function ViewButtons({
  view,
  setView,
}: {
  view: "work" | "about";
  setView: (view: "work" | "about") => void;
}) {
  const onClick = (view: "work" | "about") => {
    setView(view);
  };

  return (
    <section className="bg-[#10141f] mt-[5rem] flex gap-5 px-4 py-2 rounded-full">
      <Button view={view} onClick={onClick} name="work" />
      <Button view={view} onClick={onClick} name="about" />
    </section>
  );
}

function Button({
  name,
  onClick,
  view,
}: {
  name?: "about" | "work";
  onClick: (view: "work" | "about") => void;
  view: "work" | "about";
}) {
  if (!name) return null;

  return (
    <button
      onClick={() => onClick(name)}
      className={`text-[2rem] 2k:text-[2.4rem] px-10 py-2 rounded-full ${
        name === view ? "text-[#a4dddb] bg-[#1f273c]" : "bg-[#10141f]"
      }`}
    >
      {name?.charAt(0).toUpperCase() + name?.slice(1)}
    </button>
  );
}
