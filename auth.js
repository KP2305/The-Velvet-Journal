
// LOGIN
document.getElementById("loginFormElement").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const response = await fetch("login.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
  });

  const result = await response.text();
  if (result === "success") {
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("username", username);
    window.location.reload();
  } else {
    alert("Login failed: " + result);
  }
});

// SIGN-UP
document.getElementById("signupFormElement").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const response = await fetch("signup.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  });

  const result = await response.text();
  if (result === "success") {
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("username", username);
    window.location.reload();
  } else {
    alert("Signup failed: " + result);
  }
});

// Toggle between login/signup forms
function toggleFormLink() {
  const loginForm = document.getElementById("loginFormElement");
  const signupForm = document.getElementById("signupFormElement");
  const toggleLink = document.getElementById("toggleFormLink");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    toggleLink.textContent = "Don't have an account? Sign up";
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    toggleLink.textContent = "Already have an account? Login";
  }
}

// LOGOUT
function logout() {
  localStorage.clear();
  window.location.reload();
}
