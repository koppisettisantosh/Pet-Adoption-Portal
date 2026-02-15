const pets = [
    {
        id: 1,
        name: "Buddy",
        type: "Dog",
        breed: "Golden Retriever",
        age: "2 years",
        image: "images/dog1.jpg"
    },
    {
        id: 2,
        name: "Kitty",
        type: "Cat",
        breed: "Persian",
        age: "1 year",
        image: "images/cat1.jpg"
    },
    {
        id: 3,
        name: "Charlie",
        type: "Dog",
        breed: "Labrador",
        age: "3 years",
        image: "images/dog2.jpg"
    }
];

function displayPets() {
    const petList = document.getElementById("pet-list");

    if (!petList) return;

    petList.innerHTML = "";

    pets.forEach(pet => {
        petList.innerHTML += `
            <div>
                <h3>${pet.name}</h3>
                <p>Type: ${pet.type}</p>
                <p>Breed: ${pet.breed}</p>
                <button onclick="viewDetails(${pet.id})">View Details</button>
            </div>
        `;
    });
}

function viewDetails(id) {
    localStorage.setItem("petId", id);
    window.location.href = "pet-details.html";
}

function showPetDetails() {
    const id = localStorage.getItem("petId");
    const pet = pets.find(p => p.id == id);

    const petDetails = document.getElementById("pet-details");

    if (petDetails && pet) {
        petDetails.innerHTML = `
            <h2>${pet.name}</h2>
            <p>Type: ${pet.type}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Age: ${pet.age}</p>
        `;
    }
}

function searchPets() {
    const searchValue = document.getElementById("search").value.toLowerCase();

    const filteredPets = pets.filter(pet =>
        pet.name.toLowerCase().includes(searchValue) ||
        pet.type.toLowerCase().includes(searchValue)
    );

    const petList = document.getElementById("pet-list");

    petList.innerHTML = "";

    filteredPets.forEach(pet => {
        petList.innerHTML += `
            <div>
                <h3>${pet.name}</h3>
                <p>Type: ${pet.type}</p>
                <button onclick="viewDetails(${pet.id})">View Details</button>
            </div>
        `;
    });
}

function goBack() {
    window.location.href = "pets.html";
}

displayPets();
showPetDetails();
