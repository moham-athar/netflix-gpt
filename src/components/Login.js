import React from 'react'
import { useState, useRef } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = () => {
   const message =  checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if(!isSignIn) {
      //Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const {uid, email, displayName} = auth.currentUser;
      dispatch(addUser({uid : uid, email: email, displayName: displayName}));
      navigate("/browse");
    }).catch((error) => {
      setErrorMessage(error.message);
    });
    console.log(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + ":" + errorMessage)
  });
    } else {
        // Sign In
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + ":" + errorMessage)
  });
    }

}

  const toggleSignInForm = () => {
      setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img 
      src = "https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      alt='logo'
      />
      </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-semi-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

          {!isSignIn && <input ref = {name} type='text' placeholder=' Full Name' className='p-4 my-4 w-full bg-gray-700' />}

          <input
           ref={email}
           type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />

          <input 
          ref={password}
          type = 'password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />

          <p className='py-1 px-2 text-red-500'>
            {errorMessage}
          </p>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg 
           ' onClick = {handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>

          <p className='py-4 cursor-pointer' onClick={toggleSignInForm} >{isSignIn ? "New to Netflix? Sign Up" : "Already a user? Sign In"}</p>

        </form>
      </div>
  )
}

export default Login