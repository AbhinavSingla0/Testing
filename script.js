const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const greetingBox = document.getElementById("greetingBox");
const buttonArea = document.getElementById("buttonArea");

// Move NO button
function moveNoButton() {
    const areaRect = buttonArea.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = areaRect.width - btnRect.width;
    const maxY = areaRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// YES click
yesBtn.addEventListener("click", () => {
    questionBox.classList.add("hidden");
    greetingBox.classList.remove("hidden");
});

// ⭐ Dynamic stars
function createStars(count) {
    const starsContainer = document.querySelector(".stars");
    starsContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 4 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.animationDelay = Math.random() * 2 + "s";

        starsContainer.appendChild(star);
    }
}

// Generate stars based on screen size
function initStars() {
    const area = window.innerWidth * window.innerHeight;
    const starCount = Math.floor(area / 4000);
    createStars(starCount);
}

window.addEventListener("load", initStars);
window.addEventListener("resize", initStars);
