import React, { Component } from 'react';
import { css } from 'emotion';
import classname from 'classnames';
import Rating from './Rating';
import Likebtn from './LikeBtn';
import { colors } from './colors';
import PropTypes from 'prop-types';



class FancyCard extends Component {
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        rating: PropTypes.number,
        discription: PropTypes.string,
        img: PropTypes.string
    }

    static propsDefault = {
        id: 0,
        title: '',
        rating: 0,
        discription: '',
        img: ''
    }

    state = {
        id: this.props.id,
        title: this.props.title,
        rating: this.props.rating,
        discription: this.props.discription,
        img: this.props.img
    }


    render(){
        let {
            id,
            title,
            rating,
            discription,
            img
        } = this.state

        return(

        <div 
            className={classname('fancyCard',css`
                width: 200px;
                border-radius: 15px;
                position: relative;
                text-align: center;
                transition: all ease-in-out 0.75s; 
                cursor:pointer;
        
                    &:hover {
                        transform: rotateX('180')
                    }
            `)}>
        
            <div 
                className={css`
                    overflow: hidden;
                    display: inline-block;
                    width: 200px;
                    height: 315px;
                    border-radius:inherit;
                    margin-bottom: 6px;
                    transition: all ease-in-out 0.75s;
        
                    `}>
        
                <img 
                    className={classname('fancyCard__img',css`
                        width: 100%;
                        border-radius: inherit;
                        z-index: 1;
                        transition: all ease-in-out 0.75s;
                        
                    `)}
                    src={img} 
                    alt={title}>
                </img>
            </div>
        
            <h5 
                className={classname('fancyCard__title',css`
                    line-height: 1.3;
                    font-size: 12px;
                    width: 80%;
                    bottom: 15px;
                    color: black;
                    margin: 6px auto;
                    cursor:pointer;
                    min-height: 30px;
                    transition: all ease-in-out 0.2s;
        
                &:hover {
                    color: ${colors.primaryDarkColor};
                    font-weight: bold;
                    }
                `)}>
                {title}</h5>
        
            <div 
                className={classname('fancyCard__rating',css`
                    width: 100%;
                    margin: 0 auto;
                    transition: all ease-in-out 0.75s ;
                    z-index: 15;
                    font-size:12px;
                    margin-bottom: 12px;
                `)}>
                <Rating  
                    max={10} 
                    value={5} 
                    rating={rating}>
                </Rating>
            </div>

            <Likebtn movieId={id} />


            <div 
            className={css`
                position:absolute;
                bottom: -10px;
                background-color: white;
                border-radius: inherit;
                height: 55%;
                width: 100% ;
                z-index: -1;
                transform: scale(1.15);
                border: solid 0.5px ${colors.lightGrey};
                transition: box-shadow ease-in-out 0.3s;
                
            div:hover > & {
                    box-shadow: 0 2.5px 15px -7.5px;
                }

                `}></div>
        </div>
        )
    }
}

export default FancyCard;