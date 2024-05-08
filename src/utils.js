import {
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
} from "firebase/auth";
import { auth, db } from "./config/firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const ROLE = {
  user: 1,
  admin: 99,
};

function generateID(length = 16) {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return id;
}

export const signUp = async function (email, password, userData) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    console.log();

    const userRef = doc(collection(db, "users"));

    await setDoc(userRef, {
      ...userData,
      role: ROLE.user,
      userId: user.user.uid,
    });

    console.log("register success");
    return user;
  } catch (error) {
    console.log(error);
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

export const updateData = async function (collectionName, data) {
  try {
    const docRef = doc(db, collectionName, data.id);

    await updateDoc(docRef, {
      ...data,
    });
  } catch (error) {
    return error;
  }
};

export const changeEmail = async function (person, newEmail) {
  try {
    const userCredential = EmailAuthProvider.credential(
      person.email,
      person.password
    );

    await reauthenticateWithCredential(auth.currentUser, userCredential);

    await updateEmail(auth.currentUser, newEmail);

    await sendEmailVerification(auth.currentUser);

    person.email = newEmail;

    updateData("users", person);
  } catch (error) {
    console.log(error);
    return error;
  }
};
