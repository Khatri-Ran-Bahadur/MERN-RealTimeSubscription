import firebase from 'firebase';
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDLSt5GjdoWUwHX3CiOTLOFPqWtJRWDH70",
    authDomain: "gqlreactnode-6e7b4.firebaseapp.com",
    // databaseURL: "https://gqlreactnode-6e7b4.firebaseio.com",
    projectId: "gqlreactnode-6e7b4",
    storageBucket: "gqlreactnode-6e7b4.appspot.com",
    // messagingSenderId: "585099350880",
    appId: "1:585099350880:web:08f527a8f4b0d0b0078405",
    measurementId: "G-G4NQERW09S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();