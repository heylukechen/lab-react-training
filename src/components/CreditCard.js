import { useState } from 'react';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const newCreditNumber = () => {
    let cryptedString = '**** **** **** ';
    console.log(number.slice(12));
    let newCryptedString = cryptedString + number.slice(12);
    return newCryptedString;
  };

  return (
    <div className="credit-card" style={{ backgroundColor: `${bgColor}` }}>
      <h2>{type}</h2>
      <h1>{newCreditNumber()}</h1>
      <div className="horizontal-info">
        <h4>
          Expires {expirationMonth}/{expirationYear}
        </h4>
        <h4>{bank}</h4>
      </div>
      <h3>{owner}</h3>
    </div>
  );
};

export default CreditCard;
