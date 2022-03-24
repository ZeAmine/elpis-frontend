import {useEffect, useState} from "react";
import { articles, services, slideItems } from '../data';
import { useGlobalContext } from '../context/AppContext';

//components
import Article from '../components/Article';
import Slider from '../components/Slider';
import Card from '../components/Card';

const Presentation = () => {
  const { index, setIndex } = useGlobalContext();

  useEffect(() => {
    const lastIndex = slideItems.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slideItems]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="pres">
      <div className="pres__wrapper">
        <figure className="pres__bg__media">
          <img src={process.env.PUBLIC_URL + "./assets/images/bg.png"} alt="line background" className="pres__bg__media__img"/>
        </figure>
        <h1 className="pres__title">Elpis, c'est quoi ?</h1>
        <section className="pres__articles">
          {articles.map(article => (
            <Article key={article.id} {...article}/>
          ))}
        </section>
        <section className="pres__hightlight">
          <figure className="pres__hightlight__media">
            <img src={process.env.PUBLIC_URL + "./assets/images/symbole.png"} alt="symbole" className="pres__hightlight__img"/>
          </figure>
          <h2 className="pres__hightlight__text">
            Créer des liens en aidant comme vous pouvez. Ce n'est pas insurmontable, c'est même très simple avec <strong>Elpis</strong>
          </h2>
        </section>
        <section className="pres__services">
          <h4 className="pres__services__title">Les services que je vais retrouver en tant que <strong>Réfugié</strong></h4>
          <div className="pres__services__cards">
            {services.map(service => (
              <Card key={service.id} {...service}/>
            ))}
          </div>
        </section>
        {/*<section className="pres__slider">*/}
        {/*  <div className="pres__slider__wrapper">*/}
        {/*  </div>*/}
        {/*</section>*/}
        <div className="section-center">
          {slideItems.map((slideItem, slideItemIndex) => (
             <Slider key={slideItem.id} slideItemIndex={slideItemIndex} {...slideItem}/>
          ))}
          <div className="pres__slider__btns">
            <button className="pres__slider__btn" onClick={() => setIndex(index - 1)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon__left">
                <path d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"/>
              </svg>
            </button>
            <div className="pres__slider__btn__text">{`0${index}`}<span>/04</span></div>
            <button className="pres__slider__btn" onClick={() => setIndex(index + 1)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon__right">
                <path d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"/>
              </svg>
            </button>
          </div>
        </div>
        <section className="pres__partners">
          <div className="pres__partners__wrapper">
            <h4 className="pres__partners__title">
              Nos partenaires
            </h4>
            <ul className="pres__partners__list">
              <li className="pres__partners__item">
                <figure className="pres__partners__item__media">
                  <img src={process.env.PUBLIC_URL + `./assets/images/7.png`} alt="cimade icon" className="pres__partners__item__img"/>
                </figure>
              </li>
              <li className="pres__partners__item">
                <figure className="pres__partners__item__media">
                  <img src={process.env.PUBLIC_URL + `./assets/images/8.png`} alt="emmaus icon" className="pres__partners__item__img"/>
                </figure>
              </li>
              <li className="pres__partners__item">
                <figure className="pres__partners__item__media">
                  <img src={process.env.PUBLIC_URL + `./assets/images/9.png`} alt="fondation abbé pierre icon" className="pres__partners__item__img"/>
                </figure>
              </li>
            </ul>
          </div>
        </section>
        <div className="symbole">
          <div className="symbole__wrapper home__symbole">
            <figure className="symbole__media">
              <img src={process.env.PUBLIC_URL + "./assets/images/mini_symbole.png"} alt="symbole" className="symbole__media__img"/>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
