import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { change } from "../features/fontColor";

const Color: React.FC = () => {
  const initialColorState = useAppSelector((state) => state.color.value);
  const [color, setColor] = useState(initialColorState);
  const dipatch = useAppDispatch();
  return (
    <form
      action=""
      onSubmit={(e) => {
        console.log(color);
        dipatch(change(color));
      }}
      style={{ marginTop: "25px" }}
    >
      <input
        type="text"
        placeholder="Enter Color Name"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">GO !</button>
    </form>
  );
};

export default Color;
