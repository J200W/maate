import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getStorage,
    ref,
} from "firebase/storage";
import {
    REACT_APP_apiKey,
    REACT_APP_authDomain,
    REACT_APP_projectId,
    REACT_APP_storageBucket,
    REACT_APP_messagingSenderId,
    REACT_APP_appId,
    REACT_APP_measurementId,
} from "@env";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: REACT_APP_apiKey,
    authDomain: REACT_APP_authDomain,
    projectId: REACT_APP_projectId,
    storageBucket: REACT_APP_storageBucket,
    messagingSenderId: REACT_APP_messagingSenderId,
    appId: REACT_APP_appId,
    measurementId: REACT_APP_measurementId,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
const pictures = ref(storageRef, "pdp");
const videos = ref(storageRef, "vid");

const auth = getAuth();

export { storage, pictures, videos, auth };
