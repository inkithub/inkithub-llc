// JavaScript to handle the loading overlay
window.addEventListener("load", () => {
    const loadingOverlay = document.getElementById("loading");
    loadingOverlay.style.opacity = "0"; // Fade out
    setTimeout(() => {
        loadingOverlay.style.display = "none"; 
    }, 500); // Matches the fade-out duration
});

// JavaScript for adding interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Modern website loaded successfully!');
});

function openPage() {
    window.open('e.html', '_blank'); // Opens e.html in a new tab
}
