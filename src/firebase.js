import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey            : 'AIzaSyDu81B2Gfia5FMbTweRjjTNJcxkndOCVkc',
	authDomain        : 'clone-c2da3.firebaseapp.com',
	databaseURL       : 'https://clone-c2da3.firebaseio.com',
	projectId         : 'clone-c2da3',
	storageBucket     : 'clone-c2da3.appspot.com',
	messagingSenderId : '11237417630',
	appId             : '1:11237417630:web:b83c96f8c1d7f9a9e9d18f',
	measurementId     : 'G-RWG88LBPZ8'
});

const auth = firebaseApp.auth();

export { auth };
