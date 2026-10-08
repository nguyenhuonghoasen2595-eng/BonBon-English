export class AppRouter {
  constructor(onStartLesson) {
    this.homeView = document.getElementById("home-view");
    this.lessonView = document.getElementById("lesson-view");
    this.btnBackHome = document.getElementById("btn-back-home");
    this.onStartLesson = onStartLesson;

    this.init();
  }

  init() {
    // Lắng nghe sự kiện click vào các nút Level
    document.querySelectorAll(".level-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const mode = e.currentTarget.dataset.mode; // 'vocab' hoặc 'sentences'
        const level = e.currentTarget.dataset.level; // '1', '2', '3', '4', '5'
        
        this.openLesson(mode, level);
      });
    });

    // Bấm nút quay lại Trang chủ
    this.btnBackHome?.addEventListener("click", () => {
      this.showHome();
    });
  }

  openLesson(mode, level) {
    this.homeView.classList.remove("active");
    this.lessonView.classList.add("active");

    // Cập nhật nhãn thông tin
    document.getElementById("current-mode-tag").innerText = (mode === 'vocab') ? 'Từ vựng' : 'Giao tiếp';
    document.getElementById("current-level-tag").innerText = `Level ${level}`;

    if (typeof this.onStartLesson === 'function') {
      this.onStartLesson(mode, level);
    }
  }

  showHome() {
    this.lessonView.classList.remove("active");
    this.homeView.classList.add("active");
  }
}