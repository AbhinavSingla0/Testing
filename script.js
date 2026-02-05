const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const greetingBox = document.getElementById("greetingBox");
const buttonArea = document.getElementById("buttonArea");

// Move NO button VERY FAST & stay inside container
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

// Make it impossible to catch 😈
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// YES click
yesBtn.addEventListener("click", () => {
    questionBox.classList.add("hidden");
    greetingBox.classList.remove("hidden");
});
