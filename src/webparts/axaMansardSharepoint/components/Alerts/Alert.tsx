import * as React from 'react';
import style from '../axa.module.scss';
import pnp from 'sp-pnp-js';
import { IAlertItemReactProps } from './IAlertItemReactProps';
import { ClassAlert } from './ClassAlert';
import { IAlert } from './IAlert';

export default class Alerts extends React.Component<IAlertItemReactProps, any> {
    public constructor(props:IAlertItemReactProps,any)
    {
        super(props);
        this.state={
            items:[]
        }
        }
            render() {
        return(
            <>
            {
            this.state.items.map(function(item:IAlert){
            return(
                <>
                
                <div  className={style.alertNews}>
                <a href={item.Url}>
                <h6><b>{item.Title}</b></h6>
                    </a>
                    <p>{item.News}</p>
                    <small>{item.Date}</small>
                </div>
                
            </>
                    );
            })
      
        }
        </>
    )
    }
        
public componentDidMount()
{
    // debugger;
    this._AlertList();
}
private _AlertList():void
{
    pnp.sp.web.lists.getByTitle(`Importantnotice`).items.get().then
    ((response)=>{
        let AlertCollection=response.map(item=> new ClassAlert(item)).reverse();
        let AlertCard = AlertCollection.slice(0, 3)
        this.setState({items:AlertCard});
    }

    )
}





}
