import React, { Component } from 'react';
import { css } from 'emotion';
import classname from 'classnames';
import { colors } from './Colors';

export default class PageTitle extends Component {
    render(){
        return(
            <>
                <div className={css`
                    height: 80px;
                    width: 100%;
                    background-color: ${colors.primaryColor};
                    margin-bottom: 60px;
                    text-align: center;
                    line-height: 80px;
                    color: white;
                    `}>
                    <h2 className={css`
                        font-weight: normal;
                        margin-top: 0;
                        `}>
                        Discover</h2>
                </div>
            </>
        )
    }
}