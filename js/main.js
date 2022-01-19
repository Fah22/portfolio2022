// get current year instance
const currentYear = new Date().getFullYear();

const year = document.getElementById('year');

year.innerHTML = currentYear + '';

let loader = document.getElementById("preloader");

// page loader function
setTimeout(window.addEventListener('load', () => {
    loader.style.display = "none";
}), 3000)