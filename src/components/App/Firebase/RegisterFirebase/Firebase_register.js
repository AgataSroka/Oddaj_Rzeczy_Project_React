import app from 'firebase/app';
import 'firebase/auth';
import FirebaseContext from './context'

var firebaseConfig = {
    apiKey: "AIzaSyDeCTtxn7pi_A2a6y_CaNyMKmIyQtKdtMM",
    authDomain: "oddaj-rzeczy-c9aa2.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-c9aa2.firebaseio.com",
    projectId: "oddaj-rzeczy-c9aa2",
    storageBucket: "",
    messagingSenderId: "524126275853",
    appId: "1:524126275853:web:4719e4f3b1eff8d0b28844"
};

class Firebase_register {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

}
export default Firebase_register;
export {FirebaseContext};
