import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCPqtQn2APFkPvuS9HdJYvVV09YyIF9_ug",
    authDomain: "team-voting-app-98b33.firebaseapp.com",
    databaseURL: "https://team-voting-app-98b33-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-98b33",
    storageBucket: "team-voting-app-98b33.appspot.com",
    messagingSenderId: "392903798533",
    appId: "1:392903798533:web:ee06ceb4b9ee03a8ac916c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();