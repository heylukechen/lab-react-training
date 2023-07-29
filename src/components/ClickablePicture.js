import { useState } from 'react';

const ClickablePicture = (props) => {
  const {img, imgClicked } = props;
  const [image, setImage] = useState(img);
  
  function changeImage() {
    if (image === img) {
      setImage(imgClicked);
    } else {
      setImage(img);
    }
  }
  return (
    <div>
      <img onClick={() => changeImage()} src={image} alt="" />
    </div>
  );
};

export default ClickablePicture;
