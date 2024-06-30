export default function Alert({ text }: { text: string }) {
  // const n = 2 + 7 * top;
  // const i = `${n}rem`;
  return (
    <div className="alert">
      <p>{text}</p>
    </div>
  );
}
