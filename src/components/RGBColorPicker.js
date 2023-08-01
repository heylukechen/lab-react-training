import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(20);
  const [gValue, setGValue] = useState(32);
  const [bValue, setBValue] = useState(52);

  const getValue = (value) => {};

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: `rgb(${rValue},0,0)`,
          }}
        ></div>
        <h4>R</h4>
        <SingleColorPicker color="r" value={rValue} getValue={getValue} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: `rgb(0,${gValue},0)`,
          }}
        ></div>
        <h4>G</h4>
        <SingleColorPicker color="g" value={gValue} getValue={getValue} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: `rgb(0,0,${bValue})`,
          }}
        ></div>
        <h4>B</h4>
        <SingleColorPicker color="b" value={bValue} getValue={getValue} />
      </div>

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
