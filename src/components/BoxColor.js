const BoxColor = (props) => {
  const { r, g, b } = props;

  const passedStyle = {
    backgroundColor:`rgb(${r},${g},${b})`,
    height: "48px",
  };

  return <div style={passedStyle}>
    <p>rgb ({r},{g},{b})</p>
  </div>;
};

export default BoxColor;
