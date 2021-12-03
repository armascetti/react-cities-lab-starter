import React, { useState } from  "react";
import "./styles.css";
import imagesArr from './imageData';

export default function App() {
  const images = imagesArr.map((ele, index) => {
    return (
      <img
      src={ele.img}
      alt= {ele.city}
      className ="Images"
      key = {index}
      onClick ={() => handleClick(ele.img)}
      />
      )
    })

    const [bigImage, setBigImage] = useState(imagesArr[0].img);
    const handleClick = (imgUrl) => {
      setBigImage(imgUrl); 
    }
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div>
    <div id="thumbnails">
      {images}
      </div>
        <img src={bigImage} id="bigimage" alt='bigImage'/>
        </div>
      </div>
    </div>
  );
}
