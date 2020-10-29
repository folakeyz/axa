// import * as React from 'react';
// import { Component } from 'react';
// import * as ReactDOM from 'react-dom';
// // import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import pnp from 'sp-pnp-js';
// import { ICarouselItemReactProps } from './ICarouselItemReactProps';
// import { ClassCarousel } from './ClassCarousel';
// import { ICarousel } from './ICarousel';


// export default class DemoCarousel extends React.Component<ICarouselItemReactProps, any> {
// public constructor(props:ICarouselItemReactProps,any)
// {
// super(props);
// this.state={
//     items:[]
// }
// }

//     render() {
        
//         return (
//             <Carousel>
//                 {
//                     this.state.items.map(function(item:ICarousel){
//                         return(
//                             <div>
//                                  <img src={item.CarouselDesc} alt="MyCarousel" />
                                
//                             </div>
//                         )
//                     })
//                 }
//                 </Carousel>
//         );
//     };
//     public componentDidMount()
//     {
//         // debugger;
//         this._CarouselList();
//     }
//     private _CarouselList():void
//     {
//         pnp.sp.web.lists.getByTitle(`Banners`).items.get().then
//         ((response)=>{
//             let CarouselCollection=response.map(item=> new ClassCarousel(item));
//             this.setState({items:CarouselCollection});
//         }

//         )
//     }
// };

