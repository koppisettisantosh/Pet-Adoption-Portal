function makePayment(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const petName = document.getElementById("petName").value;
    const amount = document.getElementById("amount").value;
    const method = document.getElementById("method").value;

    const payment = {
        name,
        petName,
        amount,
        method,
        date: new Date().toLocaleString()
    };

    let payments = JSON.parse(localStorage.getItem("payments")) || [];

    payments.push(payment);

    localStorage.setItem("payments", JSON.stringify(payments));

    window.location.href = "payment-success.html";
}

function displayPayments() {

    const paymentList = document.getElementById("payment-list");

    if (!paymentList) return;

    const payments = JSON.parse(localStorage.getItem("payments")) || [];

    paymentList.innerHTML = "";

    payments.forEach(payment => {

        paymentList.innerHTML += `
            <div>
                <h3>${payment.petName}</h3>
                <p>Name: ${payment.name}</p>
                <p>Amount: ₹${payment.amount}</p>
                <p>Method: ${payment.method}</p>
                <p>Date: ${payment.date}</p>
            </div>
        `;
    });
}

displayPayments();
