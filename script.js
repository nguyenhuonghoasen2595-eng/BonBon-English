// ==========================================
// 1. DỮ LIỆU BÀI HỌC (20 LEVEL & CÁC CHỦ ĐỀ)
// ==========================================
let navigationHistory = ['step-home'];
let currentProgram = '';
let currentLevel = 1;
let currentTopic = '';
let currentFlashcardIndex = 0;
let currentGameData = [];
let currentQuestionIndex = 0;
let score = 0;

// Các chủ đề phổ biến
const ALL_TOPICS = [
    { id: 'animals', name: 'ĐỘNG VẬT', icon: '🐶' },
    { id: 'fruits', name: 'TRÁI CÂY', icon: '🍎' },
    { id: 'vegetables', name: 'RAU CỦ QUẢ', icon: '🥦' },
    { id: 'vehicles', name: 'PHƯƠNG TIỆN', icon: '🚗' },
    { id: 'family', name: 'GIA ĐÌNH', icon: '👨‍👩‍👧‍👦' },
    { id: 'toys', name: 'ĐỒ CHƠI', icon: '🧸' },
    { id: 'school', name: 'DỤNG CỤ HỌC TẬP', icon: '✏️' },
    { id: 'food', name: 'MÓN ĂN', icon: '🍕' },
    { id: 'drinks', name: 'ĐỒ UỐNG', icon: '🧃' },
    { id: 'places', name: 'ĐỊA ĐIỂM (PLACES)', icon: '🏫' },
    { id: 'routine', name: 'DAILY ROUTINE', icon: '⏰' },
    { id: 'jobs', name: 'NGHỀ NGHIỆP', icon: '👨‍🚒' },
    { id: 'feelings', name: 'CẢM XÚC', icon: '😊' },
    { id: 'appearance', name: 'NGOẠI HÌNH', icon: '💇' },
    { id: 'personality', name: 'TÍNH CÁCH', icon: '🌟' }
];

// Khung dữ liệu cho 20 Level (độ khó câu ví dụ tăng dần theo Level)
const lessonData = {
    // LEVEL 1: Từ vựng đơn giản, câu rất ngắn (2-3 từ)
    1: {
        'ĐỘNG VẬT': [
            { word: 'Dog', spelling: '/dɒɡ/', meaning: 'Con chó', image: '🐶', example: 'It is a dog.', exampleMeaning: 'Đó là một chú chó.' },
            { word: 'Cat', spelling: '/kæt/', meaning: 'Con mèo', image: '🐱', example: 'I see a cat.', exampleMeaning: 'Tôi thấy một con mèo.' },
            { word: 'Duck', spelling: '/dʌk/', meaning: 'Con vịt', image: '🦆', example: 'It is a yellow duck.', exampleMeaning: 'Đó là một con vịt vàng.' },
            { word: 'Pig', spelling: '/pɪɡ/', meaning: 'Con heo', image: '🐷', example: 'The pig is big.', exampleMeaning: 'Con heo thì to.' },
            { word: 'Bird', spelling: '/bɜːd/', meaning: 'Con chim', image: '🐦', example: 'Look at the bird.', exampleMeaning: 'Nhìn con chim kìa.' },
            { word: 'Cow', spelling: '/kaʊ/', meaning: 'Con bò', image: '🐮', example: 'This is a cow.', exampleMeaning: 'Đây là một con bò.' },
            { word: 'Fish', spelling: '/fɪʃ/', meaning: 'Con cá', image: '🐟', example: 'I like fish.', exampleMeaning: 'Tôi thích cá.' },
            { word: 'Rabbit', spelling: '/ˈræb.ɪt/', meaning: 'Con thỏ', image: '🐰', example: 'A white rabbit.', exampleMeaning: 'Một con thỏ trắng.' },
            { word: 'Monkey', spelling: '/ˈmʌŋ.ki/', meaning: 'Con khỉ', image: '🐒', example: 'A funny monkey.', exampleMeaning: 'Một con khỉ vui nhộn.' },
            { word: 'Elephant', spelling: '/ˈel.ɪ.fənt/', meaning: 'Con voi', image: '🐘', example: 'It is an elephant.', exampleMeaning: 'Đó là một con voi.' }
        ],
        'TRÁI CÂY': [
            { word: 'Apple', spelling: '/ˈæp.əl/', meaning: 'Quả táo', image: '🍎', example: 'Red apple.', exampleMeaning: 'Quả táo đỏ.' },
            { word: 'Banana', spelling: '/bəˈnɑː.nə/', meaning: 'Quả chuối', image: '🍌', example: 'Yellow banana.', exampleMeaning: 'Quả chuối vàng.' }
        ]
    },
    // LEVEL 2: Đã nâng độ khó mẫu câu (dùng thì hiện tại đơn, tính từ)
    2: {
        'ĐỘNG VẬT': [
            { word: 'Dog', spelling: '/dɒɡ/', meaning: 'Con chó', image: '🐶', example: 'The friendly dog is barking.', exampleMeaning: 'Chú chó thân thiện đang sủa.' },
            { word: 'Cat', spelling: '/kæt/', meaning: 'Con mèo', image: '🐱', example: 'My cute cat loves sleeping on the sofa.', exampleMeaning: 'Mèo dễ thương của tôi thích ngủ trên ghế sofa.' }
        ]
    }
    // Các level từ 3 -> 20 sẽ tiếp tục bổ sung theo mẫu trên
};

