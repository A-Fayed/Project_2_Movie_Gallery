import React from 'react';
import { css } from 'emotion';
import { colors } from './colors';

const Logo = () => (
    <>
        <h1 className={css`
        display: inline-block;
        margin: 0;
        padding: 0;
        line-height: 1;
        font-size: 24px;

        &:after {
            height: 32px;
            vertical-align:middle;
            width: 1px;
            background-color: ${colors.lightGrey};
            display: inline-block;
            margin-left: 30px;
            content:'';
        }
        `}
        >Level<span className={css`
        background-color: #1fbcd2;
        color: #fff;
        padding: 0 4px;
        border-radius: 6px;
        margin-left: 4px;
        `}
        >up</span></h1>
    </>
)

export default Logo;