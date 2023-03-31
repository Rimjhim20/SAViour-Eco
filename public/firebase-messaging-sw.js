import firebase from 'firebase/app';
import 'firebase/messaging';


const firebaseConfig = {
    apiKey: "AIzaSyDhD_RiDejHYsDyXeGZ6Vtiu-KSlq6GFpQ",
    authDomain: "solution-f5982.firebaseapp.com",
    databaseURL: "https://solution-f5982-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "solution-f5982",
    storageBucket: "solution-f5982.appspot.com",
    messagingSenderId: "123087560437",
    appId: "1:123087560437:web:7af189c5e721dd67516fbc",
    measurementId: "G-W0RNFHZVKD"
  };

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();
  messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
    };
  
    new Notification(notificationTitle, notificationOptions);
  });
  
  messaging.getToken({ vapidKey: '<YOUR-VAPID-KEY>' }).then((currentToken) => {
    if (currentToken) {
      console.log('Token:', currentToken);
      // send the token to your server or update your UI with the token
    } else {
      console.log('No registration token available.');
    }
  });
  
  messaging.onTokenRefresh(() => {
    messaging
      .getToken({ vapidKey: '<YOUR-VAPID-KEY>' })
      .then((refreshedToken) => {
        console.log('Token refreshed. ', refreshedToken);
        // send the refreshed token to your server or update your UI with the token
      })
      .catch((err) => {
        console.log('Unable to retrieve refreshed token. ', err);
      });
  });