// ==========================================
// 2. CÁC HÀM XỬ LÝ PHÁT ÂM & ĐIỀU HƯỚNG
// ==========================================
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
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

// ==========================================
// 3. CHỌN CHƯƠNG TRÌNH & 20 LEVEL
// ==========================================
function selectProgram(prog) {
    currentProgram = prog;
    const progName = prog === 'vocab' ? 'TỪ VỰNG CHỦ ĐỀ' : 'MẪU CÂU GIAO TIẾP';
    document.getElementById('level-title').innerText = `CHỌN LEVEL (1 - 20): ${progName}`;
    
    const levelsListEl = document.getElementById('levels-list');
    let levelsHTML = '';
    
    // Tự động sinh ra 20 Level
    for (let i = 1; i <= 20; i++) {
        levelsHTML += `
            <div class="level-item" onclick="selectLevel(${i})" style="padding: 14px 20px; background: #fff; border: 2px solid #e2e8f0; border-radius: 14px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 1.05rem; color: #2b6cb0; transition: all 0.2s;">
                <span>CẤP ĐỘ / LEVEL ${i}</span>
                <span style="color: #cbd5e0;">►</span>
            </div>
        `;
    }
    levelsListEl.innerHTML = levelsHTML;
    navigateTo('step-levels', `Trang chủ > ${progName}`);
}

