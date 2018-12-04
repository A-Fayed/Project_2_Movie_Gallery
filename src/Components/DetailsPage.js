import React, { Component } from 'react';
import api from '../utils/api';
import { css } from 'emotion';
import PropTypes from 'prop-types';

import { getImageURL } from '../utils/helpers';
import Rating from './Rating';
import Likebtn from './LikeBtn';
import { colors } from './Colors';
import SimpleCard from './SimpleCard';


export default class DetailsPage extends Component {
  static propTypes = {
    movies: PropTypes.string
  };

static defaultProps = {
    movies: '',
};

state = {
  movie: {},
  movieCast: [],
  similarMoviesLoading: true,
  similarMovies: []
}

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
  })
}

handleMovieCast = (castData) => {
  this.setState({
    movieCast: castData
  })
}

handleSimilarMovies = (similarMovies) => {
  this.setState({
    similarMovies: [
      ...similarMovies.map( movie =>   
        ({
          id: movie.id,
          title: movie.title,
          description : movie.overview,
          rating: movie.vote_average,
          Image: getImageURL(movie.poster_path),
          releaseDate: movie.release_date
        })
      )
    ]
  })
}

componentDidMount () {
  let { movieId } = this.props
  api.getMovie(movieId).then(this.handleMovieDetails)
  api.getCredits(movieId).then( data => this.handleMovieCast(data.cast.slice(0, 4)))
  api.getSimilarMovies(movieId).then( data => this.handleSimilarMovies(data.results.slice(0, 8)))
}

  render () {
    let {
      title,
      description,
      rating,
      coverImage,
      releaseDate,
    } = this.state.movie

    console.log(this.props)

    let { 
      movieCast,
      similarMovies
    } = this.state 
    
    return (
        <>
          <div 
            className={css`
              height: auto;
              color: white;
            `}>
            
            <h2 className={css`
              position:absolute;
              top: 35%;
              left: 50%;
              transform: translateX(-50%);
              z-index: 2;
              `}
              >
              {title}</h2>

              <div className={css`
                &:after {
                  position: absolute;
                  content:'';
                  top: 0;
                  bottom: 100px;
                  right: 0;
                  left: 0;
                  background-image: linear-gradient(rgba(255 ,255 ,255 ,0), black);
                  opacity: 0.55;
                  transition: all ease-in-out 0.75s;
                }`}>

                  <img 
                    src={coverImage} 
                    alt='test' 
                    className={css`
                      width: 100%;
                      display: block;
                  `}/>
              </div>
          </div>
          
          <div className={css`
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

              <div className={css`
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
              <div>
                <h3>Genres</h3>
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
                    <div className={css`
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
                    similarMovies.map(movie => <SimpleCard key={movie.id} {...movie} link={`/movie/${movie.id}`} />)
                  }
                </div>
              </div>
          </div>
        </>
      ) 
  }
}
