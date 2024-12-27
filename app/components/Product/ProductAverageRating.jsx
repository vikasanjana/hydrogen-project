import { StarIcon } from '@heroicons/react/16/solid';
import React from 'react'
import RatingsStars from './RatingsStars';

const ProductAverageRating = ({ rating, ratingCount, isQuickView = false }) => {
    const parsedRating = JSON.parse(rating);
    const { scale_min, scale_max, value } = parsedRating;

    {
        if (isQuickView) {
            return (
                <div className='average-rating'>
                   <RatingsStars rating={parseFloat(value).toFixed(1)} maxRating={parseInt(scale_max)} ratingCount={ratingCount}  />
                </div>
            )
        } else {
            return (
                <div className='average-rating'>
                    <StarIcon />
                    <span className="average-rating-text">{parseFloat(value).toFixed(1)}</span>
                    <span className='totalRating'>({ratingCount})</span>
                </div>
            )
        }
    }

}

export default ProductAverageRating
