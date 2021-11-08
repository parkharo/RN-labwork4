// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhoU_oVUAVw1sYDpB4bRR2Jsa2DR2buho",
  authDomain: "fir-auth-41628.firebaseapp.com",
  projectId: "fir-auth-41628",
  storageBucket: "fir-auth-41628.appspot.com",
  messagingSenderId: "303800625107",
  appId: "1:303800625107:web:049dd40f7c47b66082b126"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app()
}

const auth = firebase.auth()

export { auth };