import React, { Component } from 'react';

export const SearchContext = React.createContext('defaultvalue');
export class SearchProvider extends Component {
    state = {
        searchQuery: '',
        search: (text) => {
                     this.setState({
                        searchQuery: text
                     })
        }
    }

    render () {
        return(
            <SearchContext.Provider value={this.state}>
                {this.props.children}
            </SearchContext.Provider>
        )
    }
}
