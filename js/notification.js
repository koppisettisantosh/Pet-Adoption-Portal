function addNotification(message) {

    let notifications = JSON.parse(localStorage.getItem("notifications")) || [];

    notifications.push({
        message: message,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("notifications", JSON.stringify(notifications));
}

function displayNotifications() {

    const notificationList = document.getElementById("notification-list");

    if (!notificationList) return;

    const notifications = JSON.parse(localStorage.getItem("notifications")) || [];

    notificationList.innerHTML = "";

    notifications.forEach(notification => {

        notificationList.innerHTML += `
            <div>
                <p>${notification.message}</p>
                <small>${notification.date}</small>
            </div>
        `;
    });
}

displayNotifications();
