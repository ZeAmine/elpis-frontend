import { articles, services, partners } from '../data';

//components
import Article from '../components/Article';
import Card from '../components/Card';
import React from "react";

const Presentation = () => {
  return (
    <section className="pres">
      <div className="pres__wrapper">
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
        <section className="pres__partners">
          <div className="pres__partners__wrapper">
            <h4 className="pres__partners__title">Nos partenaires</h4>
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
      </div>
    </section>
  );
};

export default Presentation;


// <section className="pres__partners">
//   <h4 className="pres__partners__title">Nos partenaires</h4>
//   <div className="pres__partners__cards">
//     {partners.map(partner => (
//       <Card key={partner.id} {...partner}/>
//     ))}
//   </div>
// </section>
