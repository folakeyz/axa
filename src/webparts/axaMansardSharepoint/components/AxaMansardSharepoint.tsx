import * as React from 'react';
import styles from './axa.module.scss';
import { IAxaMansardSharepointProps } from './IAxaMansardSharepointProps';
import { escape } from '@microsoft/sp-lodash-subset';
import DemoCarousel from './Carousel/Carousels';
import FooComponent from './Marquee/Marquee';
import MediaCard from './ImgCard/MediaCard';
import Timer from './CountDown/CountDown';
import Alerts from './Alerts/Alert';
import Slideshow from './Slider/Slider';
import Links from './Quicklinks/Quicklinks';
import Birthday from './Birthday/Birthday';
import Rating from './Rating/Rating';
import Document from './Documents/Documents';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { SPHttpClient } from '@microsoft/sp-http';

export default class AxaMansardSharepoint extends React.Component<IAxaMansardSharepointProps, {}> {
  public render(): React.ReactElement<IAxaMansardSharepointProps> {

    return (
      // Parent Container
      <div className={ styles.axaMansardSharepoint }>
            {/* Carousel */}
            <DemoCarousel />
              {/* End of Carousel */}
              {/* Left Column */}
             <div className={ styles.axaMansardLeft}> 
             {/* Alert/News */}
              <FooComponent />
              {/* End of News */}
              {/* NEws Card */}
              <MediaCard  
              title="Tips and Tricks on Buying a Car" 
              intro="Buying a car can be a scary thought. Most times, a car..."
              date="23 AUGUST, 2019"
              image="https://www.axamansard.com/lifeandliving/Images/Lead/Tips_On_Buying_A_Car_buying-a-car.jpg"/>
              <MediaCard
              title="AXA Partners with Liverpool Football Club " 
              intro="AXA reignites its sponsorship strategy and is proud to join forces......."
              date="12 OCTOBER, 2019"
              image="https://www.axamansard.com/lifeandliving/Images/Lead/AXA_becomes_Official_Global_Insurance_Partner_of_Liverpool_Football_Club_axa%20lfc%20feature.jpg"
              />
              <MediaCard
              title="working remotely can be fun, Here are the steps to follow " 
              intro="In the last couple of weeks, we've been celebrated across..."
              date="13 OCTOBER, 2019"
              image="https://www.axamansard.com/images/banners/EduPlan-Plus-Website-Banner.jpg"
              />
              {/* End of News Card */}

              {/* List News */}
              <div className={styles.alert}>
                <h5> IMPORTANT NEWS</h5>
                <a>View All</a>
                <Alerts
                title="AXA Group Phising awareness Program"
                news="In the couple of Weeks, We have been ......"
                date="12TH OCTOBER 2019"
                />
                  <Alerts
                title="ISO Training for June 2020"
                news="In the couple of Weeks, We have been ......"
                date="12TH OCTOBER 2019"
                />
                  <Alerts
                title="AXA Group Security Test Program"
                news="In the couple of Weeks, We have been ......"
                date="12TH OCTOBER 2019"
                />
              </div>
              {/* Slider */}
              <div className={styles.alert}>
                {/* <Slideshow /> */}
                </div>
                {/* End of Slider */}
             
            </div> 
          {/* Right Column */}
            <div className={ styles.axaMansardRight}>
              {/* Countdown */}
                <Timer />
                {/* End of Countdown */}
                {/* Quick Links */}
                <Links />
                {/* End of QuickLinks */}
                {/* Birthday Webpart */}
                <div  className={styles.links}>
                <h4>Staff Celebration</h4>
                <Birthday 
                image="https://www.axamansard.com/lifeandliving/Images/Lead/AXA_becomes_Official_Global_Insurance_Partner_of_Liverpool_Football_Club_axa%20lfc%20feature.jpg" 
                staff="Idris Edem" 
                celebration="Birthday Celebration "/>
                <Birthday 
                image="https://www.axamansard.com/lifeandliving/Images/Lead/AXA_becomes_Official_Global_Insurance_Partner_of_Liverpool_Football_Club_axa%20lfc%20feature.jpg" 
                staff="Safiyyah Siyanbade" 
                celebration="5yrs Work Anniversary "/>
                <Birthday 
                image="https://www.axamansard.com/lifeandliving/Images/Lead/AXA_becomes_Official_Global_Insurance_Partner_of_Liverpool_Football_Club_axa%20lfc%20feature.jpg" 
                staff="Eniola Balogun" 
                celebration="5yrs Work Anniversary "/>
                </div>
                {/* End of Birthday Webpart */}
                {/* Customer Rating */}
                <Rating />
                {/* End of Customer Rating */}

                 {/* Customer Rating */}
                 <Document />
                {/* End of Customer Rating */}
                </div>   
           </div>
          //  End of Parent Container
    );
  }
}
