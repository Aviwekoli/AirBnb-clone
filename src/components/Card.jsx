import React from 'react';
import star from '../images/star.png';

// eslint-disable-next-line react/prop-types
const Card = ({ coverImg, stats: {rating, reviewCount}, location, title, price, openSpots }) => {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${coverImg}`} className="card--image" alt={title} />
            <div className="card--stats">
                <img src={star} className="card--star" alt="star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span> 
            </div>
            <p className="card-title">{title}</p>
            <p className="card--price">
                <span className="bold" >From ${price}</span> / person
            </p>
        </div>
    );
};

export default Card;