import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from '../context/AuthContext'
import axios from '../api/axios';

const LOGIN_URL = '/auth'

const Login = () => {
  const { setAuth } = useGlobalContext();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const userRef = useRef([]);
  const errRef = useRef([]);

  useEffect(() => {
    setError('');
  }, [user, pwd])

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(res));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken })
      setUser('');
      setPwd('');
      setSuccess(true);
      navigate('/');
    } catch(error) {
      if (!error?.response) {
        setError('No Server Response');
      } else if (error.response?.status === 600) {
        setError('Missing Username or Password')
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
                <label htmlFor="user">Nom d'utilisateur</label>
                <input
                  type="text"
                  id="user"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
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
                <Link to="/register">Besoin de créer un compte</Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
