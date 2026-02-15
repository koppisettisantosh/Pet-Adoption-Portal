function submitAdoption(event) {
    event.preventDefault();

    const petName = document.getElementById("petName").value;
    const userName = document.getElementById("userName").value;
    const contact = document.getElementById("contact").value;

    const adoption = {
        petName,
        userName,
        contact,
        status: "Pending"
    };

    let adoptions = JSON.parse(localStorage.getItem("adoptions")) || [];

    adoptions.push(adoption);

    localStorage.setItem("adoptions", JSON.stringify(adoptions));

    alert("Adoption request submitted successfully!");

    window.location.href = "my-adoptions.html";
}

function displayAdoptions() {

    const adoptionList = document.getElementById("adoption-list");

    if (!adoptionList) return;

    const adoptions = JSON.parse(localStorage.getItem("adoptions")) || [];

    adoptionList.innerHTML = "";

    adoptions.forEach((adoption, index) => {

        adoptionList.innerHTML += `
            <div>
                <h3>Pet: ${adoption.petName}</h3>
                <p>Name: ${adoption.userName}</p>
                <p>Contact: ${adoption.contact}</p>
                <p>Status: ${adoption.status}</p>
                <button onclick="cancelAdoption(${index})">Cancel</button>
            </div>
        `;
    });
}

function cancelAdoption(index) {

    let adoptions = JSON.parse(localStorage.getItem("adoptions")) || [];

    adoptions.splice(index, 1);

    localStorage.setItem("adoptions", JSON.stringify(adoptions));

    alert("Adoption request cancelled");

    displayAdoptions();
}

displayAdoptions();
