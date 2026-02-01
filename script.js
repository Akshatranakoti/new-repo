const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const box = document.querySelector(".buttons");

function moveNoButton() {
  const boxWidth = box.clientWidth;
  const boxHeight = box.clientHeight;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const padding = 10;

  // Minimum jump distance (so it REALLY moves)
  const minJumpX = boxWidth / 3;
  const minJumpY = boxHeight / 3;

  let x, y;

  do {
    x = Math.random() * (boxWidth - btnWidth - padding);
    y = Math.random() * (boxHeight - btnHeight - padding);
  } while (
    Math.abs(x - noBtn.offsetLeft) < minJumpX &&
    Math.abs(y - noBtn.offsetTop) < minJumpY
  );

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Move on hover
noBtn.addEventListener("mouseenter", moveNoButton);

// ALSO move if cursor gets too close 😈
noBtn.addEventListener("mousemove", moveNoButton);

yesBtn.addEventListener("click", () => {
  window.location.href = "love.html";
});
