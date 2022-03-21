import React from 'react';

const Bubble = ({ title, description, img }) => {
  return (
    <div className="bubble">
      <figure className="bubble__media">
        <img src={process.env.PUBLIC_URL + `./assets/images/${img}`} alt={title} className="bubble__media__img"/>
      </figure>
      <div className="bubble__content">
        <h4 className="bubble__title">{title}</h4>
        <p className="bubble__description">{description}</p>
      </div>
    </div>
  );
};

export default Bubble;
