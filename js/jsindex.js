const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;


    // Het juiste wachtwoord
    const correctPassword = "letsgetpro";

    // Controleer of de gebruiker al is geverifieerd
    const isVerified = localStorage.getItem("isVerified");

    if (isVerified === "true") {
      // Als al geverifieerd, toon de inhoud direct
      document.body.style.display = "block";
    } else {
      // Vraag de gebruiker om het wachtwoord
      const userPassword = prompt("Voer het wachtwoord in:");

      if (userPassword === correctPassword) {
        // Als het wachtwoord juist is, sla op in localStorage en toon de inhoud
        localStorage.setItem("isVerified", "true");
        document.body.style.display = "block";
      } else {
        // Bij onjuist wachtwoord, geef een melding en sluit de pagina
        alert("Onjuist wachtwoord. Toegang geweigerd.");
        window.location.href = "https://www.google.com"; // Doorverwijzen naar een andere pagina
      }
    }