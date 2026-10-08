// js/main.js
import { playAudio, setAudioSpeed } from './audio.js';
import { initCardFlip, resetCardFlip } from './card-flip.js';

let currentIndex = 0;
const data = level1Animals; // Lấy dữ liệu từ file js/data/level1/animals.js

// Lấy DOM elements
const flashcard = document.getElementById('flashcard');
const cardImg = document.getElementById('card-img');
const cardWord = document.getElementById('card-word');
const cardMeaning = document.getElementById('card-meaning');
const cardExample = document.getElementById('card-example');
const cardExampleVi = document.getElementById('card-example-vi');

const currentIndexEl = document.getElementById('current-index');
const totalCountEl = document.getElementById('total-count');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const btnAudioWord = document.getElementById('btn-audio-word');
const btnAudioExample = document.getElementById('btn-audio-example');
const speedBtns = document.querySelectorAll('.speed-btn');

// 1. Khởi tạo tính năng lật thẻ
initCardFlip(flashcard);

// 2. Hiển thị tổng số bài
if (totalCountEl) totalCountEl.textContent = data.length;

// 3. Hàm tải dữ liệu lên thẻ
function loadCard(index) {
  const item = data[index];
  
  // Trả thẻ về mặt trước
  resetCardFlip(flashcard);

  // Cập nhật nội dung
  cardImg.src = item.image;
  cardWord.textContent = item.word;
  cardMeaning.textContent = item.meaning;
  cardExample.textContent = item.example || item.word;
  cardExampleVi.textContent = item.exampleVi || item.meaning;

  if (currentIndexEl) currentIndexEl.textContent = index + 1;

  // Cập nhật trạng thái nút Tiếp / Lùi
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === data.length - 1;
}

// 4. Lắng nghe sự kiện nút Audio
btnAudioWord?.addEventListener('click', (e) => {
  e.stopPropagation();
  playAudio(data[currentIndex].audio);
});

btnAudioExample?.addEventListener('click', (e) => {
  e.stopPropagation();
  playAudio(data[currentIndex].soundEffect || data[currentIndex].audio);
});

// 5. Lắng nghe sự kiện đổi tốc độ (1.0x, 0.75x, 0.5x)
speedBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    speedBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    setAudioSpeed(btn.dataset.speed);
  });
});

// 6. Lắng nghe sự kiện chuyển thẻ
prevBtn?.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadCard(currentIndex);
  }
});

nextBtn?.addEventListener('click', () => {
  if (currentIndex < data.length - 1) {
    currentIndex++;
    loadCard(currentIndex);
  }
});

// Chạy lần đầu
loadCard(currentIndex);