import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Slider.css"

const slideImages = [
  {
    url: 'https://files.myglamm.com/site-images/original/1920x527sk.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://files.myglamm.com/site-images/original/TGLF-sept-main-KV-1920x527_2.jpg',
    caption: 'Slide 2'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`,height:"23.3rem",backgroundSize:'contain'}}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;