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

  return (
    <div className="credit-card" style={{ backgroundColor: `${bgColor}` }}>
      <h2>{type}</h2>
      <h1>{number}</h1>
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
