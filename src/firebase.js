import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC22kG-EIq5ubv6bu9xJpIn3koM0QDBF9Y",
    authDomain: "stocks-live-551bd.firebaseapp.com",
    databaseURL: "https://stocks-live-551bd.firebaseio.com",
    projectId: "stocks-live-551bd",
    storageBucket: "stocks-live-551bd.appspot.com",
    messagingSenderId: "415356386124",
    appId: "1:415356386124:web:f5c6514be6b2a6c4f7ede9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export { db } ;