import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from '../context/AppContext'

import axios from 'axios';
const LOGIN_URL = '/login'

const Login = () => {
  const { setAuth, setSuccess } = useGlobalContext();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');

  const emailRef = useRef([]);
  const errRef = useRef([]);

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    setError('');
  }, [email, pwd])

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "http://localhost:8080/login",
        JSON.stringify({ email, pwd }),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(response?.data);
      // const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pwd, roles });
      setEmail('');
      setPwd('');
      setSuccess(true);
      navigate('/');
    } catch(error) {
      if (!error?.response) {
        setError('No Server Response');
      } else if (error.response?.status === 600) {
        setError('Missing Email or Password')
      } else if (error.response?.status === 401) {
        setError('Unauthorized')
      } else {
        setError('Login Failed')
      }

      // error.current.focus()
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   setTimeout(() => {
  //     setSuccess(true);
  //     navigate('/accueil');
  //   }, 2000)
  // }

  return (
    <section className="login">
      <div className="login__wrapper">
        <figure className="login__media">
          <img src={process.env.PUBLIC_URL + "./assets/images/symbole_bg.png"} alt="background symbole" className="login__media__img"/>
        </figure>
        <div className="login__content">
          <p ref={errRef} className={error ? "errmsg" : "offscreen"} aria-live="assertive">
            {error}
          </p>
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
                required
              />
              <span className="login__form__input__show">
                <svg viewBox="0 0 29 28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4228 22.2689C15.5054 22.2689 16.4941 22.1511 17.3958 21.9474L15.3852 19.9368C15.0728 19.9608 14.7558 19.9802 14.4228 19.9802C8.29942 19.9802 5.9272 15.5791 5.35274 14.2585C5.7841 13.2959 6.36668 12.4085 7.07841 11.63L5.47862 10.0302C3.71862 11.9378 3.05147 13.8592 3.03888 13.8969C2.95994 14.1319 2.95994 14.3863 3.03888 14.6213C3.06291 14.6968 5.68803 22.2689 14.4228 22.2689ZM14.4228 6.24813C12.3206 6.24813 10.5938 6.70129 9.15425 7.37073L4.93277 3.15039L3.31466 4.76849L23.9128 25.3667L25.5309 23.7486L21.7329 19.9505C24.7242 17.7179 25.7919 14.6693 25.8079 14.6213C25.8868 14.3863 25.8868 14.1319 25.8079 13.8969C25.7827 13.8202 23.1576 6.24813 14.4228 6.24813ZM20.1125 18.3301L17.5034 15.721C17.7208 15.2747 17.8558 14.7838 17.8558 14.2585C17.8558 12.3807 16.3007 10.8255 14.4228 10.8255C13.8975 10.8255 13.4066 10.9605 12.9615 11.1791L10.8925 9.11013C12.0283 8.72038 13.2221 8.52651 14.4228 8.53681C20.5462 8.53681 22.9184 12.938 23.4929 14.2585C23.1473 15.0504 22.1586 16.9386 20.1125 18.3301Z"/>
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
