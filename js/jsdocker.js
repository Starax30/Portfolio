
document.addEventListener('DOMContentLoaded', function () {
    const watermark = document.createElement('div');
    watermark.className = 'watermark';
    watermark.style.backgroundImage = "url('assets/images/dock_kuber.png')"; // Voeg hier het pad naar het Docker-logo toe
    document.body.appendChild(watermark);
});
