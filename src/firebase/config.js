import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBcSEtezraV5kyqSPLjlU4_mzYet4VY7rw",
    authDomain: "firegram-cc06f.firebaseapp.com",
    projectId: "firegram-cc06f",
    storageBucket: "firegram-cc06f.appspot.com",
    messagingSenderId: "742865523138",
    appId: "1:742865523138:web:f3ea654c81524ee60d865b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };