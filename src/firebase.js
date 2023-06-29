import firebase from 'firebase/compact/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApQTD2_iS_0yZELnMvcxAiGbZtT3zQ0XY",
  authDomain: "react-hooks-blog-5b381.firebaseapp.com",
  projectId: "react-hooks-blog-5b381",
  storageBucket: "react-hooks-blog-5b381.appspot.com",
  messagingSenderId: "1018449230211",
  appId: "1:1018449230211:web:515bd33fa07db668b51eb6"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();