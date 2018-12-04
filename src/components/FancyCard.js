import React, { Component } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import classname from 'classnames';

import Rating from './Rating';
import Likebtn from './LikeBtn';
import { colors } from './Colors';
import Spinner from './Spinner';
import { Link } from '@reach/router';



class FancyCard extends Component {
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        rating: PropTypes.number,
        discription: PropTypes.string,
        link: PropTypes.string,
        img: PropTypes.string
    }

    static propsDefault = {
        id: 0,
        title: '',
        rating: 0,
        discription: '',
        img: '',
        link: ''
    }

    state = {
        id: this.props.id,
        title: this.props.title,
        rating: this.props.rating,
        discription: this.props.discription,
        img: this.props.img,
        link: this.props.link,
        imgloading: true
    }

    handleImageLoaded = () => {
        this.setState({
            imgloading: false
        },() => console.log(this.state.link))
    }


    render(){
        let {
            id,
            title,
            rating,
            discription,
            img,
            link,
            imgloading
        } = this.state

        let { handleImageLoaded } = this;

        return(
        <div 
            className={classname('fancyCard',css`
                width: 200px;
                border-radius: 15px;
                position: relative;
                text-align: center;
                transition: all ease-in-out 0.75s; 
            `)}>
            <Link to={link}>
                <div 
                    className={css`
                        overflow: hidden;
                        display: inline-block;
                        width: 200px;
                        height: 300px;
                        border-radius:15px;
                        margin-bottom: 6px;
                        transition: all 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);;
                        position: relative;
                        background-color: ${ imgloading ? 'rgba(100,100,100,0.05)' : 'none'};
                        box-shadow: ${ imgloading ? '0 0 5.5px 0.05px rgba(0,0,0,0.15)' : 'none'};
                        `}>
                    { imgloading && <Spinner /> }
                    <img
                        onLoad={handleImageLoaded} 
                        src={img} 
                        alt={title}
                        className={classname('fancyCard__img',css`
                            width: 100%;
                            border-radius: 15px;
                            z-index: 1;
                            transition: all 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);
                            display: ${ imgloading ? 'none' : ''};
                            cursor: pointer;

                            div:hover > & {
                                transform: rotateY(180deg);
                            }
                        `)}
                        >
                    </img>
                
                    
                    <span 
                    className={css`
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            padding: 20px;
                            font-size: 13px;
                            text-align: center;
                            text-shadow: 0 1px 0px rgba(0, 0, 0, 0.25);
                            color: #fff;
                            background: rgba(0, 0, 0, 0.7);
                            border-radius: inherit;
                            transform: rotateY(-180deg);
                            backface-visibility: hidden;
                            transition: all 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);

                        div:hover > & {
                                transform: rotateY(0deg);
                            }
                    
                    &:before {
                            position: absolute;
                            border-radius: inherit;
                            content:'';
                            top: 0;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            background-color: rgba(255 ,255 ,255 ,0.5);
                            opacity: 0.55;
                            z-index: 5;
                            transition: all 500ms cubic-bezier(0.86, 0.05, 0.29, 0.88);;
                            backface-visibility: hidden;
                            transform: rotateY(180deg);

                            div:hover > & {
                                transform: rotateY(0deg);
                            }
                        }

                    `}>         
                    {discription.length > 300 ? `${discription.slice(0, 300)}...` : discription}

                    </span>
                </div>
            </Link>
        
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