const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

loginBtn.addEventListener("click", () => {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (fullName === "" || email === "" || password === "") {
        loginMessage.textContent = "Please fill in all fields before logging in.";
        loginMessage.style.color = "red";
        return;
    }

    loginMessage.textContent = `Welcome, ${fullName}! Login successful.`;
    loginMessage.style.color = "green";

    // Optional: clear the form after successful login
    document.getElementById("loginForm").reset();
});