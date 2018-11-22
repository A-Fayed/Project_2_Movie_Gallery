import React, { Component } from "react";
import { css } from 'emotion';
import PropTypes from 'prop-types';
import classname from 'classnames'; 
import { colors } from "./colors";

class Rating extends Component {
  static propTypes = {
    max: PropTypes.number,
    value: PropTypes.number
  };

 static defaultProps = {
    max: 10,
    value: 5,
    rating: 0
 }

 
 render(){
     let {rating, value ,max} = this.props;
     let starRating = rating * value / max;
     let starNumber = Math.floor(starRating)
     let remainder = starRating - starNumber;
     let halfStar = remainder >= 0.25 && remainder <= 0.75;
     let fullStarsCount = Array.from(Array(starNumber + (remainder > 0.75 ? 1 : 0)))
     let halfStarsCount = Array.from(Array((halfStar ? 1 : 0)));
     let starsTotal = Array.from(Array(5));
        return (
            <>
            <div className={classname('rating', css`
            display: flex;
            align-content:center;
            justify-content:center;
            position:relative;
            `)}>
            <div className={css`
                position:relative;
                `} >
                <div className={classname('ratingStars',css`
                    color: ${colors.starsHighlight};
                    position:absolute;
                `)}>
                    {fullStarsCount.map((x, index) => <i key={index} className="fa fa-star" />)}
                    {halfStarsCount.map((x, index) => <i key={index} className="fa fa-star-half" />)}
                </div>
                <div className={classname('referenceStars', css`
                    color: ${colors.lightGrey};
                `)}>
                    {starsTotal.map((x, index) => <i key={index} className="fa fa-star" />)}
                </div>
            </div>
                <div className={classname('ratingNumber',css`
                    margin-left:8px;
                    color:${colors.starsHighlight};
                `)}>
                    <span>{rating}</span>
                </div>
            </div>
            </>
        )
    }
}

export default Rating;