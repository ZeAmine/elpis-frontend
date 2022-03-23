import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";

import axios from 'axios';
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
  const [name, setName] = useState('');

  const [firstName, setFirstName] = useState('');

  const [email, setEmail] = useState('');
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

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
  }, [email, pwd, matchPwd])

  useEffect(() => {
    setError('');
  }, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const v1 = EMAIL_REGEX.test(email);
    // const v2 = PWD_REGEX.test(pwd);
    //
    // if (!v1 || !v2) {
    //   return setError("Invalid Entry");
    // }

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(response?.data);
      console.log(JSON.stringify(response))
      setEmail('');
      setPwd('');
      setMatchPwd('');
      setSuccess(true);
      navigate('/');
    } catch (err) {
      if (!err?.response) {
        setError('No Server Response');
      } else if (err.response?.status === 409) {
        setError('Email Taken');
      } else {
        setError('Registration Failed')
      }

      errRef.current.focus();
    }
  }

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <div className="register">
          <div className="register__wrapper">
            <figure className="register__media">
              <img src={process.env.PUBLIC_URL + "./assets/images/symbole_bg.png"} alt="background symbole" className="register__media__img"/>
            </figure>
            <div className="register__content">
              <p ref={errRef} className={error ? "errmsg" : "offscreen"} aria-live="assertive">
                {error}
              </p>
              <form onSubmit={handleSubmit} className="register__form">
                <div className="register__container">
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
                </div>
                <div className="register__container">
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
                </div>
                <div className="register__container">
                  <label htmlFor="email" className="register__form__label">Email</label>
                  <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="nom@adresse.com"
                    className="register__form__input"
                    aria-invalid={validName ? "false" : "true"}
                    required
                  />
                </div>
                <div className="register__container">
                  <label htmlFor="password" className="register__form__label">Mot de passe</label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    placeholder="**********"
                    className="register__form__input"
                    aria-invalid={validPwd ? "false" : "true"}
                    required
                  />
                </div>
                <div className="register__container">
                  <label htmlFor="confirm_pwd" className="register__form__label">Confirmer mot de passe</label>
                  <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    placeholder="**********"
                    className="register__form__input"
                    aria-invalid={validMatch ? "false" : "true"}
                    required
                  />
                </div>
                <button type="submit" className="register__form__btn">
                  <span>S'inscrire</span>
                </button>
                <Link to="/connection">
                  <h4 className="register__link">Vous avez déjà un compte</h4>
                </Link>
              </form>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Register;
