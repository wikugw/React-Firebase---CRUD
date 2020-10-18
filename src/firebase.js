import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBd2qc485_NdLPAiE3k_zQ755UQnpX658U",
  authDomain: "crud-react-ddf4c.firebaseapp.com",
  databaseURL: "https://crud-react-ddf4c.firebaseio.com",
  projectId: "crud-react-ddf4c",
  storageBucket: "crud-react-ddf4c.appspot.com",
  messagingSenderId: "892966850074",
  appId: "1:892966850074:web:4939af3982f5c1142c0ba3"
};
// Initialize Firebase
const firebaseDaatabase = firebase.initializeApp(firebaseConfig);

export default firebaseDaatabase.database().ref();