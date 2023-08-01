const NumbersTable = (props) => {
  const { limit } = props;

  const newArray = [];
  for (let i = 1; i < limit + 1; i++) {
    newArray.push(i);
  }

  console.log(newArray);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {newArray.map((item) => {
        return (
          <div
            style={{
              width: '20%',
              padding: '16px 16px',
              border: '2px solid black',
              textAlign:"center",
              backgroundColor:item % 2 === 0 ? 'red' : 'transparent',
            }}
          >
            <h1>{item}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
