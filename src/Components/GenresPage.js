import React, { Component } from 'react';
import PageTitle from './PageTitle';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import api from '../utils/api'; 
import { getImageURL } from '../utils/helpers';
import LoadBtn from './LoadBtn';
import SimpleCard from './SimpleCard';
import { Link } from 'react-router-dom';
import { uuid } from 'uuid/v4';
import Header from './Header';
import { colors } from './Colors';


export default class GenresPage extends Component {
  static propTypes = {
    genreID: PropTypes.string
  }
  
  static defaultProps = {
    genreID: ''
  }

  state = {
    genreId: '',
    genreName: '',
    genreMovies: [],
    isLoaded: true,
    page: 0,
    genresTypes: []
  }

  loadMore = () => {
    this.setState({
        isLoaded: false,
    }, () => api.getMoviesFromGenre(this.props.match.params.genreId, {
        page: this.state.page + 1})
        .then(this.handleMovies))
}

  handleMovies = (data) => {
    this.setState({
      isLoaded: true,
      page: data.page,
      genreMovies: data.page > 1 ? [
        ...this.state.genreMovies,
        ...data.results.map( movie => ({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          discription: movie.overview,
          Image: getImageURL(movie.poster_path, 'w342')
        })
        )
      ] : [
        ...data.results.map( movie => ({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          discription: movie.overview,
          Image: getImageURL(movie.poster_path, 'w342')
        })
        )
      ]
    })
  }

  handleGenres = (data) => {
    this.setState({ 
      genresTypes: data.genres
    }, () => console.log(this.state))
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.genreId !== prevProps.match.params.genreId) {
      console.log(this.props)
      this.getData(this.props);
    }
  }

 getData () {
   let { genreId } = this.props.match.params;
   genreId && api.getMoviesFromGenre(genreId).then(data => this.handleMovies(data))
   api.getGenres().then((data) => {this.handleGenres(data); console.log(data)});
 }
  
  componentDidMount () {
    this.setState({
      genreId: this.props.match.params.genreId,
      genreName: this.props.match.params.genreName
    }, () => this.getData())
  }

  render () {
    let { 
      genreMovies,
      isLoaded,
      genresTypes 
    } = this.state

    let { genreName } = this.props.match.params

    return (
      <>
        <Header />
        <PageTitle pageTitle = {genreName ? 'Genre: ' + genreName : ' Choose Genre' } />
        <div className={css`
          width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 20px;
          `}>
          <div className={css`
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
                {
                  genresTypes.map(genre => <li key={genre.id}>
                    <Link 
                      to={`/genres/${genre.id}/${genre.name}`} 
                      onClick={()=>this.setState({})} 
                      className={css`
                        color: inherit;
                        text-decoration: none;
                        transition: all ease-in-out 0.25s;

                        &:hover {
                          color: ${colors.primaryColor};
                          font-weight: bold;
                    }
                        `}
                      >{genre.name}</Link></li> )
                }
              </ul>
            </div>
            <div 
              className={css`
                grid-row: 1 / 5;
                grid-column: 2 / 7;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-gap: 20px;

              `}>
              {
                genreMovies.map(movie => <SimpleCard key={uuid} {...movie} />)
              } 
            </div>
        </div>
        {genreName && <LoadBtn isLoaded={isLoaded} onClick={this.loadMore} />}
      </>
    )
  }
}