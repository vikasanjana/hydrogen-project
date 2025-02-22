import { StarIcon } from "@heroicons/react/16/solid";
import React from "react";

const StarRating = ({ rating, maxRating, ratingCount }) => {
    // Calculate full and half stars
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = maxRating - fullStars - halfStar;

    return (
        <div className="ratingStarsWrapper">
            <div className="ratingStar">
                {/* Full stars */}
                {[...Array(fullStars)].map((_, index) => (
                    <StarIcon key={index} />
                ))}

                {/* Half star */}
                {halfStar === 1 && (
                    <StarIcon />
                )}

                {/* Empty stars */}
                {[...Array(emptyStars)].map((_, index) => (
                    <StarIcon key={index}/>
                ))}

                {/* Rating text */}
                <p className="average-rating-text">{rating}</p>
            </div>
            <div className="rating-count">{ratingCount} Reviews</div>
        </div>
    );
};

export default StarRating;
