import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "./config/firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

export const ROLE = {
  user: 1,
  admin: 99,
};

export const signUp = async function (email, password, userData) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    const userRef = doc(collection(db, "users"));

    await setDoc(userRef, {
      ...userData,
      role: ROLE.user,
    });

    console.log("register success");
    return user;
  } catch (error) {
    return error;
  }
};

export const signIn = async function (email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    console.log("login success");
  } catch (error) {
    return error;
  }
};

export const logout = async function () {
  try {
    await signOut(auth);

    console.log("logout success");
  } catch (error) {
    return error;
  }
};

export const readData = async function (collectionName) {
  try {
    const docRef = collection(db, collectionName);
    const docSnap = await getDocs(docRef);

    const data = docSnap.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return data;
  } catch (error) {
    return error;
  }
};
