// Dữ liệu mẫu ban đầu
let currentCategory = 'vocab'; // 'vocab' hoặc 'sentences'
let selectedTopic = '';
let currentLevel = 1;

// Đổi Tab Từ vựng / Mẫu câu
function switchCategory(cat) {
    currentCategory = cat;
    const btns = document.querySelectorAll('.nav-btn');
    btns[0].classList.toggle('active', cat === 'vocab');
    btns[1].classList.toggle('active', cat === 'sentences');

    const title = document.getElementById('section-title');
    if (cat === 'vocab') {
        title.innerText = '📚 Học Từ Vựng Theo Chủ Đề';
    } else {
        title.innerText = '💬 Mẫu Câu Giao Tiếp Thông Dụng';
    }
    showScreen('screen-main');
}

// Chuyển đổi giữa các màn hình
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');

    const backBtn = document.getElementById('back-btn');
    if (screenId === 'screen-main') {
        backBtn.classList.add('hidden');
    } else {
        backBtn.classList.remove('hidden');
    }
}

// Bấm chọn Chủ đề
function openTopic(topicName, level) {
    selectedTopic = topicName;
    currentLevel = level;
    document.getElementById('active-topic-name').innerText = `Chủ đề: ${topicName} (Level ${level})`;
    showScreen('screen-activities');
}

// Bấm chọn Hoạt động (Flashcard / Game / Nghe)
function startActivity(type) {
    const workspace = document.getElementById('workspace-content');
    
    if (type === 'flashcard') {
        workspace.innerHTML = `
            <div class="flashcard-box">
                <div class="emoji">🐶</div>
                <h1>Dog</h1>
                <p>Con chó</p>
                <br>
                <button class="topic-btn" onclick="speak('Dog')">🔊 Nghe phát âm</button>
            </div>
        `;
    } else if (type === 'game') {
        workspace.innerHTML = `
            <div style="text-align:center; padding: 40px; background:white; border-radius:20px;">
                <h2>🎮 Game Ôn Tập: ${selectedTopic}</h2>
                <p style="margin: 20px 0;">Tính năng Game trắc nghiệm chọn hình đang được dựng...</p>
            </div>
        `;
    } else if (type === 'listening') {
        workspace.innerHTML = `
            <div style="text-align:center; padding: 40px; background:white; border-radius:20px;">
                <h2>🎧 Luyện Nghe Phản Xạ: ${selectedTopic}</h2>
                <p style="margin: 20px 0;">Tính năng Luyện nghe phản xạ đang được dựng...</p>
            </div>
        `;
    }
    showScreen('screen-workspace');
}

// Nút Quay lại
function goBack() {
    const workspace = document.getElementById('screen-workspace');
    const activities = document.getElementById('screen-activities');

    if (!workspace.classList.contains('hidden')) {
        showScreen('screen-activities');
    } else if (!activities.classList.contains('hidden')) {
        showScreen('screen-main');
    }
}

// Phát âm
function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
}