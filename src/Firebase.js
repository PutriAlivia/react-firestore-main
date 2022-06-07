import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCNbtAvgQdgDHfnc5ymZPEocGw0floCw0I",
  authDomain: "reactfirestore-1e911.firebaseapp.com",
  projectId: "reactfirestore-1e911",
  storageBucket: "reactfirestore-1e911.appspot.com",
  messagingSenderId: "495733106478",
  appId: "1:495733106478:web:d10c459e142e6b665cbcbf"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
