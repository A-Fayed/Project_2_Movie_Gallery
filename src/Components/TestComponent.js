import React from 'react';
import { connect } from 'react-redux';

class Test extends React.Component {
  render() {
    console.log(this.props.movies)
    return (
      <button onClick={() => this.props.addMovie()}> Test Button</button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.savedMoviesId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: () => dispatch({type : 'ADD_MOVIE', movie: 'TEST1' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
