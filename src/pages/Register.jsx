import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";

import axios from 'axios';
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
  const [email, setEmail] = useState('');
  const [validName, setValidName] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // const [matchPwd, setMatchPwd] = useState('');
  // const [validMatch, setValidMatch] = useState(false);
  // const [matchFocus, setMatchFocus] = useState(false);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const emailRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  // useEffect(() => {
  //   setValidName(EMAIL_REGEX.test(email));
  // }, [email])

  // useEffect(() => {
  //   setValidPwd(PWD_REGEX.test(pwd));
  //   setValidMatch(pwd === matchPwd);
  // }, [pwd, matchPwd])

  // useEffect(() => {
  //   setValidPwd(PWD_REGEX.test(pwd));
  // }, [pwd])

  // useEffect(() => {
  //   setError('');
  // }, [email, pwd, matchPwd])

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
        'http://127.0.0.1:8080/register',
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
      // setMatchPwd('');
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
        <div className="global-modal">
          <div className="overlay">
            <div className="container-modal">
              <p ref={errRef} className={error ? "errmsg" : "offscreen"} aria-live="assertive">
                {error}
              </p>
              <form onSubmit={handleSubmit} className="form-auth">
                <h2>Inscription</h2>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <p id="uidnote" className={emailFocus && email && !validName ? "instructions" : "offscreen"}>
                  4 to 24 characters.<br />
                  Must begin with a letter.<br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>

                <label htmlFor="password">Votre mot de passe</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                  8 to 24 characters.<br />
                  Must include uppercase and lowercase letters, a number and a special character.<br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>

                {/*<label htmlFor="confirm_pwd">Confirmer le mot de passe</label>*/}
                {/*<input*/}
                {/*  type="password"*/}
                {/*  id="confirm_pwd"*/}
                {/*  onChange={(e) => setMatchPwd(e.target.value)}*/}
                {/*  value={matchPwd}*/}
                {/*  required*/}
                {/*  aria-invalid={validMatch ? "false" : "true"}*/}
                {/*  aria-describedby="confirmnote"*/}
                {/*  onFocus={() => setMatchFocus(true)}*/}
                {/*  onBlur={() => setMatchFocus(false)}*/}
                {/*/>*/}
                {/*<p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>*/}
                {/*  Must match the first password input field.*/}
                {/*</p>*/}

                {/*<button disabled={!validName || !validPwd || !validMatch}>S'inscrire</button>*/}
                <button type="submit" className="register">S'inscrire</button>
              </form>

              <Link to="/connection">
                <p className="bottom-help-txt">Vous avez déjà un compte</p>
              </Link>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Register;
