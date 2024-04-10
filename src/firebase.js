import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyByR85BzYMp5V-qmXcSIpJgM3DJtLrLAbA",
    authDomain: "otp-get-f725c.firebaseapp.com",
    projectId: "otp-get-f725c",
    storageBucket: "otp-get-f725c.appspot.com",
    messagingSenderId: "826260017421",
    appId: "1:826260017421:web:a9725a4081a37c1fec6044"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);