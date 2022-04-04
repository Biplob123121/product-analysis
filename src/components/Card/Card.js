import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name, picture, rev, ratings} = props.customer;
    //console.log(name);
    return (
        <div className='cards'>
            <div className='card'>
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <p>{rev}</p>
                <p><small>Ratings : {ratings} star</small></p>
            </div>
        </div>
    );
};

export default Card;