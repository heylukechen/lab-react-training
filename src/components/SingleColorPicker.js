import { useState } from 'react';

const SingleColorPicker = (props) => {
  const { color, value, changeColor } = props;

  const [newValue, setValue] = useState(value);

  return (
    //using the passed color value and do string temporal changes.
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {color === 'r' && (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: `rgb(${value},0,0)`,
            }}
          ></div>
          <h4>r</h4>
        </div>
      )}

      {color === 'g' && (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: `rgb(0,${value},0)`,
            }}
          ></div>
          <h4>g</h4>
        </div>
      )}

      {color === 'b' && (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: `rgb(0,0,${value})`,
            }}
          ></div>
          <h4>b</h4>
        </div>
      )}
      <input
        type="number"
        value={value}
        onChange={(e) => changeColor(color, e.target.value)}
        id="points"
        name="points"
        min="0"
        max="255"
      />
    </div>
  );
};

export default SingleColorPicker;
