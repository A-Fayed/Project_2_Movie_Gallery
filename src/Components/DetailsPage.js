import React from 'react';
import api from '../utils/api';
import { css } from 'emotion';
import PropTypes from 'prop-types';

import { getImageURL } from '../utils/helpers';
import Rating from './Rating';
import Likebtn from './LikeBtn';
import { colors } from './Colors';
import SimpleCard from './SimpleCard';
import Spinner from "./Spinner";
import { Link } from 'react-router-dom';
import Header from './Header';

export default class DetailsPage extends React.PureComponent {
  static propTypes = {
    movies: PropTypes.string
  };
  
  static defaultProps = {
    movies: '',
  };
  
  state = {
    movie: {},
    movieCast: [],
    Loading: true,
    similarMovies: [],
    movieURL: ''
  };
  
  handleMovieDetails = (details) => {
    this.setState({
      movie: {
        id: details.id,
        title: details.title,
        description : details.overview,
        rating: details.vote_average,
        coverImage: getImageURL(details.backdrop_path,'w1280'),
        releaseDate: details.release_date,
        genres: details.genres
    }
  });
};

handleMovieCast = castData => {
  this.setState({
    movieCast: castData
  });
};

handleSimilarMovies = similarMovies => {
  this.setState({
    similarMovies: [
      ...similarMovies.map( movie =>   
        ({
          id: movie.id,
          title: movie.title,
          description : movie.overview,
          rating: movie.vote_average,
          Image: getImageURL(movie.poster_path, 'w342'),
          releaseDate: movie.release_date
        }))
      ]
    });
  }
  
  handleMovieURL = movie => {
    this.setState({
      movieURL: movie.id
    }, console.log(this.state.movieURL))
  }
  
  handleLoad = () => {
    this.setState({
      Loading: false
    })
  }
  
  getData = () => {
    let { movieId } = this.props.match.params
    api.getMovie(movieId).then(this.handleMovieDetails)
    api.getCredits(movieId).then( data => this.handleMovieCast(data.cast.slice(0, 4)))
    api.getSimilarMovies(movieId).then( data => this.handleSimilarMovies(data.results.slice(0, 9)))
  }
  
  componentDidMount () {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.movieId !== prevProps.match.params.movieId) {
      console.log(this.props)
      this.getData(this.props);
    }
  }
  
  render () {
    let {
      title,
      description,
      rating,
      coverImage,
      releaseDate,
      genres
    } = this.state.movie
    
    
    let { 
      movieCast,
      similarMovies,
      Loading
    } = this.state 
    
    let { handleLoad } = this
    
    return (
      <>
      <Header />
          {
            Loading && 
            <Spinner 
            className={css`
              transform: scale(2);
            `}
            />
            }
        <main 
          className={css`
            display: ${ !Loading ? 'hidden' : 'none'};
          `}
          >
          <div 
            className={css`
              height: auto;
              color: white;
            `}
            >
            
            <h2 
              className={css`
                position:absolute;
                top: 35%;
                left: 50%;
                transform: translateX(-50%);
                z-index: 2;
                `}
              >
              {title}</h2>

              <div 
                className={css`
                  position: relative;
                  
                  &:after {
                    position: absolute;
                    content:'';
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background-image: linear-gradient(rgba(255 ,255 ,255 ,0), black);
                    opacity: 0.55;
                    transition: all ease-in-out 0.75s;
                  }
                  `}>
                  <img 
                    src={coverImage} 
                    onLoad={ handleLoad }
                    alt='test' 
                    className={css`
                      width: 100%;
                      display: block;
                  `}/>
              </div>
          </div>
          
          <div 
            className={css`
              position: relative;
              top: -100px;
              margin: 0 auto;
              width: 800px;
              height: auto;
              background-color: white;
              border-radius: 10px;
              padding: 40px;

              & > div {
                border-bottom: solid 1px ${colors.lightGrey};
                padding-bottom: 25px;
              }

              & > div + div {
                padding: 25px 0;
              }

              & > div h3 {
                margin: 0;
              }
            `}>

              <div 
                className={css`
                  display: flex;
                  justify-content: space-between;
                  `}>
                <div>
                  <Rating rating={rating} />
                  <p 
                    className={css`
                      font-size: 12px;
                      margin: 0;
                  `}>
                  Released {releaseDate}</p>
                </div>

                <Likebtn />
              </div>
              <div className={css`
                display: flex;
                margin-right: auto;
                margin-left: auto;

                `}>
                <h3>Genres</h3>
                <div className={css`
                  margin-left: auto;
                  `}>
                  
                  {
                    !Loading && genres.map(genre =>
                    <Link 
                      key={genre.id}
                      to={`/genres/${genre.id}/${genre.name}`}
                      className={css`
                        color: black;
                        height: 28px;
                        padding: 2px 12px;
                        background-color: ${colors.lightGrey};
                        border-radius: 5px;
                        text-decoration: none;
                        font-weight: bold;
                        font-size: 12px;
                        margin-left: 15px;                      
                        `}
                      >
                      {genre.name}
                    </Link>
                    )
                  }
                </div>

              </div>
              <div>
                <h3>Overview</h3>
                <p>{description}</p>
                <h3>Cast</h3>
                <div 
                  className={css`
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-gap: 67px;
                    `}>
                  {
                    movieCast.map((castProfile, index) => 
                    <div
                      key={index} 
                      className={css`
                        padding: 20px 0;
                        text-align: center;
                        `}>
                        <img
                          src={getImageURL(castProfile.profile_path)}
                          alt={castProfile.name}
                          className={css`
                            width: 100%;
                            border-radius: 15px;
                            cursor: pointer;
                        `}/>
                        <h4 
                          className={css`
                            margin: 5px 0;
                            font-size: 16px;
                            transition: all ease-in-out 0.35s;
                            cursor: pointer;

                            &:hover {
                              color: ${colors.primaryColor}
                            }
                        `}>
                          {castProfile.name}</h4>

                        <p 
                          className={css`
                            margin: 0;
                            font-size: 14px;
                            color: grey;
                        `}>
                          {castProfile.character}</p>
                      </div>
                    )
                  }
                </div>
              </div>
              <div>
                <h3>Similar Movies</h3>
                <div 
                  className={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 50px;
                    padding-top: 20px;
                      `}>
                  {
                    similarMovies.map(movie => <SimpleCard key={movie.id} {...movie} />)
                  }
                </div>
              </div>
          </div>
        </main>
        </>
      ) 
  }
}
