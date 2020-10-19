import * as React from 'react';
import style from '../axa.module.scss';

const Alerts = (props) => {
return(
<div  className={style.alertNews}>
<h6><b>{props.title}</b></h6>
<p>{props.news}</p>
<small>{props.date}</small>
</div>
);
}
export default Alerts;