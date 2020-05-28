import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyAklQXyIi5pZx7WBHWjgw1_9soJjMo6loo",
    authDomain: "login-85ea7.firebaseapp.com",
    databaseURL: "https://login-85ea7.firebaseio.com",
    projectId: "login-85ea7",
    storageBucket: "login-85ea7.appspot.com",
    messagingSenderId: "501469320625",
    appId: "1:501469320625:web:75875f010accc6ebb79990",
    measurementId: "G-PHPQ12W7L6"
};
// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);
export default fire;