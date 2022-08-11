import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCX63PLQbgCcFA2RHGTY35El9agtE3hi9g",
    authDomain: "parser-1bbbd.firebaseapp.com",
    projectId: "parser-1bbbd",
    storageBucket: "parser-1bbbd.appspot.com",
    messagingSenderId: "486276824207",
    appId: "1:486276824207:web:d7024f33b0957b91eec4fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app, "gs://parser-1bbbd.appspot.com")
export { storage, db }
