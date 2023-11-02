import React from 'react'
import img from '../assets/img.png'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Header = () => {
const navigate = useNavigate();
const user = useSelector((store) => store.user)

  const handleSignOut = () => {
signOut(auth).then(() => {
  navigate("/");
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between'>
      <img 
      className='w-44'
      src= {img}
      alt = 'logo'
      />
      {user && <button onClick={handleSignOut}>Sign Out</button>}
    </div>
  )
}

export default Header