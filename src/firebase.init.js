/* eslint-disable no-undef */
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// paste the config file here from the firebase project in console of firebase
//......



//.....
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }

//.....
// Creating auth
const auth = getAuth(app);
export default auth;