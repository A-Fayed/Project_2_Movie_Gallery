import React, { Component } from 'react';
import { css } from 'emotion';
import { colors } from './Colors';

export default class PageTitle extends Component {
    render(){
        let { pageTitle } = this.props;
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
                        {pageTitle}</h2>
                </div>
            </>
        )
    }
}