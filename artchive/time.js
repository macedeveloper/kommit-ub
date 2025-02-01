updateDateTime();
setInterval(updateDateTime, 1000);

function updateDateTime() {
    const now = new Date();

    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');

    let day = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let year = now.getFullYear();

    let timeString = `${hours}:${minutes}`;
    let dateString = `${day}/${month}/${year}`;

    document.getElementById("time").textContent = timeString;
    document.getElementById("date").textContent = dateString;
}