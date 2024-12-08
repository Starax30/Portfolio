const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;


let kaart = L.map('kaart').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(kaart);

L.marker([51.5, -0.09]).addTo(kaart)
    .bindPopup('AP-hogeschool')
    .openPopup();


