import React from 'react'
import './css/Home.css'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase-config'
import './css/Cred.css'


function Home() {
  function signInWithGoogle(){
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
}
 

  return (
    
    <body className='bodyHome'>
    <button className="cta" onClick={signInWithGoogle}>
<span>Login to Blooo Messenger</span>
<svg width="13px" height="10px" viewBox="0 0 13 10">
<path d="M1,5 L11,5"></path>
<polyline points="8 1 12 5 8 9"></polyline>
</svg></button>

</body>

  )
  }

export default Home