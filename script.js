// Greet the user based on the time of day
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good morning! Thanks for visiting my portfolio.";
} else if (hour < 18) {
    greeting.textContent = "Good afternoon! Thanks for visiting my portfolio.";
} else {
    greeting.textContent = "Good evening! Thanks for visiting my portfolio.";
}

// Toggle dark mode
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});