import React from 'react';
import { auth } from '../firebase-config'


function SignOut() {
  return (
    <div className="signOut">
      
      <button className="signout" onClick={() => auth.signOut()}>Sign Out</button>
     
    </div>
  )
}

export default SignOut;
