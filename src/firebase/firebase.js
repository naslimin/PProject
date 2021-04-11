import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8Sm1gbuACFSalNZo6vRvLQMRImz-7Z2k",
    authDomain: "leavemanagementsystem-ee53f.firebaseapp.com",
    projectId: "leavemanagementsystem-ee53f",
    storageBucket: "leavemanagementsystem-ee53f.appspot.com",
    messagingSenderId: "1034141146163",
    appId: "1:1034141146163:web:681b7ad79827bf15fc1746"
};

if (firebase.apps.length === 0)
   firebase.initializeApp(firebaseConfig); 

export default firebase.firestore();