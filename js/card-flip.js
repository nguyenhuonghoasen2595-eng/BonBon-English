// XỬ LÝ LẬT THẺ 3D
function flipCard() {
  const cardInner = document.getElementById("card-inner");
  if (cardInner) cardInner.classList.toggle("flipped");
}

function resetCardFlip() {
  const cardInner = document.getElementById("card-inner");
  if (cardInner) cardInner.classList.remove("flipped");
}