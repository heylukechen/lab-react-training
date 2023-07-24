const IdCard = (props) => {
  const { picture, firstName, lastName, gender, height, birth } = props;
  return (
    <div className="card">
      <img className="head-shot" src={picture} alt="" />
      <div className="card-content">
        <p>
          <span>Frist name: </span>
          {firstName}
        </p>
        <p>
          <span>Last name: </span>
          {lastName}
        </p>
        <p>
          <span>Gender: </span>
          {gender}
        </p>
        <p>
          <span>Height: </span>
          {height}
        </p>
        <p>
          <span>Birth: </span>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;

// - `lastName`: A string
// - `firstName`: A string
// - `gender`: A string, `'male'` or `'female'`
// - `height`: A number
// - `birth`: A date
// - `picture`: A string
