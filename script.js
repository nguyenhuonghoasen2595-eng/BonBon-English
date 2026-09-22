// Quản lý lịch sử luồng đi (History Stack)
let navigationHistory = ['step-home'];
let currentProgram = ''; // 'vocab' hoặc 'sentences'
let currentTopic = '';
let currentLevel = '';

// Dữ liệu danh mục Từ vựng theo chủ đề
const vocabTopics = [
    { id: 'animals', name: 'ĐỘNG VẬT', icon: '🐶' },
    { id: 'fruits', name: 'TRÁI CÂY', icon: '🍎' },
    { id: 'vehicles', name: 'PHƯƠNG TIỆN GIAO THÔNG', icon: '🚗' },
    { id: 'vegetables', name: 'RAU CỦ QUẢ', icon: '🥦' }
];

// Dữ liệu danh mục Mẫu câu giao tiếp theo tình huống
const sentenceTopics = [
    { id: 'home', name: 'GIAO TIẾP Ở NHÀ', icon: '🏠' },
    { id: 'supermarket', name: 'KHI ĐI SIÊU THỊ', icon: '🛒' },
    { id: 'park', name: 'ĐI CÔNG VIÊN', icon: '🏞️' },
    { id: 'mom', name: 'CHƠI CÙNG MẸ', icon: '👩‍👧' },
    { id: 'school', name: 'ĐI HỌC', icon: '🏫' },
    { id: 'out', name: 'ĐI CHƠI', icon: '🎈' }
];

// Chuyển màn hình
function navigateTo(stepId, breadcrumbText) {
    document.querySelectorAll('.page-step').forEach(el => el.classList.add('hidden'));
    document.getElementById(stepId).classList.remove('hidden');

    if (navigationHistory[navigationHistory.length - 1] !== stepId) {
        navigationHistory.push(stepId);
    }

    const backBtn = document.getElementById('back-btn');
    if (stepId === 'step-home') {
        backBtn.classList.add('hidden');
        navigationHistory = ['step-home'];
    } else {
        backBtn.classList.remove('hidden');
    }

    if (breadcrumbText) {
        document.getElementById('breadcrumb').innerText = breadcrumbText;
    }
}

// Nút Quay lại
function goBack() {
    if (navigationHistory.length > 1) {
        navigationHistory.pop();
        const previousStep = navigationHistory[navigationHistory.length - 1];
        navigateTo(previousStep);
    }
}

// Trở về trang chủ
function goToHome() {
    navigateTo('step-home', 'Trang chủ');
}

// BƯỚC 1: Chọn Từ vựng hoặc Mẫu câu
function selectProgram(prog) {
    currentProgram = prog;
    const isVocab = prog === 'vocab';
    const progName = isVocab ? 'TỪ VỰNG CHỦ ĐỀ' : 'MẪU CÂU GIAO TIẾP';
    const topicsData = isVocab ? vocabTopics : sentenceTopics;
    
    document.getElementById('topics-title').innerText = `DANH MỤC: ${progName}`;

    // Nạp danh mục tương ứng
    const topicsListEl = document.getElementById('topics-list');
    topicsListEl.innerHTML = topicsData.map(t => `
        <div class="mode-card" onclick="selectTopic('${t.name}')">
            <div class="mode-icon">${t.icon}</div>
            <h3>${t.name}</h3>
        </div>
    `).join('');

    navigateTo('step-topics', `Trang chủ > ${progName}`);
}

// BƯỚC 2: Chọn Chủ đề
function selectTopic(topicName) {
    currentTopic = topicName;
    document.getElementById('level-title').innerText = `CẤP ĐỘ: ${currentTopic}`;
    
    // Nạp danh sách Level 1 đến 5
    const levelsListEl = document.getElementById('levels-list');
    let levelsHTML = '';
    for (let i = 1; i <= 5; i++) {
        levelsHTML += `
            <div class="level-item" onclick="selectLevel(${i})">
                <span>CẤP ĐỘ / LEVEL ${i}</span>
                <span>►</span>
            </div>
        `;
    }
    levelsListEl.innerHTML = levelsHTML;

    navigateTo('step-levels', `Trang chủ > ${currentTopic}`);
}

// BƯỚC 3: Chọn Level
function selectLevel(levelNum) {
    currentLevel = levelNum;
    document.getElementById('activity-title').innerText = `HOẠT ĐỘNG: ${currentTopic} (LEVEL ${levelNum})`;
    navigateTo('step-activities', `Trang chủ > ${currentTopic} > Level ${levelNum}`);
}

// BƯỚC 4: Chọn Hoạt động (Flashcard / Game / Nghe)
function selectActivity(type) {
    if (type === 'game_menu') {
        navigateTo('step-games', `Trang chủ > ${currentTopic} > Level ${currentLevel} > Game Ôn Từ`);
    } else if (type === 'flashcard') {
        renderWorkspace(`HỌC FLASHCARD: ${currentTopic} (LEVEL ${currentLevel})`);
    } else if (type === 'listening') {
        renderWorkspace(`LUYỆN NGHE PHẢN XẠ: ${currentTopic} (LEVEL ${currentLevel})`);
    }
}

// BƯỚC 4B: Chọn Chế độ Trò chơi cụ thể
function openGameMode(gameType) {
    let title = '';
    if (gameType === 'listen_choose') title = 'GAME: NGHE VÀ CHỌN TỪ ĐÚNG';
    if (gameType === 'match_pair') title = 'GAME: NỐI HÌNH VÀ TỪ';
    if (gameType === 'fill_blank') title = 'GAME: NGHE VÀ ĐIỀN CÂU/TỪ';

    renderWorkspace(`${title} - ${currentTopic} (LEVEL ${currentLevel})`);
}

// Màn hình chi tiết
function renderWorkspace(titleText) {
    const ws = document.getElementById('workspace-content');
    ws.innerHTML = `
        <h2 style="font-weight:bold; margin-bottom: 15px; color: #1a365d;">${titleText}</h2>
        <p style="font-size: 1.1rem; color: #4a5568;">[Khung làm việc đã sẵn sàng để tích hợp nội dung bài học/trò chơi]</p>
    `;
    navigateTo('step-workspace', `Trang chủ > ${currentTopic} > Level ${currentLevel} > Thực hành`);
}