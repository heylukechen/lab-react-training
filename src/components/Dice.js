import { useState } from 'react';

import emptyImage from '../assets/images/dice-empty.png';
import firstImage from '../assets/images/dice1.png';
import secondImage from '../assets/images/dice2.png';
import thirdImage from '../assets/images/dice3.png';
import forthImage from '../assets/images/dice4.png';
import fifthImage from '../assets/images/dice5.png';
import sixthImage from '../assets/images/dice6.png';

const diceArray = [
  emptyImage,
  firstImage,
  secondImage,
  thirdImage,
  forthImage,
  fifthImage,
  sixthImage,
];

const Dice = () => {
  const [dice, setDice] = useState(
    diceArray[Math.floor(Math.random() * 5 + 1)]
  );

  console.log(dice);

  function drawDice() {
    setDice(diceArray[0]);
    const newDive = diceArray[Math.floor(Math.random() * 5 + 1)];
    setTimeout(()=>setDice(newDive), 1000); // always use callback
  }

  return (
    <div>
      <img
        onClick={() => drawDice()}
        style={{ height: '120px', padding: '8px 8px' }}
        src={dice}
        alt=""
      />
    </div>
  );
};

export default Dice;
