import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDfGMVADGbiRcX33pu01mqA_gfxRy_Eq8",
  authDomain: "linkedin-clone-3430d.firebaseapp.com",
  projectId: "linkedin-clone-3430d",
  storageBucket: "linkedin-clone-3430d.appspot.com",
  messagingSenderId: "1054196261129",
  appId: "1:1054196261129:web:32fbb890832152f18073d8",
  measurementId: "G-68LXQN87GD"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};