import React, {  Component } from 'react';
import classname from 'classnames';
import { css } from 'emotion';

import { MyCounter } from './Context';

export default class Likebtn extends Component {
    state = {
        movieId: this.props.movieId
    }


    handleClick = () => {
        this.props.handleButton();
    }

    render() {
        return (
            <>
                <div 
                    onClick={ () => this.handleClick()} 
                        className={classname('likeBtn',css`
                            cursor: pointer;
                            display: inline-block;
                            color: white;
                            font-size: 12px;
                            background-color: #1db4c9;
                            border-radius:6px;
                            height: 28px;
                        `)}>

                    <span 
                            className={classname('likeBtn__icon',css`
                                padding: 6px;
                                color: 'white';
                                border-radius:  6px 0 0 6px;
                                transition: all ease-in-out 0.5s;
                            `)}>
                        <i  className= {this.props.savedMovie ? "fas fa-check" : "fa fa-heart"}></i>
                    </span>
                    <span 
                        className={classname('likeBtn__Action',css`
                            height: inherit;
                            font-size: 12px;
                            padding: 6px;
                            display: inline-block;
                            background-color: #1fbcd2;
                            border-radius:  0 6px 6px 0;
                            text-align: center;
                            min-width: 90px;
                            transition: all ease-in-out 0.5s;
                        `)}>
                        {this.props.savedMovie ?'Favorite' :'Save Movie' }
                    </span>
                </div>
            </>
        )
    }
} 