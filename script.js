document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');

    // Get values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    // Validation flags
    let isValid = true;

    // Full Name Validation
    if (!fullName || fullName.length < 4 || !/^[a-zA-Z\s]+$/.test(fullName)) {
        document.getElementById('nameError').innerText = "Please enter a valid name";
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    

    // Email Validation
    if (!email || !/\S+@\S+\.\S+/.test(email) || /[^a-zA-Z0-9@.]/.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email address (only '@' is allowed as a special character).";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Password Validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    if (!password || !passwordPattern.test(password)) {
        document.getElementById('passwordError').innerText = "Password must be at least 8 characters, contain 1 uppercase letter, 1 number, and 1 special character.";
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Confirm Password Validation
    if (!confirmPassword || confirmPassword !== password) {
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    // Terms and Conditions Validation
    if (!terms) {
        document.getElementById('termsError').innerText = "You must agree to the Terms & Conditions.";
        document.getElementById('termsError').style.display = 'block';
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'flex';
        
        // Optionally: Here you would trigger an API call to send the verification email.
    }
});

// Resend Verification Email Button
document.getElementById('resendEmail').addEventListener('click', function () {
    alert('Verification email has been resent. Please check your inbox.');
    // Here, you would typically trigger an API call to resend the verification email.
});


function resendCode() {
    // Your resend logic here

    // Disable the button and start the timer
    const resendButton = document.getElementById('resendButton');
    resendButton.disabled = true;

    let countdown = 30;
    const timerMessage = document.getElementById('timerMessage');
    timerMessage.innerText = `Please wait ${countdown} seconds to resend.`;

    const interval = setInterval(() => {
        countdown--;
        timerMessage.innerText = `Please wait ${countdown} seconds to resend.`;

        if (countdown <= 0) {
            clearInterval(interval);
            resendButton.disabled = false;
            timerMessage.innerText = ""; // Clear the message
        }
    }, 1000);
}