import React, { Component } from 'react';
import { css } from 'emotion';




class Navmenu extends Component {
    render(){
        return(
        <>
            <ul className ={css`
                line-height: inherit;
                display: inline-block;
                margin: 0;
                    li {
                        display:inline-block;
                        margin-right: 15px;
                    }
            `} >
                <li>Discover</li>
                <li>Genre</li>
            </ul>
        </>
        )
    }

} 


export default Navmenu;