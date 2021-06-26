import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false,
    confirmPassword: ''

  })
  const handleBlur = (e) => {
    let isFieldValid = true;

    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }

    if (e.target.name === 'password') {
      isFieldValid = e.target.value.length > 5;
    }
    if (e.target.name === 'name') {
      isFieldValid = e.target.value.length > 2;
    }
    if (isFieldValid) {
      let newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const [newUser, setNewUser] = useState(false)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    const GProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(GProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signInUser = { name: displayName, email, photoURL };
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        sessionStorage.setItem("user", JSON.stringify(signInUser));
        history.replace(from);
        setLoggedInUser(signInUser)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleSubmit = (e) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          console.log(newUserInfo);
          newUserInfo.error = '';
          newUserInfo.success = true;
          sessionStorage.setItem("user", JSON.stringify(newUserInfo));
          setUser(newUserInfo)
          // setLoggedInUser(newUserInfo)
          history.replace(from)
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...user }
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
        e.preventDefault();
  }

  return (
    <section className='login'>
      <div className="login-area d-flex justify-content-center">
        <div className="bg-light form-area container">
          {
            <h4 style={{ color: 'green', textAlign: 'center' }}> {newUser ? 'Register' : 'Log In'}</h4>
          }
         
         <Form className="w-75 m-auto" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email or Username</Form.Label>
                        <Form.Control type="email" onBlur={handleBlur} placeholder="Enter email" name="email" required />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handleBlur} placeholder="Password" name="password" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-between">
                        <Form.Check type="checkbox" size="sm" label="Remember me" />
                        <a href="#"> <small>Forgot password?</small> </a>
                    </Form.Group>
                    <input variant="danger" type="submit" size="sm" block value={newUser? 'SignUp': 'Sign In'} />
        
                </Form>

          <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}> {user.error}</p>
          {
            user.success && <p style={{ color: 'green', textAlign: 'center', marginTop: '1rem' }}>User {newUser ? 'created' : 'Logged In'} successfully!</p>
          }
        </div>
        <div className="card bg-dark text-center">
          <div className="card-body">
            <h4 style={{ color: '#FDE3A7' }}>Continue with Google account</h4>
            <button onClick={googleSignIn} className="btn btn-outline-info m-5">
              Sign-in Google with google
            </button>
            <p className="text-start" style={{ color: "#999999" }}>
              To continue, Google will share your name, email address, language
              preference, and profile picture with our site.Learn about our
              customer{" "}
              <a
                rel="noreferrer"
                href="https://policies.google.com/terms?hl=en-US"
                target="_blank"
              >
                policy
              </a>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;