function sendOTP() {
    const number = document.getElementById("phone").value;

    if (number.length < 10) {
        alert("Enter valid mobile number");
        return;
    }

    // Fake OTP
    window.generatedOTP = "123456";

    alert("OTP Sent Successfully\nYour OTP is: 123456");
}

function verifyOTP() {
    const enteredOTP = document.getElementById("otp").value;

    if (enteredOTP === window.generatedOTP) {
        alert("Login Success ✅");

        // Example next page
        window.location.href = "https://google.com";
    } else {
        alert("Wrong OTP ❌");
    }
}
