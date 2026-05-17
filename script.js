<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NammaApp</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>NammaApp</h1>

    <input type="number" id="phone" placeholder="Phone Number">

    <div id="recaptcha-container"></div>

    <button id="sendOtp">Send OTP</button>

    <input type="text" id="otp" placeholder="Enter OTP">

    <button id="verifyOtp">Verify OTP</button>
  </div>

  <script type="module" src="script.js"></script>

</body>
</html>
