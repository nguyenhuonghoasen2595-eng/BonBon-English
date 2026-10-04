let navigationHistory = ['step-home'];
let currentProgram = '';
let currentLevel = '';
let currentTopic = '';

const lessonData = {
    1: {
        'ĐỘNG VẬT': [
            { word: 'Dog', spelling: '/dɒɡ/', meaning: 'Con chó', image: '🐶', example: 'I have a small dog.', exampleMeaning: 'Tôi có một chú chó nhỏ.' },
            { word: 'Cat', spelling: '/kæt/', meaning: 'Con mèo', image: '🐱', example: 'The cat is sleeping.', exampleMeaning: 'Con mèo đang ngủ.' },
            { word: 'Duck', spelling: '/dʌk/', meaning: 'Con vịt', image: '🦆', example: 'The duck swims in the pond.', exampleMeaning: 'Con vịt bơi ở trong ao.' },
            { word: 'Pig', spelling: '/pɪɡ/', meaning: 'Con heo (lợn)', image: '🐷', example: 'The pig is pink.', exampleMeaning: 'Con heo có màu hồng.' },
            { word: 'Bird', spelling: '/bɜːd/', meaning: 'Con chim', image: '🐦', example: 'A bird is singing.', exampleMeaning: 'Một chú chim đang hót.' },
            { word: 'Cow', spelling: '/kaʊ/', meaning: 'Con bò sữa', image: '🐮', example: 'The cow gives sweet milk.', exampleMeaning: 'Con bò cho sữa ngọt.' },
            { word: 'Fish', spelling: '/fɪʃ/', meaning: 'Con cá', image: '🐟', example: 'The fish swims fast.', exampleMeaning: 'Con cá bơi rất nhanh.' },
            { word: 'Rabbit', spelling: '/ˈræb.ɪt/', meaning: 'Con thỏ', image: '🐰', example: 'The rabbit eats carrots.', exampleMeaning: 'Con thỏ ăn cà rốt.' },
            { word: 'Monkey', spelling: '/ˈmʌŋ.ki/', meaning: 'Con khỉ', image: '🐒', example: 'The monkey loves bananas.', exampleMeaning: 'Con khỉ rất thích chuối.' },
            { word: 'Elephant', spelling: '/ˈel.ɪ.fənt/', meaning: 'Con voi', image: '🐘', example: 'The elephant has a big nose.', exampleMeaning: 'Con voi có cái mũi lớn.' }
        ],
        'TRÁI CÂY': [
            { word: 'Apple', spelling: '/ˈæp.əl/', meaning: 'Quả táo', image: '🍎', example: 'An apple is red.', exampleMeaning: 'Quả táo có màu đỏ.' },
            { word: 'Banana', spelling: '/bəˈnɑː.nə/', meaning: 'Quả chuối', image: '🍌', example: 'Bananas are sweet.', exampleMeaning: 'Chuối rất ngọt.' }
        ]
    }
};

const vocabTopics = [
    { id: 'animals', name: 'ĐỘNG VẬT', icon: '🐶' },
    { id: 'fruits', name: 'TRÁI CÂY', icon: '🍎' },
    { id: 'vehicles', name: 'PHƯƠNG TIỆN GIAO THÔNG', icon: '🚗' },
    { id: 'vegetables', name: 'RAU CỦ QUẢ', icon: '🥦' }
];

const sentenceTopics = [
    { id: 'home', name: 'GIAO TIẾP Ô NHÀ', icon: '🏠' },
    { id: 'supermarket', name: 'KHI ĐI SIÊU THỊ', icon: '🛒' },
    { id: 'park', name: 'ĐI CÔNG VIÊN', icon: '🏞️' },
    { id: 'mom', name: 'CHƠI CÙNG MẸ', icon: '👩‍👧' }
];

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Trình duyệt không hỗ trợ phát âm.');
    }
}

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

function goBack() {
    if (navigationHistory.length > 1) {
        navigationHistory.pop();
        const previousStep = navigationHistory[navigationHistory.length - 1];
        navigateTo(previousStep);
    }
}

function goToHome() {
    navigateTo('step-home', 'Trang chủ');
}

function selectProgram(prog) {
    currentProgram = prog;
    const progName = prog === 'vocab' ? 'TỪ VỰNG CHỦ ĐỀ' : 'MẪU CÂU GIAO TIẾP';
    
    document.getElementById('level-title').innerText = `CHỌN CẤP ĐỘ (LEVEL): ${progName}`;
    
    const levelsListEl = document.getElementById('levels-list');
    let levelsHTML = '';
    for (let i = 1; i <= 5; i++) {
        levelsHTML += `
            <div class="level-item" onclick="selectLevel(${i})" style="padding: 15px 20px; background: #fff; border: 2px solid #e2e8f0; border-radius: 12px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 1.1rem; color: #2b6cb0;">
                <span>CẤP ĐỘ / LEVEL ${i}</span>
                <span>►</span>
            </div>
        `;
    }
    levelsListEl.innerHTML = levelsHTML;

    navigateTo('step-levels', `Trang chủ > ${progName}`);
}

