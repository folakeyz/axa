import * as React from 'react';
import style from '../axa.module.scss';

const Birthday = (props) => {
    return(
        <div>
        <div  className={style.avatar}>
        <img src={props.image} />
        </div>
       <div  className={style.avatarName}>
        <h5>{props.staff}</h5>
        <small>{props.celebration}</small>
        <small>| Send Message</small>
        </div>
        </div>
    );
    }
    export default Birthday;