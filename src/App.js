import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header' ;
import { MyProvider } from './Components/Context';
import { SearchProvider } from './Components/SearchContext';
import DetailsPage from './Components/DetailsPage';
import DiscoverPage from './Components/DiscoverPage';
import GenresPage from './Components/GenresPage';
import { Router } from '@reach/router';
import Test from './Components/TestComponent'

class App extends Component {
  render() {
    return (
      <>
      <MyProvider>
        <SearchProvider>
          <>
            <Header />
            <Router>
              <DiscoverPage path="/" />
              <DetailsPage path="/movie/:movieId" />
              <GenresPage path="/genres/:genreId/:genreName" />
            </Router>
          </>
        </SearchProvider>
      </MyProvider>
      </>
    );
  }
}

export default App;
