import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import SignIn from './SignIn';
import ChatRoom from './ChatRoom';
import './App.css'

import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMnl1lWhLg9B1wtRrbGgBtRx00-ZZBLMM",
  authDomain: "superchat-8ff4b.firebaseapp.com",
  projectId: "superchat-8ff4b",
  storageBucket: "superchat-8ff4b.appspot.com",
  messagingSenderId: "323238323366",
  appId: "1:323238323366:web:cbbda5b5f4d36c64194067",
  measurementId: "G-7LPJP1158H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;