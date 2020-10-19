import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import  style from '../axa.module.scss';
 
const slideImages = [
  'https://www.axamansard.com/images/banners/EduPlan-Plus-Website-Banner.jpg',
  'https://www.axamansard.com/lifeandliving/Images/Lead/AXA_becomes_Official_Global_Insurance_Partner_of_Liverpool_Football_Club_axa%20lfc%20feature.jpg',
  'https://www.axamansard.com/lifeandliving/Images/Lead/Tips_On_Buying_A_Car_buying-a-car.jpg'
];
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className={style.eachSlide}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className={style.eachSlide}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className={style.eachSlide}>
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;