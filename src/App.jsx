import { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorButton from "./components/ColorButton";

function App() {
  const [color, setColor] = useState("sky");
  const COLORS = ["sky", "emerald", "rose"];

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-20">
      <ColorBox color={color} />
      <div className="flex gap-10">
        {COLORS.map((_color) => (
          <ColorButton
            key={_color}
            color={_color}
            handleClick={() => setColor(_color)}
            isActive={color === _color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
