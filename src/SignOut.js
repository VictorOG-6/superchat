import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
 
const auth = firebase.auth();

const SignOut = () => {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>SignOut</button>
  )
}

export default SignOut