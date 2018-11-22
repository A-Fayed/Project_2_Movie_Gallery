import React from 'react';
import { Component } from 'react';
import { css } from 'emotion';
import Logo from './Logo';
import Navmenu from './Navmenu';
import HeaderSearch from './HeaderSearch';
import ItemCounter from './ItemCounter';
import { colors } from './colors'
// import { colors } from '../../../../Day 16 ( Final Day react )/levelup/src/variables'; How did vs automatiaclly got the path ???!!!


class Header extends Component {
    render(){
        return (
            <>
                <header className={css`
                    border-top: 2px solid ${colors.primaryColor};
                    background-color: white;
                    position: relative;
                    box-shadow: 0 -2px 10px ;
                    `}>
                    <div className={css`
                        display:flex;
                        margin-right: auto;
                        margin-left: auto;
                        max-width: 1000px;
                        align-items:center;
                        padding: 12px 0;`}>
                        <Logo />
                        <Navmenu />
                        <HeaderSearch />
                        <ItemCounter />
                    </div>
                </header>
            </>
        );
    }
}

export default Header;