import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCt-Qqhs9sG9M--TPG4xRmoTgY7m87j3fk",
    authDomain: "wal1-papers.firebaseapp.com",
    databaseURL: "https://wal1-papers-default-rtdb.firebaseio.com",
    projectId: "wal1-papers",
    storageBucket: "wal1-papers.appspot.com",
    messagingSenderId: "692769197994",
    appId: "1:692769197994:web:410e9c12dec50a3f05e5d3" 
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)