import { useState } from "react";

// import { useState, useEffect } from "react";

const Random = (props) => {
  const { min, max } = props;

  const [randomNumber] = useState(Math.floor(Math.random() * (max - min) + min));


//   useEffect(() => {
//     function calculatedNumber () {
//       setRandomNumber(Math.floor(Math.random() * (max - min) + min));
//     };
//     calculatedNumber();
//   }, [min, max]);

  return (<div>Random value between {min} and {max} = {randomNumber} </div>
  )
};

export default Random;
