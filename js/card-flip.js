// js/card-flip.js

export function initCardFlip(cardElement) {
  if (!cardElement) return;

  // Lắng nghe sự kiện click trên thẻ
  cardElement.addEventListener('click', (e) => {
    // Nếu bấm trúng nút nghe Audio hoặc bất kỳ nút bấm nào thì KHÔNG lật thẻ
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
      return;
    }
    cardElement.classList.toggle('flipped');
  });
}

// Trả thẻ về mặt trước khi chuyển từ mới
export function resetCardFlip(cardElement) {
  if (cardElement) {
    cardElement.classList.remove('flipped');
  }
}