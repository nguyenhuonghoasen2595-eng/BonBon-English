// XỬ LÝ SAO VÀ POPUP THƯỞNG
let totalStars = 0;

function completeTopic() {
  totalStars += 5;
  const totalStarsElement = document.getElementById("total-stars");
  if (totalStarsElement) totalStarsElement.innerText = totalStars;

  const select = document.getElementById("topic-select");
  const topicName = select ? select.options[select.selectedIndex].text : "";
  const typeText = (currentMainTab === 'vocab') ? "Từ vựng" : "Mẫu câu";

  const msgElement = document.getElementById("popup-message");
  if (msgElement) msgElement.innerText = `Bé đã hoàn thành xong phần ${typeText}: ${topicName}!`;

  const popupOverlay = document.getElementById("congrat-popup");
  if (popupOverlay) popupOverlay.style.display = "flex";

  playCongratSound();
}

function closePopupAndNext() {
  const popupOverlay = document.getElementById("congrat-popup");
  if (popupOverlay) popupOverlay.style.display = "none";

  const select = document.getElementById("topic-select");
  if (select && select.selectedIndex < select.options.length - 1) {
    select.selectedIndex += 1;
    changeTopic(select.value);
  } else if (select) {
    alert("🎉 Bé đã hoàn thành xuất sắc tất cả bài học trong cấp độ này!");
    select.selectedIndex = 0;
    changeTopic(select.value);
  }
}

function playCongratSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [261.63, 329.63, 392.00, 523.25];
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = freq;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + index * 0.1 + 0.3);
      osc.stop(ctx.currentTime + index * 0.1 + 0.3);
    });
  } catch(e) {}
}