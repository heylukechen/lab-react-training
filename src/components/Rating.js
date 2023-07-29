const Rating = (props) => {
console.log(typeof props.children)

const newRating = () => {
    if (Number(props.children)>4.4){
        return "★★★★★"
    } else if (Number(props.children) < 4.3 && Number(props.children) > 3.4) {
        return "★★★★✩"
    } else if (Number(props.children) < 3.3 && Number(props.children) > 2.4) {
        return "★★★✩✩"
    } else if (Number(props.children) < 2.3 && Number(props.children) > 1.4) {
        return "★★✩✩✩"
    } else if (Number(props.children) < 1.3 && Number(props.children) > 0.4) {
        return "★✩✩✩✩"
    } else {
        return "✩✩✩✩✩"
    }
} 

  return (
    <div>
      {/* <div>{props.children}</div> */}
      <div>{newRating()}</div>
    </div>
  );
};

export default Rating;
