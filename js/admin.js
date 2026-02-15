function adminLogin(event) {

    event.preventDefault();

    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    if (username === "admin" && password === "admin123") {

        localStorage.setItem("admin", "true");

        alert("Login successful");

        window.location.href = "admin-dashboard.html";

    } else {

        alert("Invalid admin credentials");

    }
}

function logout() {

    localStorage.removeItem("admin");

    window.location.href = "admin-login.html";
}

function displayUsers() {

    const userList = document.getElementById("user-list");

    if (!userList) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    userList.innerHTML = "";

    users.forEach((user, index) => {

        userList.innerHTML += `
            <div>
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <button onclick="deleteUser(${index})">Delete</button>
            </div>
        `;
    });
}

function deleteUser(index) {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.splice(index, 1);

    localStorage.setItem("users", JSON.stringify(users));

    displayUsers();
}

function displayAdoptions() {

    const adoptionList = document.getElementById("adoption-list");

    if (!adoptionList) return;

    const adoptions = JSON.parse(localStorage.getItem("adoptions")) || [];

    adoptionList.innerHTML = "";

    adoptions.forEach((adoption, index) => {

        adoptionList.innerHTML += `
            <div>
                <h3>${adoption.petName}</h3>
                <p>User: ${adoption.userName}</p>
                <p>Status: ${adoption.status}</p>
                <button onclick="approveAdoption(${index})">Approve</button>
                <button onclick="rejectAdoption(${index})">Reject</button>
            </div>
        `;
    });
}

function approveAdoption(index) {

    let adoptions = JSON.parse(localStorage.getItem("adoptions")) || [];

    adoptions[index].status = "Approved";

    localStorage.setItem("adoptions", JSON.stringify(adoptions));

    displayAdoptions();
}

function rejectAdoption(index) {

    let adoptions = JSON.parse(localStorage.getItem("adoptions")) || [];

    adoptions[index].status = "Rejected";

    localStorage.setItem("adoptions", JSON.stringify(adoptions));

    displayAdoptions();
}

displayUsers();
displayAdoptions();
