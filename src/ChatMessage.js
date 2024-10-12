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

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (
    <div className={`message ${messageClass}`}>
        <img src={photoURL}/>
        <p>{text}</p>        
    </div>
  );
};

export default ChatMessage;
