import "./die.css";

export default function Die({ value, color = "slateblue" }) {
  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {value}
    </div>
  );
}
