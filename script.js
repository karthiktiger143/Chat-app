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

appId: "1:1068448599469:web:8f02d17e456597de75e524",

measurementId: "G-ZGL72NLPVS"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.recaptchaVerifier = new RecaptchaVerifier(
auth,
'recaptcha-container',
{}
);

window.sendOTP = async function(){

const phoneNumber =
document.getElementById('phone').value;

const appVerifier =
window.recaptchaVerifier;

confirmationResult =
await signInWithPhoneNumber(
auth,
phoneNumber,
appVerifier
);

alert("OTP Sent");

}

window.verifyOTP = async function(){

const code =
document.getElementById('otp').value;

await confirmationResult.confirm(code);

alert("Login Success");

window.location.href = "home.html";

}