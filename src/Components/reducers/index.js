const initialState = {
  savedMovies: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'ADD_MOVIE') {
    return {
      ...state,
      savedMovies: [
        ...state.savedMovies,
        {...action.movie}]
      
    }
  } else if ( action.type === 'REMOVE_MOVIE') {
    return {
      ...state,
      savedMovies: [...state.savedMovies.filter(movie => movie.id !== action.movie.id)]
    }
  }
  return state
};

export default rootReducer;