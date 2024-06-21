import "./button.css";

export default function Button({ clickFunc, title = "Button" }) {
  return (
    <button className="Button" onClick={clickFunc}>
      {title}
    </button>
  );
}
