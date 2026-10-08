// js/audio.js

let currentSpeed = 1.0;

// Cập nhật tốc độ đọc
export function setAudioSpeed(speed) {
  currentSpeed = parseFloat(speed);
}

// Lấy tốc độ hiện tại
export function getAudioSpeed() {
  return currentSpeed;
}

// Hàm phát audio
export function playAudio(audioPath) {
  if (!audioPath) return;
  const audio = new Audio(audioPath);
  audio.playbackRate = currentSpeed;
  audio.play().catch(err => console.log("Chưa tìm thấy file audio:", audioPath));
}