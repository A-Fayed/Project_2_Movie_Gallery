import React, { Component }from 'react';
import { css } from 'emotion';

import { SearchContext } from './searchContext';

class HeaderSearch extends Component {
    static contextType = SearchContext;

    handlechange = (e) => {
        let searchText = e.target.value.replace(/\s/g, "").toLowerCase()
        this.context.search(searchText);
    }
    
    render(){
        return (
            <>
                <form className={css`
                    display:inline-block;
                    `}>
                    <label className={css`
                        width: 1px;
                        height: 1px;
                        position: absolute;
                        margin: -1px;
                        overflow: hidden;
                        clip: rect(0, 0, 0, 0);
                        display: block;
                    `} htmlFor='search'>Search</label>
                    <input 
                        type = 'text' 
                        name='search' 
                        id = 'search' 
                        placeholder='Search Here ...' 
                        onChange = {this.handlechange}
                        className = {css`
                            padding: 10px 8px;
                            background-color: #f5f5f5;
                            color: #969594;
                            border: none;
                            border-radius: 6px;
                            margin-left: 30px;
                            `}></input>
                </form>
            </>
        )
    }
}


export default HeaderSearch;