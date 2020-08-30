import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCX2VcoHnj0E7uBt92jxE4wqGMg5Ujzea0',
  authDomain: 'space-planner-d632f.firebaseapp.com',
  databaseURL: 'https://space-planner-d632f.firebaseio.com',
  projectId: 'space-planner-d632f',
  storageBucket: 'space-planner-d632f.appspot.com',
  messagingSenderId: '767052313900',
  appId: '1:767052313900:web:302162203ebaf0fd2a6889',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
