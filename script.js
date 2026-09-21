// Danh sách thẻ mẫu câu & từ vựng
const cards = [
    {
        emoji: "🐶",
        en: "It is a dog.",
        vi: "Đó là một con chó.",
        word: "Dog"
    },
    {
        emoji: "🐱",
        en: "I see a cat.",
        vi: "Tôi thấy một con mèo.",
        word: "Cat"
    },
    {
        emoji: "🍎",
        en: "This is a red apple.",
        vi: "Đây là một quả táo màu đỏ.",
        word: "Apple"
    },
    {
        emoji: "🚗",
        en: "The car is fast.",
        vi: "Chiếc xe ô tô chạy nhanh.",
        word: "Car"
    }
];

let currentIndex = 0;

// Cập nhật nội dung thẻ
function updateCard() {
    const cardElement = document.getElementById('flashcard');
    cardElement.classList.remove('flipped'); // Reset về mặt trước khi đổi thẻ

    setTimeout(() => {
        const card = cards[currentIndex];
        document.getElementById('card-emoji').innerText = card.emoji;
        document.getElementById('card-en').innerText = card.en;
        document.getElementById('card-vi').innerText = card.vi;
        document.querySelector('.vocab-word strong').innerText = card.word;
        document.getElementById('card-counter').innerText = `${currentIndex + 1} / ${cards.length}`;
    }, 150);
}

// Lật thẻ
function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

// Chuyển thẻ tiếp theo
function nextCard() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCard();
    }
}

// Quay lại thẻ trước
function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
}

// Phát âm mẫu câu bằng AI giọng chuẩn của trình duyệt
function speakText(event) {
    event.stopPropagation(); // Tránh làm lật thẻ khi bấm nút nghe
    const text = cards[currentIndex].en;
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85; // Tốc độ đọc chậm vừa phải cho bé dễ nghe
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Trình duyệt của bạn không hỗ trợ tính năng phát âm.");
    }
}

// Khởi chạy thẻ đầu tiên
updateCard();