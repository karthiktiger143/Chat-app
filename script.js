import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCM2CUrWEyad180qCy-34PC4A0HOLaSWsg",
  authDomain: "nammaapp-e8b13.firebaseapp.com",
  projectId: "nammaapp-e8b13",
  storageBucket: "nammaapp-e8b13.firebasestorage.app",
  messagingSenderId: "1068448599469",
  appId: "1:1068448599469:web:8f02d17e456597de75e524"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sendOtp', {
  'size': 'normal'
});

const sendOtpBtn = document.getElementById("sendOtp");

sendOtpBtn.addEventListener("click", () => {
  const number = "+91" + document.getElementById("phone").value;

  signInWithPhoneNumber(auth, number, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP Sent");
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
});
