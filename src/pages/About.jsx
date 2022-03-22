import { values } from '../data';

//components
import Hero from '../components/Hero';
import Bubble from '../components/Bubble';
import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <Hero/>
        <div className="about__presentation">
          <figure className="about__bg__media">
            <img src={process.env.PUBLIC_URL + "./assets/images/bg_propos.png"} alt="background line" className="about__bg__media__img"/>
          </figure>
          <section className="about__article">
            <div className="about__article__content">
              <h4 className="about__article__title">Notre histoire</h4>
              <p className="about__article__text">
                Elpis est un réseau social permettant de mettre en relation les réfugiés dans le besoin et les bénévoles qui proposent un logement gratuitement ou tout autres types d’aides. <br/><br/>
                Le réseau social est né en 2022 et a été mis au monde par une équipe de sept étudiants, tous concernés, préoccupés et réunis autour d’une même cause. Une grande cause pour laquelle il est important de se mobiliser, c’est pourquoi nous sommes à l’origine de cette démarche et c’est également pourquoi on espère tous qu’un grand nombre s’y inscriront, d’un côté comme de l’autre. Nous avons conçu ce site avec tout le soin possible pour vous apporter une expérience utilisateur unique et simplifiée au maximum. <br/><br/>
                Lorem ipsum dolor sit amet. 33 dolores earum eum quibusdam quae qui galisum facilis. Aut libero quis ab quia veniam a quam omnis et galisum veniam sit illo eligendi? Id illo tempore voluptate dolorem et nemo consequatur ad expedita perspiciatis. <br/><br/>
                Ut quis nisi a aliquam voluptatibus qui perspiciatis doloribus. Aut minus debitis et commodi cumque et dolores similique. Non nihil deserunt qui molestiae ipsam et maxime amet ut voluptatum sunt non eligendi tempora. Qui laudantium velit sed minima enim non internos voluptates qui nesciunt consequatur. <br/><br/>
                Eum voluptatum voluptates est saepe pariatur est itaque velit ut enim neque! Id dignissimos exercitationem et tempora ratione qui facere inventore est dolor amet aut praesentium deserunt. Non magni cumque est rerum accusamus aut similique amet. <br/><br/>
              </p>
            </div>
            <figure className="about__article__media">
              <img src={process.env.PUBLIC_URL + './assets/images/10.png'} alt="notre histoire" className="about__article__media__img"/>
            </figure>
          </section>
          <section className="about__bubbles">
            <div className="about__bubbles__wrapper">
              <h4 className="about__bubbles__title">Nos valeurs</h4>
              <ul className="about__bubbles__list">
                {values.map(value => (
                  <li key={value.id} className="about__bubble__item">
                    <Bubble {...value}/>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className="symbole">
            <div className="symbole__wrapper">
              <figure className="symbole__media">
                <img src={process.env.PUBLIC_URL + "./assets/images/mini_symbole.png"} alt="symbole" className="symbole__media__img"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
