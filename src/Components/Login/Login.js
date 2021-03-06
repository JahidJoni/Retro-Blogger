import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import "firebase/auth";
import firebaseConfig from './firebase.config'
import firebase from "firebase/app";
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
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
    const [newUser, setNewUser] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photoURL}
                setLoggedInUser(signedInUser);
                sessionStorage.setItem("user", JSON.stringify(signedInUser));
                history.replace(from)
            }).catch((error) => {
                const errorMessage = error.message;
                setLoggedInUser(errorMessage)
            });
    }

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
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password ) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const newUserInfo = { ...user }
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    sessionStorage.setItem("user", JSON.stringify(newUserInfo));
                    history.replace(from)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const newUserInfo = { ...user }
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {

        }).catch(function (error) {
           
        });
    } 
    
    return (
        <div className="mt-5">
            <div className="bg-light py-5 form-area container">
            {
                   <h5 style={{ color: 'green', textAlign: 'center', marginTop: '1rem' }}> {newUser ? 'Register' : 'Log In'}</h5> 
                }
                <Form className="w-75 m-auto" onSubmit={handleSubmit}>
                    {newUser &&
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" onBlur={handleBlur} placeholder="Your name" name="name" required />
                        </Form.Group>
                    }
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email or Username</Form.Label>
                        <Form.Control type="email" onBlur={handleBlur} placeholder="Enter email" name="email" required />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handleBlur} placeholder="Password" name="password" required />
                    </Form.Group>
                    {
                        newUser && <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" onBlur={handleBlur} placeholder="Password" name="confirmPassword" required />
                        </Form.Group>
                    }
                    <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-between">
                        <Form.Check type="checkbox" size="sm" label="Remember me" />
                        <a href="#"> <small>Forgot password?</small> </a>
                    </Form.Group>
                    <input variant="danger" type="submit" size="sm" block value={newUser? 'SignUp': 'Sign In'} />
                    <div className="mt-2">
                        <Form.Text className="text-muted">
                           {newUser? 'Already have an account': 'Don`t have an account?'}  <input onClick={() => setNewUser(!newUser)} type="button" value={newUser? 'Log in':'Create One'} className="toggleButton" />
                        </Form.Text>
                    </div>
                </Form>
                <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}> {user.error}</p>
                {
                    user.success && <p style={{ color: 'green', textAlign: 'center', marginTop: '1rem' }}>User {newUser ? 'created' : 'Logged In'} successfully!</p>
                }
            </div>
            <div className="google-area mb-3 text-center">
                <p>-----------Or-----------</p>
                <Button type="submit" onClick={handleGoogleSignIn} className="px-3 py-1 google-btn" ><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>  <span className="ms-3">Continue with Google</span> </Button>
                <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}> {loggedInUser.error}</p>
            </div>
        </div>
    );
};

export default Login;