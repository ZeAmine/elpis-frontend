import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from '../context/AppContext'

import axios from '../api/axios';
const LOGIN_URL = '/login'

const Login = () => {
  const { setAuth, setSuccess } = useGlobalContext();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef([]);
  const errRef = useRef([]);

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  useEffect(() => {
    setError('');
  }, [email, pwd])

  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //
  //   try {
  //     const response = await axios.get(LOGIN_URL, {
  //       headers: {
  //         Authorization: 'Bearer ' + localStorage.get('userToken'),
  //       },
  //     });
  //     console.log(response?.data);
  //     const token = response?.data?.token;
  //     localStorage.setItem('userToken', JSON.stringify(token));
  //     setAuth({ email, pwd, token });
  //     setEmail('');
  //     setPwd('');
  //     setSuccess(true);
  //     navigate('/accueil');
  //   } catch(error) {
  //     // setError("Adresse mail ou mot de passe incorrect")
  //     if (!error?.response) {
  //       setError('No Server Response');
  //     } else if (error.response?.status === 600) {
  //       setError('Missing Email or Password')
  //     } else if (error.response?.status === 401) {
  //       setError('Unauthorized')
  //     } else {
  //       setError('Login Failed')
  //     }
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setSuccess(true);
      navigate('/accueil');
    }, 2000)
  }

  return (
    <section className="login">
      <div className="login__wrapper">
        <figure className="login__media">
          <img src={process.env.PUBLIC_URL + "./assets/images/symbole_bg.png"} alt="background symbole" className="login__media__img"/>
        </figure>
        <div className="login__content">
          <div className="login__error" style={{ display: error ? "flex" : "none" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M1 21h22L12 2L1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <p ref={errRef} className="login__errmsg" aria-live="assertive">
              {error}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="login__form">
            <div className="login__container">
              <label htmlFor="email" className="login__form__label">Email</label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="nom@adresse.com"
                className="login__form__input"
                style={{ borderColor: error && "red" }}
                required
              />
            </div>
            <div className="login__container">
              <label htmlFor="pwd" className="login__form__label">Mot de passe</label>
              <input
                type="password"
                id="pwd"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                placeholder="**********"
                className="login__form__input"
                style={{ borderColor: error && "red" }}
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
            </div>
            <button type="submit"  className="login__form__btn">
              <span>Se connecter</span>
            </button>
            <Link to="/inscription">
              <h4 className="login__link">Besoin de créer un compte</h4>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
