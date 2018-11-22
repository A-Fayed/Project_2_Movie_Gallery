import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classname from 'classnames';
import FancyCard from './FancyCard';
import { SearchContext } from './searchContext';


export default class FabcyCardList extends Component {
    static propTypes = {
        movies: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            rating: PropTypes.number,
            discription: PropTypes.string,
            img: PropTypes.string
        }))
    };

    static defaultProps = {
        movies: [],
    };

    static contextType = SearchContext;

    state = {
        searchedtext: this.context.searchQuery,
    }

    turnToCard (movies) {
    return movies.map( movie =>  <FancyCard
            key= {movie.id} 
            id= {movie.id}
            title= {movie.title}
            rating= {movie.rating}
            discription= {movie.discription}
            img= {movie.img}
            /> )
    }

    render() {
        let {
            movies
        } = this.props

        let {
            searchedtext
        } = this.state
        
        this.context.searchQuery.length > 0 && console.log(this.state.newMovie);
        
        return(
            <>
                    <div className={css`
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            grid-gap: 67px;
                            justify-content:space-evenly;
                            max-width: 1000px;
                            margin: 0 auto;
                            transition: all ease-in-out 0.5s;
                            `}>

                    {  
                        searchedtext.length > 0 ? this.turnToCard(movies) : 
                        this.turnToCard(movies.filter(movie => movie.title.replace(/\s/g, "").toLowerCase().includes(this.context.searchQuery)))
                    }
                    
                    {
                       movies.length === 0 && <p> No results Found</p>
                    }
                    </div>
                </>
        )
    }
}