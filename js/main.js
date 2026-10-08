import { AppRouter } from './app.js';
import { AudioManager } from './modules/audio.js';
import { CardFlipper } from './modules/card-flip.js';
import { RewardManager } from './modules/reward.js';

document.addEventListener("DOMContentLoaded", () => {
  const audio = new AudioManager();
  const flipper = new CardFlipper(document.getElementById("flashcard"));
  const reward = new RewardManager(document.getElementById("score-val"));

  let currentList = (typeof vocabData !== 'undefined') ? vocabData : [];
  let index = 0;

  // Khởi tạo router trang chủ
  new AppRouter((mode, level) => {
    // Reset bài học khi bé chọn Level mới
    index = 0;
    loadCard(index);
  });

  function loadCard(i) {
    if (currentList.length === 0) return;
    flipper.reset();
    
    const item = currentList[i];
    document.getElementById("card-word").innerText = item.word;
    document.getElementById("card-meaning").innerText = item.meaning;
    document.getElementById("card-img").src = item.image;
    document.getElementById("card-example").innerText = item.example;
    document.getElementById("card-example-vi").innerText = item.exampleVi;
    
    document.getElementById("current-index").innerText = i + 1;
    document.getElementById("total-index").innerText = currentList.length;
  }

  document.getElementById("next-btn")?.addEventListener("click", () => {
    if (index < currentList.length - 1) {
      index++;
      loadCard(index);
      reward.addPoint();
    }
  });

  document.getElementById("prev-btn")?.addEventListener("click", () => {
    if (index > 0) {
      index--;
      loadCard(index);
    }
  });

  document.getElementById("btn-audio-word")?.addEventListener("click", () => {
    audio.speak(currentList[index].audioText);
  });

  document.getElementById("btn-audio-example")?.addEventListener("click", () => {
    audio.speak(currentList[index].exampleAudioText);
  });

  document.querySelectorAll(".speed-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".speed-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      audio.setSpeed(e.target.dataset.speed);
    });
  });
});