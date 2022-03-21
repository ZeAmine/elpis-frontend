import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from '../context/AuthContext'

import axios from 'axios';
const LOGIN_URL = '/login'

const Login = () => {
  const { setAuth } = useGlobalContext();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const emailRef = useRef([]);
  const errRef = useRef([]);

  useEffect(() => {
    setError('');
  }, [email, pwd])

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://127.0.0.1:8080/login',
        JSON.stringify({ email, pwd }),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
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

      error.current.focus()
    }
  }

  return (
    <>
      {success ? (
        <section className="global-modal">
          <h1>You are logged in !</h1>
          <br/>
          <p>
            <Link to="/">Go to home</Link>
          </p>
        </section>
      ) : (
        <div className="global-modal">
          <div className="overlay">
            <div className="container-modal">
              <p ref={errRef} className={error ? "errmsg" : "offscreen"} aria-live="assertive">
                {error}
              </p>
              <form onSubmit={handleSubmit} className="form-auth">
                <h2>Connexion</h2>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />

                <label htmlFor="pwd">Mot de passe</label>
                <input
                  type="password"
                  id="pwd"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />

                <button className="btn-sign">Se connecter</button>
              </form>

              <span className="line">
                <Link to="/inscription">Besoin de créer un compte</Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;