import {
    getDownloadURL,
    uploadBytes,
    ref,
    deleteObject,
} from "firebase/storage";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { storage, pictures, videos, auth } from "./firebase.config";

// create user with email and password in firebase
function createUserFirebase(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sendEmailVerification(auth.currentUser);
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            return null;
        });
}

// check if user is logged in
function checkUserLoggedIn() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            return user;
        } else {
            return null;
        }
    });
}

// login user with email and password in firebase
function loginUserFirebase(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}

// upload pictures to firebase storage
function uploadFile(blob, name, type) {
    var path = "";
    var bool = false;
    if (type === "pdp") {
        path = ref(pictures, name + ".png")
        uploadBytes(path, blob)
        .then((snapshot) => {
            bool = true;
        })
        .catch((error) => {
            console.error(error);
            bool = false;
        });
    } else if (type === "vid") {
        path = ref(videos, name + ".mp4")
        uploadBytes(path, blob)
        .then((snapshot) => {
            bool = true;
        })
        .catch((error) => {
            console.error(error);
            bool = false;
        });
    }
    return bool;
}

// delete file from firebase storage
function deleteFile(file, type) {
    const storageRef = ref(storage);
    const fileRef = ref(storageRef, `${type}/${file.name}`);
    return deleteObject(fileRef);
}

// get download url from firebase storage
function getDownloadUrl(file, type) {
    const storageRef = ref(storage);
    const fileRef = ref(storageRef, `${type}/${file.name}`);
    return getDownloadURL(fileRef);
}

export {
    uploadFile,
    deleteFile,
    getDownloadUrl,
    createUserFirebase,
    loginUserFirebase,
    checkUserLoggedIn,
};
