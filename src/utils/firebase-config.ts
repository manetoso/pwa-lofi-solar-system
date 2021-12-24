import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDDTXHCP5sivnggP1FAzWDkkUYRc1nHs8Y",
    authDomain: "crafting-table-77516.firebaseapp.com",
    projectId: "crafting-table-77516",
    storageBucket: "crafting-table-77516.appspot.com",
    messagingSenderId: "892630463329",
    appId: "1:892630463329:web:224d31a22b675126a64b20"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore( app )

const querySnapshot = getDocs(collection(db, "planets"))

const saveInLocal = () => {
    querySnapshot.then( ({ docs }) => {
        docs.map( ( doc ) => {
            window.localStorage.setItem( doc.id, JSON.stringify( doc.data() ) )
        })
    })
}

export {
    saveInLocal,
    querySnapshot
}