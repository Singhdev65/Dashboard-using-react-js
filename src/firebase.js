import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqQxvISmRPowDdCWtmHPB0rh-sfaFOyNA",
    authDomain: "dashboard-d4b84.firebaseapp.com",
    projectId: "dashboard-d4b84",
    storageBucket: "dashboard-d4b84.appspot.com",
    messagingSenderId: "218434602964",
    appId: "1:218434602964:web:fcfd418c87f97bdf49f841"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;

