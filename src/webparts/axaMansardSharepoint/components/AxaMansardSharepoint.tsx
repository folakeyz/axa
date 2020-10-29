import * as React from 'react';
import style from './test.module.scss';
import { IAxaMansardSharepointProps } from './IAxaMansardSharepointProps';
import { escape } from '@microsoft/sp-lodash-subset';
import DemoCarousel from './Carousel/Carousel';
import FooComponent from './Marquee/Marquee';
import MediaCard from './ImgCard/MediaCard';
import Timer from './CountDown/CountDown';
import Alerts from './Alerts/Alert';
import Gallery from './Slider/Slider';
import Links from './Quicklinks/Quicklinks';
import Birthdays from './Birthday/Birthdays';
import Rating from './Rating/Rating';
import Document from './Documents/Documents';
import App from './Polls/Poll';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { SPHttpClient } from '@microsoft/sp-http';
import * as jQuery from "jquery";
import Instagram from './Instagram/Instagram';
import Twitter from './Yammer/Yammer';
import SimpleSlider from './Spotlight/Spolights';
import styles from './axa.module.scss';
import mstyle from './styles.module.scss';



export default class AxaMansardSharepoint extends React.Component<IAxaMansardSharepointProps, {}> {
  public render(): React.ReactElement<IAxaMansardSharepointProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
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
              <div className={styles.card}>
                  <div className={styles.timeline}>
                    <h3> IMPORTANT NEWS</h3>
                    <a>View All NEWS UPDATE</a>
                   </div>
                  <MediaCard  />
              </div>
    
              {/* End of News Card */}
              {/* List News */}
              <div className={styles.card}>
              <div className={styles.alert}>
                    <div className={styles.timeline}>
                        <h3>IMPORTANT NOTICE</h3>
                        <a>View All</a>
                     </div>
                     <Alerts />
                
              </div>
              {/* Slider */}
              <div className={style.eventsCenter}>
                    <div className={styles.timeline}>
                        <h3> EVENTS</h3>
                        <a>View All</a>
                    </div>
                      <Gallery /> 
                </div>
                {/* End of Slider */}
                </div>
                <div className={styles.alert}>
                <div className={styles.timeline}>
                <h3> GIST LOUNGE</h3>
                <a>View All</a>
              </div>
                    <Twitter />
              </div>
              {/* Slider */}
              <div className={styles.alert}>
                <h3>NEW STAFF/FEATURED STAFF</h3>
                <SimpleSlider /> 
                </div>
                {/* End of Slider */}
                <div className={mstyle.instagram}>
                <h3>INSTAGRAM FEEDS</h3>
               <Instagram /> 
                </div>

                <div className={styles.alert}>
              <App />
              </div>
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
                <div  className={styles.birthday}>
                <h4>Staff Celebration</h4>
                <Birthdays />
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
