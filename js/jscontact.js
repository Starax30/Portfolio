const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;


let kaart = L.map('kaart').setView([51.22978, 4.4178], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(kaart);

L.marker([51.22978, 4.4178]).addTo(kaart)
    .bindPopup('AP-hogeschool')
    .openPopup();


