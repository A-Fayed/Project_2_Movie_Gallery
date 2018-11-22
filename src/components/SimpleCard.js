import React, { Component } from "react";
import Rating from './Rating';
import { css } from 'emotion';
import classname from 'classnames';

class SimpleCard extends Component {
    state = {
        hover: false
    }


    handlehover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }
    render(){
        return (
            <>
                <div 
                    onMouseEnter={this.handlehover}
                    onMouseLeave={this.handlehover} 
                    className={classname('simpleCard',css`
                        width: 200px;
                        height: 315px;
                        border-radius: 15px;
                        position: relative;
                        text-align: center;
                        overflow: hidden;                       
                        
                        &:after {
                            position: absolute;
                            content:'';
                            top: 0;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            background-image: linear-gradient(rgba(255 ,255 ,255 ,0), black);
                            opacity: 0.55;
                            z-index: 5;
                            transition: all ease-in-out 0.75s;
                            }

                        &:hover:after {
                            background-color: #1db4c9;
                            background-image:none;
                            opacity: 0.80;
                        }
                            `)}
                        >

                    <img 
                        className={classname('simpleCard__img',css`
                            width: 100%;
                            border-radius: inherit;
                            z-index: 1;
                            transition: all ease-in-out 0.75s;

                        `)} 
                        src="https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2017/12/fallen-kingdom-fan-poster.jpg?resize=768%2C1216&ssl=1" 
                        alt="Jurassic world movie poster">
                    </img>

                    <h5 
                        className={classname('simpleCard__title',css`
                            position: absolute;
                            line-height: 1.3;
                            font-size: 16px;
                            bottom: 15px;
                            color: white;
                            width: 100%;
                            margin: 0;
                            padding: 0 20px;
                            transition: all ease-in-out 0.75s;
                            z-index: 10;
                            
                        div:hover > & {
                            transform: translateY(-125%);
                        }

                        `)}>Jurassic World: the fallen kingdom</h5>
                    <div className={classname('simpleCard__rating',css`
                        position: absolute;
                        bottom: -25px;
                        width: 100%;
                        margin: 0 auto;
                        opacity: 0;
                        transition: all ease-in-out 0.75s ;
                        z-index: 15;
                        
                        div:hover > & {
                            bottom: 25px;
                            opacity: 1;
                        }
                        
                        `)}>

                        <Rating  max={10} value={5} rating={8.4}></Rating>
                    </div>
                </div>
            </>
        )
    }
}

export default SimpleCard;