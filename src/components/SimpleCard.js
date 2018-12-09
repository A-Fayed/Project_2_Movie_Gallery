import React from "react";
import Rating from './Rating';
import { css } from 'emotion';
import classname from 'classnames';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Spinner from "./Spinner";
import { Link } from 'react-router-dom';




class SimpleCard extends React.PureComponent {
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        rating: PropTypes.number,
        Image: PropTypes.string,
    }

    static propsDefault = {
        id: 0,
        title: '',
        rating: 0,
        Image: '',
    }

    state = {
        hover: false,
        loaded: false
    }

    handlehover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    handleload = () => {
        this.setState({
            loaded: true
        })
    }
    render(){

        let {
            id,
            title,
            rating,
            Image,
            onClick
        } = this.props

        let { 
            handleload,
            handlehover 
        } = this

        return (
            <>  
                <Link to={`/movie/${id}`}>
                    <div  
                        onClick={onClick}  
                        onMouseEnter={handlehover}
                        onMouseLeave={handlehover} 
                        className={classname('simpleCard',css`
                            max-width: 200px;
                            cursor: pointer;
                            height: ${!this.state.loaded ? '300px' : 'auto'};
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
                                transition: all ease-in-out 0.5s;
                                }

                            &:hover:after {
                                background-color: #1db4c9;
                                background-image:none;
                                opacity: 0.80;
                            }

                            &:hover > img {
                                transform: scale(1.1)
                            }
                                `)}
                            >

                        { !this.state.loaded && <Spinner/>}
                        <LazyLoad height={200} once>
                            <img 
                                onLoad={ handleload }
                                className={classname('simpleCard__img',css`
                                    width: 100%;
                                    display: block;
                                    border-radius: inherit;
                                    z-index: 1;
                                    transition: all ease-in-out 0.5s;
                                    display: ${ this.state.loaded ? 'hidden' : 'none'};

                                    &:hover {
                                    }

                                `)} 
                                src={Image} 
                                alt={title}>
                            </img>
                        </LazyLoad>

                        <h5 
                            className={classname('simpleCard__title',css`
                                position: absolute;
                                min-height: 25px;
                                line-height: 1.3;
                                font-size: 16px;
                                bottom: 15px;
                                color: white;
                                width: 100%;
                                margin: 0;
                                padding: 0 20px;
                                transition: all ease-in-out 0.5s;
                                z-index: 10;
                                
                            div:hover > & {
                                transform: translateY(-125%);
                            }

                            `)}>{title}</h5>
                        <div className={classname('simpleCard__rating',css`
                            position: absolute;
                            bottom: -25px;
                            width: 100%;
                            margin: 0 auto;
                            opacity: 0;
                            transition: all ease-in-out 0.5s ;
                            z-index: 15;
                            
                            div:hover > & {
                                bottom: 25px;
                                opacity: 1;
                            }
                            
                            `)}>

                            <Rating  max={10} value={5} rating={rating}></Rating>
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}

export default SimpleCard;