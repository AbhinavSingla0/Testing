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

    // Safe zone around YES button
    const safeLeft = yesBtn.offsetLeft - 40;
    const safeRight = yesBtn.offsetLeft + yesBtn.offsetWidth + 40;
    const safeTop = yesBtn.offsetTop - 40;
    const safeBottom = yesBtn.offsetTop + yesBtn.offsetHeight + 40;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    // If inside safe zone, push to other side
    if (
        randomX > safeLeft &&
        randomX < safeRight &&
        randomY > safeTop &&
        randomY < safeBottom
    ) {
        randomX = maxX - randomX;
        randomY = maxY - randomY;
    }

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}



noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// YES click
yesBtn.addEventListener("click", () => {
    launchConfetti();

    setTimeout(() => {
        questionBox.classList.add("hidden");
        greetingBox.classList.remove("hidden");
    }, 800);
});


// ⭐ Dynamic stars
function createStars(count) {
    const starsContainer = document.querySelector(".stars");
    starsContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 5 + 5;

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
    const starCount = Math.floor(area / 8000);
    createStars(starCount);
}

function launchConfetti() {
    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background =
            `hsl(${Math.random() * 360}, 100%, 60%)`;
        confetti.style.animationDuration =
            2 + Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}


window.addEventListener("load", initStars);
window.addEventListener("resize", initStars);
