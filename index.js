const hamburger = document.querySelector(".hamburger");
const navText = document.querySelector(".navtext");


hamburger.addEventListener("click", responsiveMobile);

function responsiveMobile() {
    hamburger.classList.toggle("active");
    navText.classList.toggle("active");
}
