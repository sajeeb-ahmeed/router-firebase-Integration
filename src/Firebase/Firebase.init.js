// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoIn3ctGggGE-3QC25YKPmOhdisism1Gw",
    authDomain: "router-firebase-intrergration.firebaseapp.com",
    projectId: "router-firebase-intrergration",
    storageBucket: "router-firebase-intrergration.appspot.com",
    messagingSenderId: "823369096992",
    appId: "1:823369096992:web:0f18337257cd5dc5804145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;