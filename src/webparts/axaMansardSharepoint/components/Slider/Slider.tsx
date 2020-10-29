import * as React from 'react';
import pnp from 'sp-pnp-js';
import { ISliderItemReactProps } from './ISliderItemReactProps';
import { ClassSlider } from './ClassSlider';
import { ISlider } from './ISlider';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styling from './slider.module.scss';


export default class Gallery extends React.Component<ISliderItemReactProps, any> {
    public constructor(props:ISliderItemReactProps,any)

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
                     this.state.items.map(function(item:ISlider){
                return(
                         <>
                       <Carousel>
                          <Carousel.Item>
                                      <img className="d-block w-100"
                                      src={item.Image}
                                      alt="Events" />
                              <Carousel.Caption>
                                <div className={styling.Text}>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                             </Carousel.Caption>
                        </Carousel.Item>  
                        </Carousel> 
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
      this._EventsList();
  }
  private _EventsList():void
  {
      pnp.sp.web.lists.getByTitle(`Event`).items.get().then
      ((response)=>{
          let EventsCollection=response.map(item=> new ClassSlider(item)).reverse();
          this.setState({items:EventsCollection});
      }
  
      )
  }
}

