import clsx from "clsx";
import "./styles.css";

const ColorBox = ({ color }) => {
  return (
    <div className={clsx("box", `bg-${color}-800 text-${color}-200`)}>
      {color}
    </div>
  );
};

export default ColorBox;
