// Send OTP
function sendOTP() {

    const number = document.getElementById("phone").value;

    // Mobile number check
    if (number.length < 10) {
        alert("Enter valid mobile number");
        return;
    }

    // Fake OTP
    window.generatedOTP = "123456";

    alert("OTP Sent Successfully\nYour OTP is: 123456");
}


// Verify OTP
function verifyOTP() {

    const enteredOTP = document.getElementById("otp").value;

    // OTP Check
    if (enteredOTP === window.generatedOTP) {

        // Save user number
        localStorage.setItem(
            "userNumber",
            document.getElementById("phone").value
        );

        alert("Login Success ✅");

        // Open Dashboard
        window.location.href = "dashboard.html";

    } else {

        alert("Wrong OTP ❌");

    }
}
