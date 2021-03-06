import { Link } from 'react-router-dom'

const Article = ({ title, description, description2, textBtn, textBtn2, img }) => {
  return (
      <article className="article">
        <div className="article__content">
          <h4 className="article__title">{title}</h4>
          <div className="article__text__container">
            <p className="article__text">{description}</p>
            <p className="article__text">{description2}</p>
          </div>
          {textBtn && (
            <div className="article__btns">
              <button className="article__btn app">
                <span>{textBtn}</span>
              </button>
              {textBtn2 && (
                <Link to="/accueil">
                  <button className="article__btn site">
                    <span>{textBtn2}</span>
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>
        <figure className="article__media">
          <img src={process.env.PUBLIC_URL + `./assets/images/${img}`} alt={title} className="article__media__img"/>
        </figure>
      </article>
  );
};

export default Article;
