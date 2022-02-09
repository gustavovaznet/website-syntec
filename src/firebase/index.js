//FIREBASE

//IMPORTING
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

//FIREBASE CONFIGURATION
const firebaseConfig = {
   
};

//INICIALIZING FIREBASE
firebase.initializeApp(firebaseConfig);

//STORAGE
const storage = firebase.storage();

//EXPORTING STORAGE
export { storage, firebase as default };
