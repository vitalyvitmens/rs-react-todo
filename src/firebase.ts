import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDEiRpSe0kYvH010DuB-juNYpMjHcRMpP8',
  authDomain: 'todos-be319.firebaseapp.com',
  projectId: 'todos-be319',
  storageBucket: 'todos-be319.appspot.com',
  messagingSenderId: '183051406315',
  appId: '1:183051406315:web:5f6492f35131f9f3e527ae',
  databaseURL:
    'https://todos-be319-default-rtdb.europe-west1.firebasedatabase.app/',
}

const app = initializeApp(firebaseConfig)
export const firebaseDb = getDatabase(app)
