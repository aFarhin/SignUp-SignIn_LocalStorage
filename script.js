const signupForm = document.querySelector("#signup-form");
const signinForm = document.querySelector("#signin-form");
const welcomeMessage = document.querySelector("#welcome-message");
const signupTogglePassword = document.getElementById('signup-toggle-password');
const signinTogglePassword = document.getElementById('signin-toggle-password');
const signupPassword = document.querySelector('#signup-password');
const signinPassword= document.querySelector('#signin-password');

// Handle sign-up form submission
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Sign-up successful. Please sign-in to continue.");
});

// Handle sign-in form submission
signinForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#signin-email").value;
  const password = document.querySelector("#signin-password").value;

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    welcomeMessage.textContent = `Welcome back, ${email}!`;
    signinForm.style.display = "none";
    signupForm.style.display = 'none';
    welcomeMessage.style.display="block";
  } else {
    signinForm.style.display = "block";
    alert("Invalid email or password. Please try again.");
  }
});

// Check if user is already signed in
if (localStorage.getItem("email") && localStorage.getItem("password")) {
  const storedEmail = localStorage.getItem("email");
  welcomeMessage.textContent = `Welcome back, ${storedEmail}!`;
  signinForm.style.display = "none";
}
window.addEventListener("load", () => {

    signinForm.style.display = "block";
    signupForm.style.display = 'block';
  });
  
  signupTogglePassword.addEventListener('click', function() {
    if (signupPassword.type === 'password') {
      signupPassword.type = 'text';
      alert("Confirmed to show password?")
      signupTogglePassword.classList.remove('fa-eye-slash');
      signupTogglePassword.classList.add('fa-eye');
    } else {
      signupPassword.type = 'password';
      signupTogglePassword.classList.remove('fa-eye');
      signupTogglePassword.classList.add('fa-eye-slash');
    }
  });
  
  signinTogglePassword.addEventListener('click', function() {
    if (signinPassword.type === 'password') {
      signinPassword.type = 'text';
      alert("Confirmed to show password?")
      signinTogglePassword.classList.remove('fa-eye-slash');
      signinTogglePassword.classList.add('fa-eye');
    } else {
      signinPassword.type = 'password';
      signinTogglePassword.classList.remove('fa-eye');
      signinTogglePassword.classList.add('fa-eye-slash');
    }
  });

