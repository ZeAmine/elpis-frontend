import { Link } from 'react-router-dom';

//component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__inner">
          <div className="footer__lt">
            <a href="#accueil">
              <button className="footer__btn__top">
                <span className="footer__btn__top__text">Haut de page</span>
              </button>
            </a>
            <ul className="footer__list">
              <Link to="/">
                <li className="footer__credits__item">accueil</li>
              </Link>
              <Link to="/a-propos">
                <li className="footer__credits__item">à propos</li>
              </Link>
            </ul>
            <ul className="footer__list">
              <li className="footer__credits__item">
                <Link to="/politique-de-confidentialite">
                  Politique de confidentialité
                </Link>
              </li>
              <li className="footer__credits__item">
                <Link to="/politique-des-cookies">
                  Politique des cookies
                </Link>
              </li>
              <li className="footer__credits__item">
                <Link to="/mentions-legales">
                  Mentions légales
                </Link>
              </li>
              <li className="footer__credits__item">
                <Link to="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <ul className="footer__socials__list">
            <li className="footer__socials__item">
              <a href="https://twitter.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/>
                </svg>
              </a>
            </li>
            <li className="footer__socials__item">
              <a href="https://www.instagram.com/elpis.paris/">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
                </svg>
              </a>
            </li>
            <li className="footer__socials__item">
              <a href="https://www.facebook.com/Elpis-101822735819813">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__btm">
          <div className="footer__btm__lt">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201.84 68.07" className="footer__lt__brand">
                <path fill="black" d="M94.52,44q-2.14,6-9,6a9,9,0,0,1-5.79-2,9.59,9.59,0,0,1-3.36-5.23h25.81V39.15A17.17,17.17,0,0,0,100,30.59a15.27,15.27,0,0,0-5.82-5.87,16.34,16.34,0,0,0-8.27-2.12,17.08,17.08,0,0,0-8.78,2.32,16.76,16.76,0,0,0-6.27,6.32,17.55,17.55,0,0,0-2.29,8.87,17.21,17.21,0,0,0,2.26,8.7A16.92,16.92,0,0,0,77,55.08a16.27,16.27,0,0,0,8.5,2.31,17.26,17.26,0,0,0,9.91-2.85,15.28,15.28,0,0,0,5.92-7.89ZM80.6,31.44a9.87,9.87,0,0,1,5.34-1.5,8.71,8.71,0,0,1,5,1.47,8.26,8.26,0,0,1,3.1,4.07H77A9.73,9.73,0,0,1,80.6,31.44ZM115,12.88v44h-7.5L107.58,10ZM152.33,31.1a16.33,16.33,0,0,0-6.13-6.24,17.18,17.18,0,0,0-8.75-2.26,16.51,16.51,0,0,0-9.66,2.94V23.17h-7.4V63.56l7.4,2.87h0v-12a16.51,16.51,0,0,0,9.66,2.93,17.17,17.17,0,0,0,8.75-2.25,16.29,16.29,0,0,0,6.13-6.25A17.84,17.84,0,0,0,154.56,40,17.87,17.87,0,0,0,152.33,31.1Zm-6.41,14.12a9,9,0,0,1-3.44,3.56,9.87,9.87,0,0,1-5,1.27,9.47,9.47,0,0,1-4.92-1.3,9.34,9.34,0,0,1-3.47-3.61,11,11,0,0,1,0-10.28,9.44,9.44,0,0,1,3.47-3.62,9.57,9.57,0,0,1,4.92-1.3,9.88,9.88,0,0,1,5,1.28,9,9,0,0,1,3.44,3.55A10.78,10.78,0,0,1,147.16,40,10.71,10.71,0,0,1,145.92,45.22Zm21.75-22V56.83h-7.4V26l7.39-2.87Zm0-9h-7.4v6.12l7.4,2.88Zm32.22,26.78a8.18,8.18,0,0,1,2,5.68,9.79,9.79,0,0,1-1.67,5.62A10.88,10.88,0,0,1,195.48,56a16.63,16.63,0,0,1-6.86,1.35,18.35,18.35,0,0,1-7.48-1.46,12.81,12.81,0,0,1-5.26-4.13,10.91,10.91,0,0,1-2-5L181.21,44h0a10.54,10.54,0,0,0-.11,1.08,4.31,4.31,0,0,0,2,3.7,9.6,9.6,0,0,0,5.51,1.38,8.26,8.26,0,0,0,4.29-.93,2.88,2.88,0,0,0,1.53-2.57,1.72,1.72,0,0,0-.68-1.5,8.59,8.59,0,0,0-2.82-.93l-7.06-1.58a14.4,14.4,0,0,1-2-.57l-1.41-.56Q174.9,39,174.9,33.22a9.6,9.6,0,0,1,1.63-5.48A10.83,10.83,0,0,1,181.08,24a15.3,15.3,0,0,1,6.58-1.36,14.26,14.26,0,0,1,9.32,3,12.25,12.25,0,0,1,4.23,7L194,35.42a4.68,4.68,0,0,0-1.58-4,7.15,7.15,0,0,0-4.8-1.45,7.4,7.4,0,0,0-3.9.91,2.7,2.7,0,0,0-1.47,2.37A1.58,1.58,0,0,0,183,34.6a7.89,7.89,0,0,0,2.77.88l8,1.81A14.59,14.59,0,0,1,199.89,40.93Z"/>
                <path fill="none" stroke="black" strokeWidth="6.44px" d="M10.42,29.4A48,48,0,0,1,21,3.74L24.52,5,21.65,26.36l.9.17L36.24,5.79l4.84,1.47-8.53,24,.5.82L47.47,17.76l3.2,2.46L40.51,40.55l1.06.74L52.31,33l2.54,2.62s-1.28,6.87-8.61,17.63C41,61,31.32,64.65,26.24,64.82c-12,.49-24.53-4.21-22.87-16.32C5.58,32.27,23,37,23,37l1,4.92-18,11"/>
              </svg>
            </Link>
            <div className="footer__lt__nav">
              <h4 className="footer__lt__nav__text">©2022 Elpi</h4>
              <h4 className="footer__lt__nav__text">Tout droit réservé</h4>
            </div>
          </div>
          <Link to="/contact">
            <button className="footer__contact__btn">
              <span>Nous contacter</span>
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
