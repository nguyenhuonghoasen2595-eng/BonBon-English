// XỬ LÝ ÂM THANH & TỐC ĐỘ ĐỌC
let currentSpeed = 1.0;

function setSpeed(speed) {
  currentSpeed = speed;
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.classList.toggle('active', parseFloat(btn.innerText) === speed);
  });
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = currentSpeed;
    window.speechSynthesis.speak(utterance);
  }
}

function playCurrentFrontAudio() {
  const dataSource = getCurrentDataSource();
  const list = dataSource[currentTopic];
  if (list && list[currentIndex]) {
    speakText(currentMainTab === 'vocab' ? list[currentIndex].word : list[currentIndex].phrase);
  }
}

function playCurrentBackAudio() {
  const dataSource = getCurrentDataSource();
  const list = dataSource[currentTopic];
  if (list && list[currentIndex]) {
    speakText(currentMainTab === 'vocab' ? list[currentIndex].example : list[currentIndex].response);
  }
}