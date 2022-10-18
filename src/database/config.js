import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCJTirdR-TnFZ8byhIqNCpSNbD0EYvHV-A",
    authDomain: "photowall-21645.firebaseapp.com",
    databaseURL: "https://photowall-21645-default-rtdb.firebaseio.com",
    projectId: "photowall-21645",
    storageBucket: "photowall-21645.appspot.com",
    messagingSenderId: "865161086310",
    appId: "1:865161086310:web:9c85e5bc4c248f4f88f4a7",
    measurementId: "G-183226B27F"
  };

  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()

  export {database}

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);