import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyAOWuD_NPEDm0Lq-_W9suZVjxQOL-q2iqU",
        authDomain: "pro68-9dc51.firebaseapp.com",
        databaseURL: "https://pro68-9dc51-default-rtdb.firebaseio.com",
        projectId: "pro68-9dc51",
        storageBucket: "pro68-9dc51.appspot.com",
        messagingSenderId: "198671110469",
        appId: "1:198671110469:web:9585722448548f1c2aae2c"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();