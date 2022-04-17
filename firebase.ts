// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBuu0YHXOcgmqWLZl-fiMn6lG2wUhdPg8k',
  authDomain: 'next-firebase-stripe-39bf8.firebaseapp.com',
  databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
  projectId: 'next-firebase-stripe-39bf8',
  storageBucket: 'next-firebase-stripe-39bf8.appspot.com',
  messagingSenderId: '777709922250',
  appId: '1:777709922250:web:4500ee09dca93e1406d133',
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
