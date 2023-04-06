import { useEffect, useState } from "react";
import "./select-box.css";

export default function SelectBox({
  children,
  selected,
  onSelect,
  questionProperty,
}) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selected === children ? true : false);
  }, [selected]);

  return (
    <div
      className="container"
      onClick={() => onSelect(questionProperty, children)}
    >
      <div className={isSelected ? "toogle-box isSelected" : "toogle-box"} />
      <p className="text">{children}</p>
    </div>
  );
}
