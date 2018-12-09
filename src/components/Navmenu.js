import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom'
import { colors } from './Colors';

class Navmenu extends Component {
    render(){
        return(
        <>
            <nav>
                <ul className ={css`
                    line-height: inherit;
                    display: inline-block;
                    margin: 0;
                        li {
                            display:inline-block;
                            margin-right: 15px;

                        }
                `} >
                    <li>
                        <Link 
                            to='/'
                            className={css`
                                color: inherit;
                                text-decoration: none;
                                transition: all ease-in-out 0.25s;

                                &:hover {
                                    color: ${colors.primaryColor};
                                }
                                `}
                            >
                            Discover</Link></li>
                    <li>
                        <Link 
                            to='/genres/'
                            className={css`
                                color: inherit;
                                text-decoration: none;
                                transition: all ease-in-out 0.25s;

                                &:hover {
                                    color: ${colors.primaryColor};
                                }
                            `}
                            >
                            Genre</Link></li>
                </ul>
            </nav>
        </>
        )
    }

} 


export default Navmenu;