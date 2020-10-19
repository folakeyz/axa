import * as React from 'react';
import Marquee from 'react-double-marquee';
import style from '../axa.module.scss';
export default function FooComponent() {
  return (
    <div  style={{
        width: '100%',
        height: '3rem',
        whiteSpace: 'nowrap',
        padding: '0.5rem'
      }}>
        <div className={style.alertBtns}><h3>Alert</h3></div>
        <div className={style.alertMarquee}>
      <Marquee>
        Some really really really really really long text Some really really really really really long text Some really really really really really long text
      </Marquee>
      </div>
    </div>
  );
}