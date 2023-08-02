import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(20);
  const [gValue, setGValue] = useState(32);
  const [bValue, setBValue] = useState(52);

  const changeColor = (color, value) => {
    //use if-else to identify what color needs to be udpated.
    if (color === 'r') {
      setRValue(value);
    } else if (color === 'g') {
      setGValue(value);
    } else {
      setBValue(value);
    }
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <SingleColorPicker color="r" value={rValue} changeColor={changeColor} />

      <SingleColorPicker color="g" value={gValue} changeColor={changeColor} />

      <SingleColorPicker color="b" value={bValue} changeColor={changeColor} />

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
          }}
        ></div>
        <h4>
          rgb: {rValue},{gValue},{bValue}
        </h4>
      </div>
    </div>
  );
};

export default RGBColorPicker;
