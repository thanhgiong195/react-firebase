import * as firebase from 'firebase';
import 'firebase/firestore';

let config = {
  apiKey: 'AIzaSyC2D_fRAXhQ2uZtsTo08tOUZotJr2RxxUs',
  authDomain: 'react-firebase-97889.firebaseapp.com',
  projectId: 'react-firebase-97889',
  storageBucket: 'react-firebase-97889.appspot.com',
  messagingSenderId: '827541736492',
  appId: '1:827541736492:web:46881593adc116db959589',
  measurementId: 'G-7W7L2767SB',
};

firebase.initializeApp(config);

export default firebase.firestore();
