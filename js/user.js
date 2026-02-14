document.addEventListener("DOMContentLoaded", function() {

    // REGISTER
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const user = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                phone: document.getElementById("phone").value
            };

            localStorage.setItem("user", JSON.stringify(user));

            alert("Registration Successful!");
            window.location.href = "login.html";
        });
    }

    // LOGIN
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                alert("Login Successful!");
                window.location.href = "profile.html";
            } else {
                alert("Invalid email or password");
            }
        });
    }

    // PROFILE DISPLAY
    if (document.getElementById("profileName")) {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            document.getElementById("profileName").innerText = user.name;
            document.getElementById("profileEmail").innerText = user.email;
            document.getElementById("profilePhone").innerText = user.phone;
        } else {
            window.location.href = "login.html";
        }
    }

});

// LOGOUT FUNCTION
function logout() {
    localStorage.removeItem("user");
    alert("Logged Out Successfully");
    window.location.href = "login.html";
}
