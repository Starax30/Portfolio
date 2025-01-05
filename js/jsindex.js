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



