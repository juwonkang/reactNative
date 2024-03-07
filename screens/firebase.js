// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBviHH9jRscfHy7z5JzB15Y76RDLJl0Zc0',
  authDomain: 'react-native-todoapp-43f63.firebaseapp.com',
  projectId: 'react-native-todoapp-43f63',
  storageBucket: 'react-native-todoapp-43f63.appspot.com',
  messagingSenderId: '99947730178',
  appId: '1:99947730178:web:25d2b713f60a4a073b9e1b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app
