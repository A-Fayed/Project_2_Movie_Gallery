import React, { Component } from 'react';

export const MyCounter = React.createContext('defaultvalue');

export class MyProvider extends Component {
    state = {
        savedMoviesId: []
    }

    addMovie = (movieId) => {
        this.setState({
            savedMoviesId: [
                ...this.state.savedMoviesId,
                movieId
            ]
        },() => console.log(this.state))
    }

    removeMovie = (movieId) => {
        this.setState({
            savedMoviesId: [
                ...this.state.savedMoviesId.filter ((m => m !== movieId))
            ]
        },() => console.log(this.state))
    }

    render () {
        return(
            <MyCounter.Provider value={{
                state: this.state,
                addMovie: this.addMovie,
                removeMovie: this.removeMovie
            }}>
                {this.props.children}
            </MyCounter.Provider>
        )
    }
}
