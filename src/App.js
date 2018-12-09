import React, { Component } from 'react';
import './App.css';
import { MyProvider } from './Components/Context';
import { SearchProvider } from './Components/SearchContext';
import DetailsPage from './Components/DetailsPage';
import DiscoverPage from './Components/DiscoverPage';
import GenresPage from './Components/GenresPage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <>
      <MyProvider>
        <SearchProvider>
            <Router>
              <>
                <Route exact path='/' component={DiscoverPage}></Route>
                <Route path='/movie/:movieId' component={DetailsPage}></Route>
                <Route path='/genres/:genreId?/:genreName?' component={GenresPage}></Route> 
              </>
            </Router>
        </SearchProvider>
      </MyProvider>
      </>
    );
  }
}

export default App;
