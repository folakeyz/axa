import * as React from 'react';
import style from '../axa.module.scss';

const Rating = () => {
return(
<div  className={style.alertNews}>
<h5><b>Customer Satisfaction Rating</b></h5>
<div  className={style.cardOutline}>
<div className={style.ratingsOutline}>
<small>Investments</small>
<h3>43%</h3>
</div>
<div className={style.ratingsOutline}>
<small>Insurance</small>
<h3>46%</h3>
</div>
<div className={style.ratings}>
<small>Health</small>
<h3>58%</h3>
</div>
</div>
<div  className={style.cardOutline}>
    <h1 className="float-left"><b>382</b></h1>
    <p  className="float-left">New Customer Count</p>
</div>
</div>
);
}
export default Rating;