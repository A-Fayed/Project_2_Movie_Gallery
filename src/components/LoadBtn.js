import React, {  Component } from 'react';
import { css } from 'emotion';

 class LoadBtn extends Component {

     render() {
         let {...props} = this.props
         let { isLoaded } = this.props
         
         return (
         <div 
            className={css`
                 display: block;
                 color: white;
                 font-size: 12px;
                 cursor:pointer;
                 text-align: center;
                 border-radius:6px;`}
                 {...props}
                 >
             <span onMouseEnter={this.handlehover}
                 className={css`
                         font-size: 12px;
                         padding: 6px;
                         display: inline-block;
                         background-color: #1fbcd2;
                         border-radius:  6px;
                         min-width: 90px;
                         margin: 50px auto;
                         `}>
                  { isLoaded ? 'Load More' : 'Loading...'}
             </span>
         </div>
         )
     }
 }

export default LoadBtn;