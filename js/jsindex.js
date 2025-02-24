const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// Het juiste wachtwoord
const correctPassword = "letsbeproductive";

// Controleer of de gebruiker al is geverifieerd in deze sessie
const isVerified = sessionStorage.getItem("isVerified");

if (isVerified === "true") {
  // Als al geverifieerd in deze sessie, toon de inhoud direct
  document.body.style.display = "block";
} else {
  let attempts = 0; // Teller voor pogingen
  let userPassword = null;

  while (attempts < 2) {
    userPassword = prompt("Voer het wachtwoord in (Terug te vinden op cv-website):"); // Vraag het wachtwoord

    if (userPassword === correctPassword) {
      // Als het wachtwoord juist is, sla op in sessionStorage en toon de inhoud
      sessionStorage.setItem("isVerified", "true");
      document.body.style.display = "block";
      break; // Verlaat de lus
    } else {
      // Wachtwoord onjuist, verhoog de teller en geef een melding
      attempts++;
      if (attempts < 2) {
        alert("Onjuist wachtwoord. Probeer het opnieuw.");
      }
    }
  }

  // Als de pogingen op zijn en het wachtwoord onjuist blijft
  if (attempts === 2 && userPassword !== correctPassword) {
    alert("Onjuist wachtwoord. Toegang geweigerd.");
    window.location.href = "https://www.google.com"; // Doorverwijzen naar een andere pagina
  }
}


    document.addEventListener("DOMContentLoaded", () => {
      const timelineItems = document.querySelectorAll(".timeline-content");
  
      const revealItems = () => {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;
  
        timelineItems.forEach((item) => {
          const itemTop = item.getBoundingClientRect().top + windowTop;
  
          if (itemTop < windowBottom - 50) {
            item.classList.add("visible");
          }
        });
      };
  
      // Activeer animatie bij laden en scrollen
      revealItems();
      window.addEventListener("scroll", revealItems);
    });

    document.addEventListener("DOMContentLoaded", () => {
      const timelineItems = document.querySelectorAll(".timeline-content");
  
      timelineItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          item.style.zIndex = "10"; // Breng het item naar voren
          item.style.transform = "scale(1.1)"; // Zoom in
          item.style.transition = "all 0.3s ease";
        });
  
        item.addEventListener("mouseleave", () => {
          item.style.zIndex = "1"; // Reset z-index
          item.style.transform = "scale(1)"; // Terug naar normaal
        });
      });
    });



