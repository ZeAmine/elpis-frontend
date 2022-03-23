import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from '../context/AppContext';

import axios from 'axios';
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
  const { setAuth, setSuccess } = useGlobalContext();

  const [name, setName] = useState('');

  const [firstName, setFirstName] = useState('');

  const [email, setEmail] = useState('');
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [terms, setTerms] = useState('');

  const [error, setError] = useState('');
  const [dataConfig, setDataConfig] = useState(true);
  const [profilConfig, setProfilConfig] = useState(false);
  const [endConfig, setEndConfig] = useState(false);

  const [showPwd, setShowPwd] = useState(false);

  const nameRef = useRef();
  const firstNameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  useEffect(() => {
    setValidName(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd])

  useEffect(() => {
    setError('');
  }, [name, firstName, email, pwd, matchPwd])

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //
  //   // const v1 = EMAIL_REGEX.test(email);
  //   // const v2 = PWD_REGEX.test(pwd);
  //   //
  //   // if (!v1 || !v2) {
  //   //   return setError("Invalid Entry");
  //   // }
  //
  //   try {
  //     const response = await axios.post(
  //       REGISTER_URL,
  //       JSON.stringify({ email, pwd }),
  //       {
  //         headers: {'Content-Type': 'application/json'},
  //         withCredentials: true
  //       }
  //     );
  //     console.log(response?.data);
  //     console.log(JSON.stringify(response))
  //     setEmail('');
  //     setPwd('');
  //     setMatchPwd('');
  //     setSuccess(true);
  //     navigate('/');
  //   } catch (err) {
  //     setError("Un compte avec cette adresse e-mail existe déjà");
  //     // if (!err?.response) {
  //     //   setError('No Server Response');
  //     // } else if (err.response?.status === 409) {
  //     //   setError('Email Taken');
  //     // } else {
  //     //   setError('Registration Failed')
  //     // }
  //     // errRef.current.focus();
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataConfig(false);
    setProfilConfig(true);
  }

  const handleRegisterProfil = () => {
    setProfilConfig(false);
    setEndConfig(true);
  }

  const handleRegisterEnd = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setSuccess(true);
      navigate('/accueil');
      setEndConfig(false);
      setProfilConfig(false);
      setDataConfig(true);
    }, 2000)
  }

  return (
    <div className="register">
      <div className="register__wrapper">
        <figure className="register__media">
          <img src={process.env.PUBLIC_URL + "./assets/images/symbole_bg.png"} alt="background symbole" className="register__media__img"/>
        </figure>
        {/*--------------Submit----------------*/}
        <div className="register__content" style={{ display: !dataConfig && "none"}}>
          <div className="register__error" style={{ display: error ? "flex" : "none" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M1 21h22L12 2L1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <p ref={errRef} className="register__errmsg" aria-live="assertive">
              {error}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="register__form">
            <fieldset className="register__container">
              <label htmlFor="email" className="register__form__label">Nom</label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Nom"
                className="register__form__input"
                required
              />
            </fieldset>
            <fieldset className="register__container">
              <label htmlFor="email" className="register__form__label">Prénom</label>
              <input
                type="text"
                id="firstName"
                ref={firstNameRef}
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="Prénom"
                className="register__form__input"
                required
              />
            </fieldset>
            <fieldset className="register__container">
              <label htmlFor="email" className="register__form__label">Email</label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email@adresse.com"
                className="register__form__input"
                style={{ borderColor: error && "red" }}
                aria-invalid={validName ? "false" : "true"}
                required
              />
            </fieldset>
            <fieldset className="register__container">
              <label htmlFor="password" className="register__form__label">Mot de passe</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                placeholder="6+ caractères"
                className="register__form__input"
                aria-invalid={validPwd ? "false" : "true"}
                required
              />
              <span className="login__form__input__show" onClick={() => setShowPwd(!showPwd)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {showPwd ? (
                    <path d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"/>
                  ) : (
                    <path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"/>
                  )}
                </svg>
              </span>
            </fieldset>
            <fieldset className="register__container">
              <label htmlFor="confirm_pwd" className="register__form__label">Confirmer mot de passe</label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                placeholder="6+ caractères"
                className="register__form__input"
                aria-invalid={validMatch ? "false" : "true"}
                required
              />
            </fieldset>
            <fieldset className="register__form__terms">
              <label htmlFor="user_agree_to_terms" className="register__form__terms__label">J'accepte les <strong>conditions d'utilisation</strong> et notre <strong>politique de confidentialité.</strong></label>
              <input
                type="checkbox"
                id="user_agree_to_terms"
                onChange={(e) => setTerms(e.target.value)}
                value={terms}
                className="register__form__terms__input"
                required
              />
            </fieldset>
            <button type="submit" className="register__form__btn">
              <span>S'inscrire</span>
            </button>
            <Link to="/connection">
              <h4 className="register__link">Vous avez déjà un compte</h4>
            </Link>
          </form>
        </div>

        {/*--------------StepOne----------------*/}
        <div className="stepone" style={{ display: !profilConfig && "none" }}>
          <div className="stepone__top">
            <h1 className="stepone__top__title">
              {`Bonjour, ${firstName} !`}
            </h1>
            <p className="stepone__top__subtitle">
              Afin de vous aider au mieux. Comment voulez-vous personnaliser votre profil ?
            </p>
          </div>
          <div className="stepone__checkbox__container">
            <div className="stepone__checkbox">
              <div className="stepone__checkbox__wrapper">
                <input type="radio" className="stepone__checkbox__input"/>
                <div className="stepone__checkbox__content">
                  <span className="stepone__checkbox__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <g fill="currentColor">
                        <path opacity=".8" d="M11.5 9.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z"/>
                        <path opacity=".8" d="M18 16.688c0-3.59-2.91-6.188-6.5-6.188S5 13.098 5 16.688l.002 1.812a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1v-1.813v.001Z"/>
                        <path d="M7.5 6a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0ZM10 2.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm.016 7c-3.505 0-6.516 2.58-6.516 6l.002 2.5a.5.5 0 1 0 1 0L4.5 15.5c0-2.775 2.464-5 5.516-5c3.049 0 5.484 2.222 5.484 5V18a.5.5 0 0 0 1 0v-2.5c0-3.417-2.975-6-6.484-6Z"/>
                      </g>
                    </svg>
                  </span>
                  <span className="stepone__checkbox__block">
                    <h4 className="stepone__checkbox__block__label">Personne réfugié</h4>
                    <p className="stepone__checkbox__block__text">
                      Pour demander de l'aide et découvrir des lieux de solidarité.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="stepone__checkbox__container">
            <div className="stepone__checkbox">
              <label htmlFor="solidaire" className="stepone__checkbox__wrapper">
                <input type="radio" className="stepone__checkbox__input"/>
                <div className="stepone__checkbox__content">
                  <span className="stepone__checkbox__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <g fill="currentColor">
                        <g opacity=".8">
                          <path fillRule="evenodd" d="M5.736 10.805a4.954 4.954 0 0 0-.832 2.748v.697a1 1 0 0 1-2 0v-.697c0-1.373.406-2.715 1.168-3.858l1.664 1.11Z"/>
                          <path fillRule="evenodd" d="M7.707 9.75c-.792 0-1.532.396-1.971 1.055l-1.664-1.11A4.369 4.369 0 0 1 7.707 7.75h.197a1 1 0 0 1 0 2h-.197Zm2.211 1.055c.543.813.832 1.77.832 2.748v.697a1 1 0 0 0 2 0v-.697a6.954 6.954 0 0 0-1.168-3.858l-1.664 1.11Z"/>
                          <path fillRule="evenodd" d="M7.947 9.75c.792 0 1.532.396 1.97 1.055l1.665-1.11A4.368 4.368 0 0 0 7.947 7.75H7.75a1 1 0 0 0 0 2h.197Zm-4.447 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5Z"/>
                          <path d="M11 5.75a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0Z"/>
                          <path fillRule="evenodd" d="M7.75 7a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Zm0 2a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5Z"/>
                          <path d="M4.5 9.75H11v5H4.5v-5Z"/>
                          <path fillRule="evenodd" d="M12.986 14.055a4.954 4.954 0 0 0-.832 2.748v.697a1 1 0 0 1-2 0v-.697c0-1.373.406-2.715 1.168-3.858l1.664 1.11ZM14.957 13c-.792 0-1.532.396-1.971 1.055l-1.664-1.11A4.369 4.369 0 0 1 14.957 11h.197a1 1 0 1 1 0 2h-.197Zm2.211 1.055c.543.813.832 1.77.832 2.748v.697a1 1 0 0 0 2 0v-.697a6.954 6.954 0 0 0-1.168-3.858l-1.664 1.11Z"/>
                          <path fillRule="evenodd" d="M15.197 13c.792 0 1.532.396 1.97 1.055l1.665-1.11A4.369 4.369 0 0 0 15.197 11H15a1 1 0 1 0 0 2h.197ZM10.5 18a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Z"/>
                          <path d="M18.25 9a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0Z"/>
                          <path fillRule="evenodd" d="M15 10.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Zm0 2a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5Z"/>
                          <path d="M11.5 12.75H18v5h-6.5v-5Z"/>
                        </g>
                        <path fillRule="evenodd" d="M3.36 9.977a5.5 5.5 0 0 0-.923 3.05V14a.5.5 0 1 1-1 0v-.972A6.5 6.5 0 0 1 2.53 9.422l.108-.162a.5.5 0 1 1 .832.555l-.108.162Z"/>
                        <path fillRule="evenodd" d="M6.18 8.365c-1.09 0-2.107.544-2.711 1.45l-.832-.554a4.258 4.258 0 0 1 3.542-1.896h.22a.5.5 0 0 1 0 1h-.22Zm3.078 1.6c.47.706.721 1.534.721 2.382h1a5.289 5.289 0 0 0-.889-2.936l-.1-.15a.5.5 0 1 0-.832.554l.1.15Z"/><path fillRule="evenodd" d="M6.448 8.365c1.089 0 2.106.544 2.71 1.45l.832-.554a4.258 4.258 0 0 0-3.542-1.896h-.22a.5.5 0 1 0 0 1h.22Z"/><path fillRule="evenodd" d="M6.25 7.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5Zm0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5Zm4.258 4.936a5.5 5.5 0 0 0-.923 3.051v1.034a.5.5 0 1 1-1 0v-1.034a6.5 6.5 0 0 1 1.091-3.605l.133-.2a.5.5 0 0 1 .832.556l-.133.198Z"/><path fillRule="evenodd" d="M13.42 11.5a3.34 3.34 0 0 0-2.78 1.488l-.831-.555A4.34 4.34 0 0 1 13.42 10.5h.224a.5.5 0 1 1 0 1h-.224Zm3.187 1.686a5.5 5.5 0 0 1 .924 3.051v1.034a.5.5 0 1 0 1 0v-1.034a6.5 6.5 0 0 0-1.092-3.605l-.133-.2a.5.5 0 1 0-.832.556l.133.198Z"/>
                        <path fillRule="evenodd" d="M13.695 11.5a3.34 3.34 0 0 1 2.78 1.488l.832-.555a4.34 4.34 0 0 0-3.612-1.933h-.225a.5.5 0 1 0 0 1h.225Z"/>
                        <path fillRule="evenodd" d="M13.5 10.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5Zm0 1a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5Z"/>
                      </g>
                    </svg>
                  </span>
                  <span className="stepone__checkbox__block">
                    <h4 className="stepone__checkbox__block__label">Voisin solidaire</h4>
                    <p className="stepone__checkbox__block__text">
                      Pour aider les personnes sans-abri et créer du lien dans votre quartier.
                    </p>
                  </span>
                </div>
              </label>
            </div>
          </div>
          <button type="submit" className="register__form__btn" onClick={handleRegisterProfil}>
            <span>Suivant</span>
          </button>
        </div>

        {/*--------------Finish----------------*/}
        <div className="register__end" style={{ display: !endConfig && "none"}}>
          <div className="register__end__content">
            <h1 className="register__end__content__title">C'est terminé !</h1>
            <p className="register__end__content__text">
              Votre profil a été configuré avec succès. Vous allez dorénavant pouvoir naviguer sur le site.
            </p>
          </div>
          {/*<Link to="/accueil">*/}
            <button className="register__end__btn" onClick={handleRegisterEnd}>
              <span>Terminer</span>
            </button>
          {/*</Link>*/}
        </div>
      </div>
    </div>
  );
};

export default Register;
