import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const Card = (props) => {
  console.log(props.item);
  return (
    <div className="card">
      <img src={props.item.imageUrl} className="card-img" />
      <div className="card-details">
        <div className="location">
          <p className="location-details">
            <FaLocationArrow className="location-icon" />{' '}
            {props.item.location.toUpperCase()}
          </p>
          <a href={props.item.googleMapsUrl}>Location on Map</a>
        </div>
        <h2 className="title-name">{props.item.title}</h2>
        <h4 className="date">
          {props.item.startDate} to {props.item.endDate}
        </h4>

        <p className="desc">{props.item.description}</p>
      </div>
    </div>
  );
};

export default Card;
