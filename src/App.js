import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header' ;
import Rating from './components/Rating';
import SimpleCard from './components/SimpleCard';
import FancyCard from './components/FancyCard';
import DiscoverPage from './components/DiscoverPage';
import MyCounter from './components/Context';
import { MyProvider } from './components/Context';
import { SearchProvider } from './components/searchContext';




class App extends Component {
  render() {
    return (
      <>
      <MyProvider>
        <SearchProvider>
          <>
            <Header />
            <DiscoverPage />
          </>
        </SearchProvider>
      </MyProvider>
      </>
    );
  }
}

export default App;
