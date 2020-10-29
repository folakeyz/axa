import * as React from 'react';
import Marquee from 'react-double-marquee';
import style from '../axa.module.scss';
import Send from '@material-ui/icons/VolumeUp';
import pnp from 'sp-pnp-js';
import { IMarqueeItemReactProps } from './IMarqueeListReactProps';
import { ClassMarquee } from './ClassMarquee';
import { IMarquee } from './IMarquee';

export default class FooComponent extends React.Component<IMarqueeItemReactProps, any> {
  public constructor(props:IMarqueeItemReactProps,any)
  {
  super(props);
  this.state={
      items:[]
  }
  }
  render() {

  return (
    <div  style={{
        width: '100%',
        height: '3rem',
        whiteSpace: 'nowrap',
        padding: '0.5rem'
      }}>
        <div className={style.alertBtns}><h3><i><Send /> </i>Alert</h3></div>
        <div className={style.alertMarquee}>
      <Marquee>
        
        
      {
                    this.state.items.map(function(item:IMarquee){
                        return(
                         
                            <>{item.Title}</>
                        )
                    })
                }
                  
                 News:
              </Marquee> 
      </div>
    </div>
   
  );
}
public componentDidMount()
{
    // debugger;
    this._CarouselList();
}
private _CarouselList():void
{
    pnp.sp.web.lists.getByTitle(`DepartmentNews`).items.get().then
    ((response)=>{
        let CarouselCollection=response.map(item=> new ClassMarquee(item));
        this.setState({items:CarouselCollection});
    }

    )
}
};