// BỘ ĐIỀU HƯỚNG BÀI HỌC VÀ CHUYỂN LEVEL/THEME
let currentMainTab = 'vocab';
let currentTopic = 'animals';
let currentLevel = 'level1';
let currentIndex = 0;

function getCurrentDataSource() {
  if (currentMainTab === 'vocab') {
    return (typeof vocabData !== 'undefined' && vocabData[currentLevel]) ? vocabData[currentLevel] : {};
  } else {
    return (typeof sentenceData !== 'undefined' && sentenceData[currentLevel]) ? sentenceData[currentLevel] : {};
  }
}

function changeLevel(levelKey) {
  currentLevel = levelKey;
  currentIndex = 0;

  // Tự động chuyển Theme CSS theo Level
  const themeLink = document.getElementById("theme-link");
  if (themeLink) {
    themeLink.href = `css/themes/${levelKey}-theme.css`;
  }

  showCard(currentIndex);
}

function switchMainTab(tabName) {
  currentMainTab = tabName;
  currentIndex = 0;

  document.getElementById("tab-vocab-btn").classList.toggle("active", tabName === 'vocab');
  document.getElementById("tab-sentence-btn").classList.toggle("active", tabName === 'sentence');

  const backTitle = document.getElementById("back-title");
  if (backTitle) backTitle.innerText = (tabName === 'vocab') ? "💡 Câu Ví Dụ" : "💬 Mẫu Câu Trả Lời";

  showCard(currentIndex);
}

function changeTopic(topicKey) {
  currentTopic = topicKey;
  currentIndex = 0;
  showCard(currentIndex);
}

function showCard(index) {
  const dataSource = getCurrentDataSource();
  const list = dataSource[currentTopic];

  if (!list || index >= list.length) {
    completeTopic();
    return;
  }

  resetCardFlip();

  const item = list[index];

  document.getElementById("word").innerText = (currentMainTab === 'vocab') ? item.word : item.phrase;
  document.getElementById("meaning").innerText = item.meaning;
  document.getElementById("example-en").innerText = (currentMainTab === 'vocab') ? item.example : item.response;
  document.getElementById("example-vi").innerText = (currentMainTab === 'vocab') ? item.exampleVi : item.responseVi;
  document.getElementById("card-image").src = item.image;

  document.getElementById("progress-text").innerText = `${index + 1} / ${list.length}`;
  document.getElementById("progress-bar-fill").style.width = `${((index + 1) / list.length) * 100}%`;

  playCurrentFrontAudio();
}

function nextItem() {
  const dataSource = getCurrentDataSource();
  const list = dataSource[currentTopic];
  if (list && currentIndex < list.length - 1) {
    currentIndex++;
    showCard(currentIndex);
  } else {
    completeTopic();
  }
}

function prevItem() {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  }
}

window.onload = function() {
  showCard(0);
};