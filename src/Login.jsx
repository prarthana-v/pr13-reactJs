import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleAuthProvider } from './firebaseConfig'

const Login = () => {

  // const naviaget = useNavigate();
  const handleLogin = async () => {
    try {
      let result = await signInWithPopup(auth, googleAuthProvider)
      // naviaget('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div align="center" className='mt-5'>
      <h1 className='text-center'>SignIn With Google In React</h1>
      <button className='btn btn-primary mt-5' onClick={() => handleLogin()}>Login with Google</button>
    </div>
  )
}

export default Login
