import { useState } from "react";

const Carousel = (props) => {
  const { images } = props;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function goRight (){
    let newIndex = currentImageIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0; // go back to the first image if it's the end
    }
    setCurrentImageIndex(newIndex);
  }

  function goLeft (){
    let newIndex = currentImageIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1; // go back to the first image if it's the end
    }
    setCurrentImageIndex(newIndex);
  }

  return (
    <div style={{ padding: '16px 16px', width: '240px' }}>
      <img style={{ width: '240px' }} src={images[currentImageIndex]} alt="" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={()=>goLeft()}>Left</button>
        <button onClick={()=>goRight()}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;
