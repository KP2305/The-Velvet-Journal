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

// LOGOUT
function logout() {
  localStorage.clear();
  window.location.reload();
}
