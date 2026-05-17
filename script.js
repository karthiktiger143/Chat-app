// Send OTP
function sendOTP() {

    const number = document.getElementById("phone").value;

    if (number.length < 10) {
        alert("Enter valid mobile number");
        return;
    }

    // OTP
    window.generatedOTP = "123456";

    alert("OTP Sent Successfully\nOTP: 123456");
}


// Verify OTP
function verifyOTP() {

    const enteredOTP = document.getElementById("otp").value;

    if (enteredOTP === window.generatedOTP) {

        const number =
        document.getElementById("phone").value;

        // Save Login
        localStorage.setItem("userNumber", number);

        // Small delay
        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 500);

    } else {

        alert("Wrong OTP ❌");

    }
}