function selectLevel(levelNum) {
    currentLevel = levelNum;
    const isVocab = currentProgram === 'vocab';
    const progName = isVocab ? 'TỪ VỰNG CHỦ ĐỀ' : 'MẪU CÂU GIAO TIẾP';
    const topicsData = isVocab ? vocabTopics : sentenceTopics;
    
    document.getElementById('topics-title').innerText = `CHỌN CHỦ ĐỀ (LEVEL ${levelNum})`;

    const topicsListEl = document.getElementById('topics-list');
    topicsListEl.innerHTML = topicsData.map(t => `
        <div class="card" onclick="selectTopic('${t.name}')">
            <div class="icon-box bg-blue">${t.icon}</div>
            <h2>${t.name}</h2>
        </div>
    `).join('');

    navigateTo('step-topics', `Trang chủ > ${progName} > Level ${levelNum}`);
}

function selectTopic(topicName) {
    currentTopic = topicName;
    document.getElementById('activity-title').innerText = `HOẠT ĐỘNG: ${currentTopic} (LEVEL ${currentLevel})`;
    navigateTo('step-activities', `Trang chủ > Level ${currentLevel} > ${currentTopic}`);
}

function selectActivity(type) {
    if (type === 'game_menu') {
        navigateTo('step-games', `Trang chủ > Level ${currentLevel} > ${currentTopic} > Game`);
    } else if (type === 'flashcard') {
        renderFlashcards();
    } else if (type === 'listening') {
        renderWorkspace(`LUYỆN NGHE PHẢN XẠ: ${currentTopic} (LEVEL ${currentLevel})`);
    }
}

function renderFlashcards() {
    const ws = document.getElementById('workspace-content');
    const words = (lessonData[currentLevel] && lessonData[currentLevel][currentTopic]) || [];

    if (words.length === 0) {
        ws.innerHTML = `
            <h2 style="font-weight:bold; margin-bottom: 15px; color: #1a365d;">HỌC FLASHCARD: ${currentTopic} (LEVEL ${currentLevel})</h2>
            <p style="font-size: 1.1rem; color: #718096;">Nội dung từ vựng cho chủ đề này đang được cập nhật...</p>
        `;
    } else {
        let cardsHTML = words.map(item => `
            <div style="background: #ffffff; border: 2px solid #cbd5e0; border-radius: 16px; padding: 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; flex-direction: column; align-items: center;">
                <div style="font-size: 4rem; margin-bottom: 10px;">${item.image}</div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <h3 style="font-size: 1.8rem; color: #1a365d; font-weight: bold; margin: 0;">${item.word}</h3>
                    <button onclick="speakText('${item.word}')" style="background: #ebf8ff; border: 1px solid #3182ce; color: #3182ce; border-radius: 50%; width: 32px; height: 32px; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center;" title="Nghe đọc từ">🔊</button>
                </div>
                <p style="font-size: 0.95rem; color: #718096; font-style: italic; margin-bottom: 4px;">${item.spelling}</p>
                <p style="font-size: 1.1rem; color: #2b6cb0; font-weight: bold; margin-bottom: 15px;">${item.meaning}</p>
                <div style="background: #f7fafc; border-top: 1px dashed #cbd5e0; padding-top: 10px; width: 100%; text-align: center;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 2px;">
                        <span style="font-size: 0.95rem; font-weight: bold; color: #2d3748;">"${item.example}"</span>
                        <button onclick="speakText('${item.example.replace(/'/g, "\\'")}')" style="background: none; border: none; cursor: pointer; font-size: 0.9rem;" title="Nghe đọc câu">🔊</button>
                    </div>
                    <p style="font-size: 0.85rem; color: #718096;">(${item.exampleMeaning})</p>
                </div>
            </div>
        `).join('');

        ws.innerHTML = `
            <h2 style="font-weight:bold; margin-bottom: 25px; color: #1a365d;">HỌC FLASHCARD: ${currentTopic} (LEVEL ${currentLevel})</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
                ${cardsHTML}
            </div>
        `;
    }

    navigateTo('step-workspace', `Trang chủ > Level ${currentLevel} > ${currentTopic} > Flashcard`);
}

function openGameMode(gameType) {
    let title = '';
    if (gameType === 'listen_choose') title = 'GAME: NGHE VÀ CHỌN TỪ ĐÚNG';
    if (gameType === 'match_pair') title = 'GAME: NỐI HÌNH VÀ TỪ';

    renderWorkspace(`${title} - ${currentTopic} (LEVEL ${currentLevel})`);
}

function renderWorkspace(titleText) {
    const ws = document.getElementById('workspace-content');
    ws.innerHTML = `
        <h2 style="font-weight:bold; margin-bottom: 15px; color: #1a365d;">${titleText}</h2>
        <p style="font-size: 1.1rem; color: #4a5568;">[Khung làm việc đã sẵn sàng để tích hợp nội dung bài học/trò chơi]</p>
    `;
    navigateTo('step-workspace', `Trang chủ > Level ${currentLevel} > ${currentTopic} > Thực hành`);
}