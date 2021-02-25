import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBVumwZMvS__U2MqMclawO-FqcdBolaRZY",
    authDomain: "slack-clone-with-react-e46e9.firebaseapp.com",
    projectId: "slack-clone-with-react-e46e9",
    storageBucket: "slack-clone-with-react-e46e9.appspot.com",
    messagingSenderId: "773095748872",
    appId: "1:773095748872:web:a5a1a2ff95f40ab7fd68bd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
