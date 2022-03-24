import { useState } from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../context/AppContext'

const Header = () => {
  const { success, setSuccess } = useGlobalContext();
  console.log(success)

  const [menu, setMenu] = useState(false)

  const handleSignOut = () => {
    setSuccess(false);
    setMenu(false);
  }

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__lt">
          <div className="header__brand">
            <Link to="/accueil">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201.84 68.07" className="header__brand__icon">
                <path fill="black" d="M94.52,44q-2.14,6-9,6a9,9,0,0,1-5.79-2,9.59,9.59,0,0,1-3.36-5.23h25.81V39.15A17.17,17.17,0,0,0,100,30.59a15.27,15.27,0,0,0-5.82-5.87,16.34,16.34,0,0,0-8.27-2.12,17.08,17.08,0,0,0-8.78,2.32,16.76,16.76,0,0,0-6.27,6.32,17.55,17.55,0,0,0-2.29,8.87,17.21,17.21,0,0,0,2.26,8.7A16.92,16.92,0,0,0,77,55.08a16.27,16.27,0,0,0,8.5,2.31,17.26,17.26,0,0,0,9.91-2.85,15.28,15.28,0,0,0,5.92-7.89ZM80.6,31.44a9.87,9.87,0,0,1,5.34-1.5,8.71,8.71,0,0,1,5,1.47,8.26,8.26,0,0,1,3.1,4.07H77A9.73,9.73,0,0,1,80.6,31.44ZM115,12.88v44h-7.5L107.58,10ZM152.33,31.1a16.33,16.33,0,0,0-6.13-6.24,17.18,17.18,0,0,0-8.75-2.26,16.51,16.51,0,0,0-9.66,2.94V23.17h-7.4V63.56l7.4,2.87h0v-12a16.51,16.51,0,0,0,9.66,2.93,17.17,17.17,0,0,0,8.75-2.25,16.29,16.29,0,0,0,6.13-6.25A17.84,17.84,0,0,0,154.56,40,17.87,17.87,0,0,0,152.33,31.1Zm-6.41,14.12a9,9,0,0,1-3.44,3.56,9.87,9.87,0,0,1-5,1.27,9.47,9.47,0,0,1-4.92-1.3,9.34,9.34,0,0,1-3.47-3.61,11,11,0,0,1,0-10.28,9.44,9.44,0,0,1,3.47-3.62,9.57,9.57,0,0,1,4.92-1.3,9.88,9.88,0,0,1,5,1.28,9,9,0,0,1,3.44,3.55A10.78,10.78,0,0,1,147.16,40,10.71,10.71,0,0,1,145.92,45.22Zm21.75-22V56.83h-7.4V26l7.39-2.87Zm0-9h-7.4v6.12l7.4,2.88Zm32.22,26.78a8.18,8.18,0,0,1,2,5.68,9.79,9.79,0,0,1-1.67,5.62A10.88,10.88,0,0,1,195.48,56a16.63,16.63,0,0,1-6.86,1.35,18.35,18.35,0,0,1-7.48-1.46,12.81,12.81,0,0,1-5.26-4.13,10.91,10.91,0,0,1-2-5L181.21,44h0a10.54,10.54,0,0,0-.11,1.08,4.31,4.31,0,0,0,2,3.7,9.6,9.6,0,0,0,5.51,1.38,8.26,8.26,0,0,0,4.29-.93,2.88,2.88,0,0,0,1.53-2.57,1.72,1.72,0,0,0-.68-1.5,8.59,8.59,0,0,0-2.82-.93l-7.06-1.58a14.4,14.4,0,0,1-2-.57l-1.41-.56Q174.9,39,174.9,33.22a9.6,9.6,0,0,1,1.63-5.48A10.83,10.83,0,0,1,181.08,24a15.3,15.3,0,0,1,6.58-1.36,14.26,14.26,0,0,1,9.32,3,12.25,12.25,0,0,1,4.23,7L194,35.42a4.68,4.68,0,0,0-1.58-4,7.15,7.15,0,0,0-4.8-1.45,7.4,7.4,0,0,0-3.9.91,2.7,2.7,0,0,0-1.47,2.37A1.58,1.58,0,0,0,183,34.6a7.89,7.89,0,0,0,2.77.88l8,1.81A14.59,14.59,0,0,1,199.89,40.93Z"/>
                <path fill="none" stroke="black" strokeWidth="6.44px" d="M10.42,29.4A48,48,0,0,1,21,3.74L24.52,5,21.65,26.36l.9.17L36.24,5.79l4.84,1.47-8.53,24,.5.82L47.47,17.76l3.2,2.46L40.51,40.55l1.06.74L52.31,33l2.54,2.62s-1.28,6.87-8.61,17.63C41,61,31.32,64.65,26.24,64.82c-12,.49-24.53-4.21-22.87-16.32C5.58,32.27,23,37,23,37l1,4.92-18,11"/>
              </svg>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <Link to="/accueil">
                  <h4 className="header__nav__item__text">accueil</h4>
                </Link>
              </li>
              {success && (
                <li className="header__nav__item">
                  <Link to="/aide-administrative">
                    <h4 className="header__nav__item__text">Aide administrative</h4>
                  </Link>
                </li>
              )}
              <li className="header__nav__item">
                <Link to="/a-propos">
                  <h4 className="header__nav__item__text">à propos</h4>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {success ? (
          <div className="header__rt">
            <button className="header__rt__btn">
              <span>Poster un bon plan</span>
            </button>
            <div className="header__rt__profil">
              <figure className="header__rt__user__media" onClick={() => setMenu(!menu)}>
                <img src={process.env.PUBLIC_URL + "./assets/images/profil.png"} alt="profile image" className="header__rt__user__img"/>
              </figure>
              <div className="header__rt__user__menu" style={{ display: menu ? "flex" : "none" }}>
                <div className="header__rt__user__menu__triangle__container">
                  <div className="header__rt__user__menu__triangle"/>
                  <div className="header__rt__user__menu__mask"/>
                </div>
                <ul className="header__rt__user__menu__nav nav__top">
                  <li className="header__rt__user__menu__item">
                    <h4 className="header__rt__user__menu__item__text">Elpis Profile</h4>
                  </li>
                  <li className="header__rt__user__menu__item">
                    <h4 className="header__rt__user__menu__item__text">Paramètres</h4>
                  </li>
                  <li className="header__rt__user__menu__item">
                    <h4 className="header__rt__user__menu__item__text">Aide</h4>
                  </li>
                </ul>
                <ul className="header__rt__user__menu__nav">
                  <li className="header__rt__user__menu__item" onClick={handleSignOut}>
                    <h4 className="header__rt__user__menu__item__text">Déconnexion</h4>
                  </li>
                </ul>
              </div>
              <div className="header__rt__notification">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                </svg>
              </div>
              <div className="header__rt__message">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="header__btns">
            <Link to="/connection">
              <button className="header__btn__login">
                <span>connection</span>
              </button>
            </Link>
            <Link to="/inscription">
              <button className="header__btn__register">
                <span>inscription</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


// <nav className="header__nav">
//   <ul className="header__nav__list">
//     <li className="header__nav__item">
//       <Link to="/accueil">
//         <h4 className="header__nav__item__text">accueil</h4>
//       </Link>
//     </li>
//     <li className="header__nav__item">
//       <Link to="/a-propos">
//         <h4 className="header__nav__item__text">à propos</h4>
//       </Link>
//     </li>
//     <li className="header__nav__item">
//       <div className="header__nav__item__btns">
//         <Link to="/connection">
//           <button className="header__nav__item__btn login__btn">
//             <span>connection</span>
//           </button>
//         </Link>
//         <Link to="/inscription">
//           <button className="header__nav__item__btn register__btn">
//             <span>inscription</span>
//           </button>
//         </Link>
//       </div>
//     </li>
//   </ul>
// </nav>
