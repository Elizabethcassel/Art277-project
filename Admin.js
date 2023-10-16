document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // below are the username and password in the orange
    if (username === "admin" && password === "12345") {
        // below is the page that is linked to the login form
    window.location.href = "Adminstration.html";
    } 
    else {
      showMessage("Invalid username or password", "error");
    }
  });
  
  function showMessage(message, type) {
    var messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.className = type;
  }