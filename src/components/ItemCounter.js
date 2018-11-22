import React, {  Component } from 'react';
import { css } from 'emotion';
import classnames from 'classnames';

import { MyCounter } from './Context'
import { colors } from './colors'

class ItemCounter extends Component {
    static contextType = MyCounter;
    
    static defaultProps = {
        max: 10,
        value:9,
    }
    
    state = {
        itemNumber: 0,
        max: this.props.max,
        value: this.props.value,
        radius: 15
    }


    render() {
        let value = this.context.state.savedMoviesId.length;
        let {max, radius} = this.state
        let percent = (value/max)*100;

        let cirleDiameter = radius * 2.5;
        let circleThickness = radius * 0.18;
        let counterDimension = circleThickness + cirleDiameter + 2;


        return (
            <>
                <div 
                    className={css`
                        display:flex;
                        align-items:center;
                        margin-left:auto;
                    `} onClick={this.handleClick}>

                    <span 
                        className={css`
                            margin-right: 6px;
                            margin-bottom: 4px;
                            font-size: 14px;
                            width: 20px;
                            height: 20px;
                            text-align:center;
                            background-color: ${colors.primaryColor};
                            border-radius: 99px;
                            color:white;
                        `}> {this.context.state.savedMoviesId.length} </span>

                    <div 
                        className={classnames('circle', css`
                            display:inline-block;
                            position: relative;
                     `)}>

                        <svg 
                            className={classnames('counter-circle', css`
                                position: relative;
                                `)} 
                            width={counterDimension} 
                            height={counterDimension} 
                            viewBox={`0 0 ${cirleDiameter} ${cirleDiameter}
                            `}>

                        <circle 
                            fill= 'white'
                            r= '15.91549430918954'
                            cy = '50%'
                            cx = '50%'>
                        </circle>

                        <circle 
                            cy= '50%'
                            cx= '50%'
                            r= '15.91549430918954'  
                            stroke= '#e6e6e6' 
                            fill= 'transparent'
                            strokeWidth= '3'
                            float= 'left' >
                        </circle>

                        <circle 
                            opacity= {value === 0 ? '0' : '1'} 
                            cy ='50%' 
                            cx ='50%' 
                            r ='15.91549430918954' 
                            stroke={colors.primaryColor} 
                            strokeWidth ={circleThickness} 
                            strokeLinecap="round" 
                            strokeDasharray= {`${percent} ${100 - percent} 
                            `} 
                            strokeDashoffset='25'  
                            fill='transparent'
                            className={css`
                                transition: all ease-in-out 0.5s;`}>

                        </circle>
                        </svg>

                        <i 
                            className={classnames('fa fa-heart', css`
                                position:absolute;
                                top:50%;
                                right:50%;
                                transform:translate(50%, -50%);
                                margin-top:-2px;
                                color: ${colors.primaryColor};
                            `)} >
                        </i>
                    </div>
                </div>
            </>
        )
    }
}

export default ItemCounter;