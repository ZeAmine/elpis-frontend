//components
import Hero from '../components/Hero';
import Presentation from '../components/Presentation';

const Home = () => {
    return (
      <div className="home">
        <Hero/>
        <Presentation/>
      </div>
    );
};

export default Home;


{/*<div className="home__box">*/}
{/*  <h1 className="home__form__title">FORMULAIRE</h1>*/}
{/*  <form action="" className="home__form">*/}
{/*    /!*<input type="text" id="user" placeholder="Utilisateur" maxLength="24"  className="home__form__input"/>*!/*/}
{/*    <input type="email" id="email" placeholder="Email"  className="home__form__input"/>*/}
{/*    <input type="password" id="mdp" placeholder="Mot de passe"  className="home__form__input"/>*/}
{/*    <button type="submit" className="home__form__btn">S'inscrire</button>*/}
{/*  </form>*/}
{/*</div>*/}
