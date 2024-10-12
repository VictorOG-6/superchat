import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './App.css'

const firebaseConfig = {
  apiKey: "AIzaSyDMnl1lWhLg9B1wtRrbGgBtRx00-ZZBLMM",
  authDomain: "superchat-8ff4b.firebaseapp.com",
  projectId: "superchat-8ff4b",
  storageBucket: "superchat-8ff4b.appspot.com",
  messagingSenderId: "323238323366",
  appId: "1:323238323366:web:cbbda5b5f4d36c64194067",
  measurementId: "G-7LPJP1158H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // You can handle the signed-in user information here if needed
        console.log('User signed in:', result.user);
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
};

export default SignIn;
