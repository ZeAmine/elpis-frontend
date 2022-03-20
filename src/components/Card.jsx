import React from 'react';

const Card = ({ title, img }) => {
  return (
    <div className="card">
      <figure className="card__media">
        <img src={process.env.PUBLIC_URL + `./assets/images/${img}`} alt={title} className="card__media__img"/>
      </figure>
      <h4 className="card__caption__title">{title}</h4>
    </div>
  );
};

export default Card;
