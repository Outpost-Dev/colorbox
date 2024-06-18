import clsx from "clsx";

const ColorButton = ({ color, handleClick, isActive }) => {
  return (
    <button
      className={clsx(
        "border px-5 py-1 rounded-md hover:border-transparent hover:bg-slate-200 text-slate-700",
        isActive ? "bg-slate-200" : "bg-white "
      )}
      onClick={handleClick}
    >
      {color}
    </button>
  );
};

export default ColorButton;
