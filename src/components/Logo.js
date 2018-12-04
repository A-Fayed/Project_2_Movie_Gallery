import React from 'react';
import { css } from 'emotion';
import { colors } from './Colors';
import { Link } from '@reach/router';

const Logo = () => (

    <>
        <Link 
            to='/'
            className={css`
                text-decoration: none;
                color: black;
                transition: color 500ms;

                &:hover {
                color: ${colors.primaryDarkColor};
                }
          `}
            >
            <h1 className={css`
            display: inline-block;
            margin: 0;
            padding: 0;
            line-height: 1;
            font-size: 24px;
            cursor: pointer;

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
        </Link>
    </>
)

export default Logo;