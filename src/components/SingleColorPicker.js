import { useState } from "react";

const SingleColorPicker = (props) => {
  const { color, value, onChange } = props;

  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      id="points"
      name="points"
      min="0"
      max="255"
    />
  );
};

export default SingleColorPicker;
