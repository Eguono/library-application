const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyCvbMx31cqaEKP7yABDDoa05VYzWP7fGj0",
    authDomain: "library-application-de802.firebaseapp.com",
    databaseURL: "https://library-application-de802.firebaseio.com",
    projectId: "library-application-de802",
    storageBucket: "library-application-de802.appspot.com",
    messagingSenderId: "992091428868"
};

module.exports = firebase.initializeApp(config);