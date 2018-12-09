import React, { Component } from 'react';
import PageTitle from './PageTitle';
import FancyCardList from './FancyCardList';
import PropTypes from 'prop-types';
import api from '../utils/api'; 
import { getImageURL } from '../utils/helpers';
import LoadBtn from './LoadBtn';
import Header from './Header';



export default class DiscoverPage extends Component {
    static propTypes = {
        items : PropTypes.array
    }

    static propsDefault = {
        items: []
    }
    
    state = {
        items: [],
        isLoaded: false,
        page: 0,
    }

    loadMore = () => {
        this.setState({
            isLoaded: false,
        }, () => api.discover({
            page: this.state.page + 1})
            .then(this.handleItemsLoad))
    }

    handleItemsLoad = (data) => {
        this.setState({
            isLoaded: true,
            page: data.page,
            items: [
                ...this.state.items,
                ...data.results.map(movie => { 
                return {
                    id: movie.id,
                    title: movie.title,
                    rating: movie.vote_average,
                    discription: movie.overview,
                    img: getImageURL(movie.poster_path)
                }
            })]
        }, 
        () => console.log(data))
    }

    componentDidMount () {
        api.discover().then(this.handleItemsLoad)
    }

    render () {
        let {items, isLoaded} = this.state;
        return (
            <>
                <Header />
                <PageTitle pageTitle='Discover' />
                <FancyCardList isLoaded={isLoaded} movies= {items} />
                <LoadBtn isLoaded={isLoaded} onClick={this.loadMore} />
            </>
        )
    }
}