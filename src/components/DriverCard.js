import Rating from './Rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  const starRatings = () => {
    if (rating > 4.4) {
      return '★★★★★';
    } else if (rating < 4.3 && rating > 3.4) {
      return '★★★★✩';
    } else if (rating < 3.3 && rating > 2.4) {
      return '★★★✩✩';
    } else if (rating < 2.3 && rating > 1.4) {
      return '★★✩✩✩';
    } else if (rating < 1.3 && rating > 0.4) {
      return '★✩✩✩✩';
    } else {
      return '✩✩✩✩✩';
    }
  };

  return (
    <div className="card">
      <img className="head-shot-driver" src={img} alt="" />
      <div className="card-content">
        <h1>{name}</h1>
        <Rating>{rating}</Rating>
        <div style={{display:"flex"}}>
          <div>{car.model}</div>
          <div>{car.licensePlate}</div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
