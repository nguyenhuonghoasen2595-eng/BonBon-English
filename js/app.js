// BỘ ĐIỀU HƯỚNG THEO PHÂN CẤP (Category -> Level -> Topic -> Flashcard)
let currentMainTab = 'vocab'; // 'vocab' hoặc 'sentence'
let currentLevel = 'level1';   // 'level1', 'level2'...
let currentTopic = 'animals';  // 'animals', 'colors'...
let currentIndex = 0;

// Danh sách tên hiển thị tiếng Việt của các Chủ đề
const topicNames = {
  animals: "🐶 Động vật",
  colors: "🎨 Màu sắc",
  fruits: "🍎 Hoa quả",
  body: "👁️ Bộ phận cơ thể",
  toys: "⚽ Đồ chơi",
  actions: "🏃 Hành động"
};

function getCurrentDataSource() {
  if (currentMainTab === 'vocab') {
    return (typeof vocabData !== 'undefined' && vocabData[currentLevel]) ? vocabData[currentLevel] : {};
  } else {
    return (typeof sentenceData !== 'undefined' && sentenceData[currentLevel]) ? sentenceData[currentLevel] : {};
  }
}

// 1. CHUYỂN BƯỚC Ở TRANG CHỦ
function selectCategory(category) {
  currentMainTab = category;
  document.getElementById('step-category').style.display = 'none';
  document.getElementById('step-level').style.display = 'block';

  const title = category === 'vocab' ? "Từ Vựng: Chọn Cấp Độ" : "Mẫu Câu: Chọn Cấp Độ";
  document.getElementById('level-step-title').innerText = title;
}

function selectLevel(levelKey) {
  currentLevel = levelKey;
  
  // Đổi Theme màu sắc theo Level
  const themeLink = document.getElementById("theme-link");
  if (themeLink) {
    themeLink.href = `css/themes/${levelKey}-theme.css`;
  }

  // Lấy các Topic có trong Level này để hiện nút bấm
  const dataSource = getCurrentDataSource();
  const topics = Object.keys(dataSource);

  const container = document.getElementById('topic-buttons-container');
  container.innerHTML = '';

  topics.forEach(topicKey => {
    const btn = document.createElement('button');
    btn.className = 'btn-topic-card';
    btn.innerText = topicNames[topicKey] || topicKey;
    btn.onclick = () => startLearningTopic(topicKey);
    container.appendChild(btn);
  });

  document.getElementById('step-level').style.display = 'none';
  document.getElementById('step-topic').style.display = 'block';
}

function backToStep(step) {
  if (step === 'category') {
    document.getElementById('step-level').style.display = 'none';
    document.getElementById('step-category').style.display = 'block';
  } else if (step === 'level') {
    document.getElementById('step-topic').style.display = 'none';
    document.getElementById('step-level').style.display = 'block';
  }
}

// 2. BẮT ĐẦU HỌC TỪNG CHỦ ĐỀ
function startLearningTopic(topicKey) {
  currentTopic = topicKey;
  currentIndex = 0;

  // Chuyển màn hình từ Trang chủ sang Học Flashcard
  document.getElementById('home-view').style.display = 'none';
  document.getElementById('study-view').style.display = 'block';

  // Cập nhật thông tin tiêu đề góc trên
  const typeText = currentMainTab === 'vocab' ? "Từ vựng" : "Mẫu câu";
  const levelText = currentLevel === 'level1' ? "Level 1" : "Level 2";
  const topicText = topicNames[topicKey] || topicKey;
  document.getElementById('current-badge').innerText = `${typeText} • ${levelText} • ${topicText}`;

  // Cập nhật thẻ ví dụ mặt sau
  const backTitle = document.getElementById("back-title");
  if (backTitle) backTitle.innerText = (currentMainTab === 'vocab') ? "💡 Câu Ví Dụ" : "💬 Mẫu Câu Trả Lời";

  showCard(currentIndex);
}

// 3. ĐIỀU HƯỚNG TRONG LÚC HỌC
function showHomeView() {
  document.getElementById('study-view').style.display = 'none';
  document.getElementById('home-view').style.display = 'block';
  
  // Reset về bước 1 ở Trang chủ
  document.getElementById('step-category').style.display = 'block';
  document.getElementById('step-level').style.display = 'none';
  document.getElementById('step-topic').style.display = 'none';
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
  showHomeView();
};