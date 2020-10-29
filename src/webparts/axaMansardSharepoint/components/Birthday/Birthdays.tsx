import * as React from 'react';
import style from '../axa.module.scss';
import pnp from 'sp-pnp-js';
import { IBirthdayItemReactProps } from './IBirthdayItemReactProps';
import { ClassBirthday } from './ClassBirthday';
import { IBirthday } from './IBirthday';


export default class Bithdays extends React.Component<IBirthdayItemReactProps, any> {
    public constructor(props:IBirthdayItemReactProps,any)
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
            this.state.items.map(function(item:IBirthday){
                return(
                
                    <div className={style.avatars}>
        <div  className={style.avatar}>
        <img src={item.Picture} />
        </div>
       <div  className={style.avatarName}>
        <h5>{item.Title}</h5>
        <small>{item.CelebrationType}</small>
        <small>| Send Message</small>
        </div>
        </div>
                )
            })
        }
        </>
        
    );
    };
    // }
    public componentDidMount()
    {
        // debugger;
        this._BirthdayList();
    }
    private _BirthdayList():void
    {
        pnp.sp.web.lists.getByTitle(`Birthday`).items.get().then
        ((response)=>{
            let BirthdayCollection=response.map(item=> new ClassBirthday(item));
            this.setState({items:BirthdayCollection});
        }

        )
    }
    }
    