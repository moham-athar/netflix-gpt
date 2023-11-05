import React from 'react'
import { useEffect } from 'react';
import img from '../assets/img.png'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'


const Header = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const user = useSelector((store) => store.user)

const handleSignOut = () => {
signOut(auth).then(() => {
}).catch((error) => {
  // An error happened.
});
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //Sign In
        const {uid, email, displayName} = user;
        dispatch(addUser({uid : uid, email: email, displayName: displayName}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    // unsubscribes when component unmounts
    return () => unsubscribe;
  }, []);

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between'>
      <img 
      className='w-44'
      src= {img}
      alt = 'logo'
      />
      {user && <button className='text-white' onClick={handleSignOut}>Sign Out</button>}
    </div>
  )
}

export default Header