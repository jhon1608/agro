
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');



/*Update with yours config*/
const firebaseConfig = {
    apiKey: 'AIzaSyBxoe9Jk-5i5khIE38idSK0r8N8qP0kUa8',
    appId: '1:150792524703:web:4210a7a0f8aca2d311e3aa',
    messagingSenderId: '150792524703',
    projectId: 'openpass-api',
    authDomain: 'openpass-api.firebaseapp.com',
    databaseURL: 'https://openpass-api.firebaseio.com',
    storageBucket: 'openpass-api.appspot.com',
    measurementId: 'G-2L7WYEG2WF',
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


