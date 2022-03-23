import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="notfound">
    <div className="notfound__wrapper">
      <h1 className="notfound__title">Whoooops !</h1>
      <div className="notfound__404">
        <span className="notfound__404__item">4</span>
        <span className="notfound__404__item">
          <figure className="notfound__404__media">
            <img src={process.env.PUBLIC_URL + "./assets/images/bg_404.png"} alt="background 404" className="notfound__404__media__img"/>
          </figure>
        </span>
        <span className="notfound__404__item">4</span>
      </div>
      <Link to="/accueil">
        <button className="notfound__404__btn">
          <span>Retour à l'accueil</span>
        </button>
      </Link>
    </div>
  </div>
);

export default NotFound;
