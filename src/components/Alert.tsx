export default function Alert({ text }: { text: string }) {
  return (
    <div className="alert">
      <p>{text}</p>
    </div>
  );
}
