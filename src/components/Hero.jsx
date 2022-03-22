import { useState } from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className="hero" id="home">
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
          <Link to="/inscription">
            <button className="hero__content__btn-cta" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <span>S'inscrire dès maintenant</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
