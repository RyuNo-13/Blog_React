import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVOH2trX0Pd_zN7n1v1wYdu8crOKcWotM",
  authDomain: "blog-bfe3e.firebaseapp.com",
  projectId: "blog-bfe3e",
  storageBucket: "blog-bfe3e.appspot.com",
  messagingSenderId: "976854540149",
  appId: "1:976854540149:web:9e61b6f376e0c930c9bd3c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db}