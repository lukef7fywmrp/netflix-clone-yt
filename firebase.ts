// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyACOZ3MIyjT4GGk6_DIk0CS6Qo5aJ0nt4I',
  authDomain: 'netflix-clone-yt-90f08.firebaseapp.com',
  projectId: 'netflix-clone-yt-90f08',
  storageBucket: 'netflix-clone-yt-90f08.appspot.com',
  messagingSenderId: '1056238086651',
  appId: '1:1056238086651:web:7367ab319d5bf5bf84835e',
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
