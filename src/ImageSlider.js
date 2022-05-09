// your ImageSlider code here!
// import React from 'react'

// export default function ImageSlider() {
//     constructor(){
//         super();
//         this.state = {
//             currentSlideIndex = 0;
//         }
//     }
//   return (
//     <div>
      
//     </div>
//   )
// }

import React, {Component} from 'react';

export default class ImageSlider extends Component{
    constructor(props){
        super();

        this.state ={currentSlideIndex: 0}
    }
    render(){
        return (
            <div>{this.state.currentSlideIndex}</div>
        )
    }
    
}