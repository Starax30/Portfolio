document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkom dat het formulier standaard wordt verzonden

    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Verkrijg de invoer en zet deze om naar kleine letters
    const pageContent = document.body.innerText.toLowerCase(); // Verkrijg de tekstinhoud van de pagina
    const result = pageContent.includes(searchTerm); // Controleer of de zoekterm in de inhoud voorkomt

    if (result) {
        alert('Onderwerp gevonden: ' + searchTerm);
        // Hier kun je eventueel ook een andere actie ondernemen, zoals het scrollen naar het onderdeel
    } else {
        alert('Onderwerp niet gevonden: ' + searchTerm);
    }
});