function selectLevel(levelNum) {
    currentLevel = levelNum;
    const progName = currentProgram === 'vocab' ? 'TỪ VỰNG CHỦ ĐỀ' : 'MẪU CÂU GIAO TIẾP';
    document.getElementById('topics-title').innerText = `CHỌN CHỦ ĐỀ (LEVEL ${levelNum})`;

    const topicsListEl = document.getElementById('topics-list');
    topicsListEl.innerHTML = ALL_TOPICS.map(t => `
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
        startFlashcardSession();
    }
}

// ==========================================
// 4. HỌC FLASHCARD 2 MẶT (TỰ ĐỘNG ĐỌC KHI CHUYỂN)
// ==========================================
function getTopicWords() {
    const levelData = lessonData[currentLevel] || lessonData[1];
    return levelData[currentTopic] || levelData['ĐỘNG VẬT'] || [];
}

function startFlashcardSession() {
    currentFlashcardIndex = 0;
    renderFlashcardCard();
    navigateTo('step-workspace', `Trang chủ > Level ${currentLevel} > ${currentTopic} > Flashcard`);
}

function renderFlashcardCard() {
    const ws = document.getElementById('workspace-content');
    const words = getTopicWords();

    if (words.length === 0) {
        ws.innerHTML = `<h3>Nội dung bài học đang được cập nhật...</h3>`;
        return;
    }

    const item = words[currentFlashcardIndex];

    ws.innerHTML = `
        <div style="max-width: 500px; margin: 0 auto; text-align: center;">
            <h3 style="color: #4a5568; margin-bottom: 15px;">Thẻ ${currentFlashcardIndex + 1} / ${words.length}</h3>
            
            <!-- THẺ FLASHCARD 2 MẶT -->
            <div id="flashcard-box" onclick="flipCard()" style="background: white; border: 3px solid #3182ce; border-radius: 24px; min-height: 280px; padding: 25px; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer; box-shadow: 0 10px 20px rgba(0,0,0,0.08); position: relative; transition: transform 0.3s;">
                
                <!-- MẶT TRƯỚC (Hình ảnh) -->
                <div id="card-front" style="display: flex; flex-direction: column; align-items: center;">
                    <div style="font-size: 6rem; margin-bottom: 10px;">${item.image}</div>
                    <p style="color: #a0aec0; font-size: 0.9rem;">(Chạm vào thẻ để lật xem mặt sau 🔄)</p>
                </div>

                <!-- MẶT SAU (Từ vựng, phiên âm, câu ví dụ) -->
                <div id="card-back" class="hidden" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                    <h2 style="font-size: 2.2rem; color: #2b6cb0; font-weight: bold; margin-bottom: 2px;">${item.word}</h2>
                    <p style="color: #718096; font-style: italic; margin-bottom: 6px;">${item.spelling}</p>
                    <p style="font-size: 1.2rem; color: #e53e3e; font-weight: bold; margin-bottom: 15px;">${item.meaning}</p>
                    
                    <div style="background: #ebf8ff; padding: 12px 15px; border-radius: 12px; width: 100%; border: 1px dashed #3182ce;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <span style="font-weight: bold; color: #2d3748; font-size: 1.05rem;">"${item.example}"</span>
                            <button onclick="event.stopPropagation(); speakText('${item.example.replace(/'/g, "\\'")}')" style="background: #3182ce; color: white; border: none; border-radius: 50%; width: 28px; height: 28px; cursor: pointer;">🔊</button>
                        </div>
                        <p style="color: #4a5568; font-size: 0.9rem; margin-top: 4px;">(${item.exampleMeaning})</p>
                    </div>
                </div>

            </div>

            <!-- NÚT CHUYỂN THẺ -->
            <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                <button onclick="prevCard()" ${currentFlashcardIndex === 0 ? 'disabled' : ''} style="padding: 10px 20px; border-radius: 10px; border: none; background: #cbd5e0; font-weight: bold; cursor: pointer;">◄ Thẻ trước</button>
                <button onclick="nextCard()" ${currentFlashcardIndex === words.length - 1 ? 'disabled' : ''} style="padding: 10px 20px; border-radius: 10px; border: none; background: #3182ce; color: white; font-weight: bold; cursor: pointer;">Thẻ tiếp ►</button>
            </div>
        </div>
    `;

    // Tự động phát âm thanh khi vào/chuyển thẻ
    speakText(item.word);
}

function flipCard() {
    const front = document.getElementById('card-front');
    const back = document.getElementById('card-back');
    if (front.classList.contains('hidden')) {
        front.classList.remove('hidden');
        back.classList.add('hidden');
    } else {
        front.classList.add('hidden');
        back.classList.remove('hidden');
    }
}

function nextCard() {
    const words = getTopicWords();
    if (currentFlashcardIndex < words.length - 1) {
        currentFlashcardIndex++;
        renderFlashcardCard();
    }
}

function prevCard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        renderFlashcardCard();
    }
}

// ==========================================
// 5. GAME NGHE VÀ CHỌN ĐÁP ÁN ĐÚNG
// ==========================================
function openGameMode(type) {
    currentGameData = getTopicWords();
    if (currentGameData.length < 2) {
        alert('Chủ đề này cần ít nhất 2 từ vựng để chơi game!');
        return;
    }
    currentQuestionIndex = 0;
    score = 0;
    renderGameQuestion(type);
    navigateTo('step-workspace', `Trang chủ > Level ${currentLevel} > ${currentTopic} > Game`);
}

function renderGameQuestion(gameType) {
    const ws = document.getElementById('workspace-content');
    if (currentQuestionIndex >= currentGameData.length) {
        ws.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2 style="color: #2b6cb0; font-size: 2rem; margin-bottom: 10px;">🎉 HOÀN THÀNH BÀI THI!</h2>
                <p style="font-size: 1.3rem; margin-bottom: 20px;">Bạn đạt được: <b>${score} / ${currentGameData.length}</b> điểm</p>
                <button onclick="selectActivity('game_menu')" style="padding: 12px 25px; background: #3182ce; color: white; border: none; border-radius: 12px; font-weight: bold; cursor: pointer;">Chơi lại 🔄</button>
            </div>
        `;
        return;
    }

    const currentItem = currentGameData[currentQuestionIndex];
    
    // Tạo 4 đáp án ngẫu nhiên
    let options = [...currentGameData].sort(() => 0.5 - Math.random()).slice(0, 4);
    if (!options.includes(currentItem)) {
        options[0] = currentItem;
        options.sort(() => 0.5 - Math.random());
    }

    const isListenSentence = gameType === 'listen_sentence';
    const targetSound = isListenSentence ? currentItem.example : currentItem.word;

    ws.innerHTML = `
        <div style="max-width: 550px; margin: 0 auto; text-align: center;">
            <h3 style="color: #4a5568; margin-bottom: 10px;">Câu ${currentQuestionIndex + 1} / ${currentGameData.length}</h3>
            <p style="font-size: 1.1rem; font-weight: bold; color: #2b6cb0; margin-bottom: 15px;">
                ${isListenSentence ? '🎧 Nghe câu ví dụ và chọn hình ảnh đúng:' : '🎧 Nghe từ vựng và chọn đáp án đúng:'}
            </p>

            <!-- NÚT PHÁT ÂM BIG BUTTON -->
            <button onclick="speakText('${targetSound.replace(/'/g, "\\'")}')" style="background: #ebf8ff; border: 3px solid #3182ce; border-radius: 50%; width: 90px; height: 90px; font-size: 2.5rem; cursor: pointer; margin-bottom: 25px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">🔊</button>

            <!-- DANH SÁCH ĐÁP ÁN -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                ${options.map(opt => `
                    <button onclick="checkAnswer('${opt.word}', '${currentItem.word}', '${gameType}')" style="padding: 15px; background: white; border: 2px solid #e2e8f0; border-radius: 16px; font-weight: bold; font-size: 1.1rem; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                        <span style="font-size: 2.5rem;">${opt.image}</span>
                        <span>${opt.word}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    // Tự động phát âm thanh khi vào câu hỏi
    speakText(targetSound);
}

function checkAnswer(selected, correct, gameType) {
    if (selected === correct) {
        score++;
        alert('🎉 Chính xác!');
    } else {
        alert(`❌ Rất tiếc! Đáp án đúng là: ${correct}`);
    }
    currentQuestionIndex++;
    renderGameQuestion(gameType);
}