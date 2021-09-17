import firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';
import 'firebase/firestore';




// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAr__Fqj7l8rLc_E7rA3gr8vqueINTUeU8",
  authDomain: "fir-project-f34a6.firebaseapp.com",
  projectId: "fir-project-f34a6",
  storageBucket: "fir-project-f34a6.appspot.com",
  messagingSenderId: "686941071047",
  appId: "1:686941071047:web:2310b0e8c9fc91fdeb80e2",
  measurementId: "G-FP531TK5X2"
};
  
  let Firebase;
  
  if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
  }
  

  //For firestore
  const firestore = firebase.firestore()

  firestore.collection("Fruits").doc("w3fKVYybVbLeYIdRbbNX").set({
    Firstname:"",
    Lastname:"",
    Address:"",
    Phone:""
  })


  export default Firebase;

  