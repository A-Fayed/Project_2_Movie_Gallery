import React, { Component } from 'react';
import PageTitle from './PageTitle';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import api from '../utils/api'; 
import { getImageURL } from '../utils/helpers';
import LoadBtn from './LoadBtn';
import SimpleCard from './SimpleCard';

export default class GenresPage extends Component {
  static propTypes = {
    genreID: PropTypes.string
  }
  
  static defaultProps = {
    genreID: ''
  }

  state = {
    genreMovies: [],
    isLoaded: true,
    page: 0,
  }

  loadMore = () => {
    this.setState({
        isLoaded: false,
    }, () => api.getMoviesFromGenre(this.props.genreID, {
        page: this.state.page + 1})
        .then(this.handleMovies))
}

  handleMovies = (data) => {
    this.setState({
      isLoaded: true,
      page: data.page,
      genreMovies: [
        ...this.state.genreMovies,
        ...data.results.map( movie => ({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          discription: movie.overview,
          Image: getImageURL(movie.poster_path, 'w342')
        })
        )
      ]
    }, () => console.log(this.props.genreId))
  }
  
  componentDidMount () {
    api.getMoviesFromGenre(this.props.genreId).then(data => this.handleMovies(data) )
  }

  render () {
    let { genreMovies, isLoaded } = this.state
    return (
      <>
        <PageTitle pageTitle = {`Genre: ${this.props.genreName}`} />
        <div className={css`
          width: 1000px;
          margin: 0 auto;
          /* display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 20px; */
          `}>
          {/* <div className={css`
            display: inline-block;
            background-color: white;
            border-radius: 15px;
            padding: 22px;
            padding-right: 0;
            grid-column: 1;
            grid-row: 1 / 7; 
            `}>
              <ul className={css`
                list-style: none;
                margin: 0 ;
                padding: 0;

                & li {
                  font-weight: bold;
                  margin-bottom: 10px;
                }
                `}>
                <li>Actions</li>
                <li>Adventure</li>
                <li>Comedy</li>
                <li>Drama</li>
                <li>Science Fiction</li>
              </ul>
            </div> */}
            <div 
              className={css`
                /* grid-row: 1 / 5;
                grid-column: 2 / 7; */
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-gap: 20px;

              `}>
              {
                genreMovies.map(movie => <SimpleCard {...movie} />)
              } 
            </div>
        </div>
        <LoadBtn isLoaded={isLoaded} onClick={this.loadMore} />
      </>
    )
  }
}