import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBRYCQ_QcAuMZt5Et7oQHCF8fMGe5fpu2Y",
    authDomain: "todo-list-vue-a0765.firebaseapp.com",
    projectId: "todo-list-vue-a0765",
    storageBucket: "todo-list-vue-a0765.appspot.com",
    messagingSenderId: "648987841296",
    appId: "1:648987841296:web:eaf587728a1a49b9724b95"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const auth = firebase.auth()

  const profileCollection = db.collection('profile')
  const tasksCollection = db.collection('tasks')

  export {
      db, auth, profileCollection, tasksCollection
  }