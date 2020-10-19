import React from "react";
import Countdown from "react-countdown";
import style from '../axa.module.scss';


const Timer = () => {
    return(
        <div className={style.timer}>
        <div className={style.timerText}>
            <p>
                NEXT BIG EVENT BEGINS IN
            </p>
        </div>
        <div className={style.timerValue}> 
      
        <Countdown date={Date.now() + 500000}/>
       
        </div>
        </div>
        
    );
}
export default Timer;