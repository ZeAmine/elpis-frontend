import { useState } from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <figure className="hero__bg">
          <img src={process.env.PUBLIC_URL + "./assets/images/1.jpg"} alt="réfugiés" className="hero__bg__img"/>
        </figure>
        <div className="hero__content">
          <h1 className="hero__content__title">
            Personne ne devrait <br/> subir les horreurs <br/> de la guerre.
          </h1>
          <p className="hero__content__subtitle">
            Nous avons besoin de vous pour rejoindre le réseau <br/> et redonner de l'espoir aux réfugiés.
          </p>
          <div className="hero__content__btns">
            <Link to="/inscription">
              <button className="hero__content__btn-cta" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <span>S'inscrire dès maintenant</span>
              </button>
            </Link>
            <button className="hero__content__btn-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" className="hero__content__btn__icon">
                <path fill="white" d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
