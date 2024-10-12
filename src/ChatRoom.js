import { React, useState, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { addDoc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import { getFirestore, collection, query, orderBy, limit } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
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
const firestore = getFirestore(app);
const auth = getAuth(app);

const ChatRoom = () => {

  const dummy = useRef()

  // Access the 'messages' collection
  const messagesRef = collection(firestore, 'messages');
  // Create a query for messages, ordered by createdAt and limited to 25
  const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(25));

  // Fetch messages using the useCollectionData hook
  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });

  const [formValue, setFormValue] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault();
    
    const { uid, photoURL } = auth.currentUser;
  
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
  
    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth'})
  };

  return (
    <>
      <div>
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </div>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default ChatRoom;
