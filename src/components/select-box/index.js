import "./select-box.css";

export default function SelectBox({ children }) {
  return (
    <div className="container">
      <div className="toogle-box" />
      <p className="text">{children}</p>
    </div>
  );
}
