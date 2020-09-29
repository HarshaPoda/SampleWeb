import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
	apiKey: 'AIzaSyCkMkRViH8pTLJV0dphOBGO_AoLPRGq9Y4',
    authDomain: 'webappdemo1-8f485.firebaseapp.com',
    databaseURL: 'https://webappdemo1-8f485.firebaseio.com',
    projectId: 'webappdemo1-8f485',
    storageBucket: 'webappdemo1-8f485.appspot.com',
    messagingSenderId: '913404090237',
    appId: '1:913404090237:web:5821bcfc70ed30380b1e14',
}//end of firebase connfigurations

firebase.initializeApp(firebaseConfig)

//utils
const db = firebase.firestore()
const auth = firebase.auth()

//collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}