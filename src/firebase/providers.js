import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return { ok: true, displayName, email, photoURL, uid };
  } catch (error) {
    // Handle Errors here.
    return { ok: false, errorMessage: error.message };
  }
};

export const registreUserWithEmailPassword = async ({
  displayName,
  email,
  password,
}) => {
  try {
    const res = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = res.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return { ok: true, email, uid, displayName, photoURL };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const singInWithEmailPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, displayName, photoURL } = result.user;

    return { ok: true, uid, email, displayName, photoURL };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};
