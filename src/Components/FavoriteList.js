import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { connect } from 'react-redux';
import FancyCard from './FancyCard';
import store from './Store';

const root = document.createElement('div');
root.id = 'Rootroot'

class FavoriteList extends React.PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func
  } 
  
  static defaultProps = {
    visible: false,
    onClose: () => null
  }

  state = {
    savedMovies : this.props.savedMovies
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.savedMovies !== this.props.savedMovies) {
      this.setState({
        savedMovies: [...nextProps.savedMovies]
      }, () => console.log('CHANGE'))
       
    }
  }
  
  componentWillMount () {
    document.body.appendChild(root)
  }

  componentWillUnmount () {
    root.remove();
  }

  
  render () {
    
    let {
      visible,
      onClose
      } = this.props

      let { savedMovies } = this.state
    
    if ( !visible ) {
      return null
    }

    console.log(this.props.savedMovies)
    console.log(savedMovies)

    
    return (
      ReactDOM.createPortal (
      <>
        <div 
          className={css`
            position: fixed;
            top: 0;
            right: -300px;
            width: 300px;
            height: 100%;
            background-color: white;
            box-shadow: 0 0 50px -5px black;
            z-index:999;
            animation: slideIn 350ms ease-out forwards;
            overflow: auto;
            justify-content: center;
            grid-row-gap: 50px;

            @keyframes slideIn {
              to {
                right: 0;
              }
            } 
          `}
          >
            {
              savedMovies.map(movie => <FancyCard key={movie.id} {...movie} />)
            }
        </div>
        <div 
          onClick={onClose}
          className={css`
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 900;
            background-color: black;
            opacity: 0;
            animation: fadeIn 350ms ease-out forwards;

            @keyframes fadeIn {
              to {
                opacity: 0.5;
              }
            } 
            `}
          /> 
      </>
      ,root )
    )
  }
}

const mapStateToProps =  (state) => {
  return {
    savedMovies: state.savedMovies
  }
}

export default connect(mapStateToProps)(FavoriteList);