import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXwQyGDYL3SCkV77N6mYpRkPy4MXPveUQ",
  authDomain: "my-portfolio-2b1b6.firebaseapp.com",
  projectId: "my-portfolio-2b1b6",
  storageBucket: "my-portfolio-2b1b6.firebasestorage.app",
  messagingSenderId: "752340430352",
  appId: "1:752340430352:web:c3600d74ceb3a169c1e495",
  measurementId: "G-1CDEG9NL53"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addContactMessage(data) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}