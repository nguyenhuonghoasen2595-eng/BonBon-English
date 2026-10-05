// DỮ LIỆU LEVEL 1 - CHUẨN 16 CHỦ ĐỀ (MỖI CHỦ ĐỀ ĐÚNG 5 TỪ + CÂU VÍ DỤ)
const level1Data = {
  animals: [
    { word: "Cat", meaning: "Con mèo", example: "It is a cute cat.", exampleVi: "Nó là một con mèo đáng yêu.", image: "https://cdn-icons-png.flaticon.com/512/616/616430.png" },
    { word: "Dog", meaning: "Con chó", example: "The dog can run fast.", exampleVi: "Con chó có thể chạy nhanh.", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
    { word: "Bird", meaning: "Con chim", example: "The bird is singing.", exampleVi: "Con chim đang hót.", image: "https://cdn-icons-png.flaticon.com/512/616/616432.png" },
    { word: "Fish", meaning: "Con cá", example: "Fish swim in water.", exampleVi: "Cá bơi dưới nước.", image: "https://cdn-icons-png.flaticon.com/512/616/616429.png" },
    { word: "Duck", meaning: "Con vịt", example: "The duck is yellow.", exampleVi: "Con vịt màu vàng.", image: "https://cdn-icons-png.flaticon.com/512/616/616422.png" }
  ],
  colors: [
    { word: "Red", meaning: "Màu đỏ", example: "I like red apples.", exampleVi: "Tớ thích những quả táo màu đỏ.", image: "https://cdn-icons-png.flaticon.com/512/2916/2916115.png" },
    { word: "Blue", meaning: "Màu xanh dương", example: "The sky is blue.", exampleVi: "Bầu trời màu xanh dương.", image: "https://cdn-icons-png.flaticon.com/512/2916/2916116.png" },
    { word: "Green", meaning: "Màu xanh lá", example: "The grass is green.", exampleVi: "Cỏ có màu xanh lá.", image: "https://cdn-icons-png.flaticon.com/512/2916/2916117.png" },
    { word: "Yellow", meaning: "Màu vàng", example: "The sun is yellow.", exampleVi: "Mặt trời màu vàng.", image: "https://cdn-icons-png.flaticon.com/512/2916/2916118.png" },
    { word: "Pink", meaning: "Màu hồng", example: "She has a pink hat.", exampleVi: "Cô ấy có chiếc mũ màu hồng.", image: "https://cdn-icons-png.flaticon.com/512/2916/2916119.png" }
  ],
  fruits: [
    { word: "Apple", meaning: "Quả táo", example: "An apple a day.", exampleVi: "Mỗi ngày một quả táo.", image: "https://cdn-icons-png.flaticon.com/512/415/415733.png" },
    { word: "Banana", meaning: "Quả chuối", example: "Monkeys love bananas.", exampleVi: "Khỉ rất thích chuối.", image: "https://cdn-icons-png.flaticon.com/512/3137/3137044.png" },
    { word: "Orange", meaning: "Quả cam", example: "Orange juice is sweet.", exampleVi: "Nước cam rất ngọt.", image: "https://cdn-icons-png.flaticon.com/512/1728/1728729.png" },
    { word: "Mango", meaning: "Quả xoài", example: "The mango is yellow.", exampleVi: "Quả xoài có màu vàng.", image: "https://cdn-icons-png.flaticon.com/512/2909/2909787.png" },
    { word: "Grape", meaning: "Quả nho", example: "I eat purple grapes.", exampleVi: "Tớ ăn những quả nho màu tím.", image: "https://cdn-icons-png.flaticon.com/512/3137/3137032.png" }
  ],
  vegetables: [
    { word: "Carrot", meaning: "Củ cà rốt", example: "Rabbits eat carrots.", exampleVi: "Thỏ ăn cà rốt.", image: "https://cdn-icons-png.flaticon.com/512/4055/4055271.png" },
    { word: "Potato", meaning: "Củ khoai tây", example: "I like French fries.", exampleVi: "Tớ thích khoai tây chiên.", image: "https://cdn-icons-png.flaticon.com/512/1135/1135058.png" },
    { word: "Tomato", meaning: "Quả cà chua", example: "The tomato is red.", exampleVi: "Quả cà chua màu đỏ.", image: "https://cdn-icons-png.flaticon.com/512/1202/1202125.png" },
    { word: "Corn", meaning: "Bắp ngô", example: "Corn is sweet.", exampleVi: "Bắp ngô rất ngọt.", image: "https://cdn-icons-png.flaticon.com/512/1135/1135067.png" },
    { word: "Onion", meaning: "Củ hành tây", example: "The onion is round.", exampleVi: "Củ hành tây hình tròn.", image: "https://cdn-icons-png.flaticon.com/512/2909/2909808.png" }
  ],
  weather: [
    { word: "Sunny", meaning: "Nắng", example: "It is sunny today.", exampleVi: "Hôm nay trời nắng.", image: "https://cdn-icons-png.flaticon.com/512/869/869869.png" },
    { word: "Rainy", meaning: "Mưa", example: "I have an umbrella.", exampleVi: "Tớ có một chiếc ô.", image: "https://cdn-icons-png.flaticon.com/512/1164/1164949.png" },
    { word: "Windy", meaning: "Nhiều gió", example: "Fly a kite on windy days.", exampleVi: "Thả diều vào những ngày nhiều gió.", image: "https://cdn-icons-png.flaticon.com/512/923/923788.png" },
    { word: "Cloudy", meaning: "Nhiều mây", example: "The sky is cloudy.", exampleVi: "Bầu trời nhiều mây.", image: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png" },
    { word: "Cold", meaning: "Lạnh", example: "Wear a coat when cold.", exampleVi: "Mặc áo khoác khi trời lạnh.", image: "https://cdn-icons-png.flaticon.com/512/2932/2932445.png" }
  ],
  vehicles: [
    { word: "Car", meaning: "Xe ô tô", example: "My dad drives a red car.", exampleVi: "Bố tớ lái chiếc xe màu đỏ.", image: "https://cdn-icons-png.flaticon.com/512/744/744465.png" },
    { word: "Bus", meaning: "Xe buýt", example: "I go to school by bus.", exampleVi: "Tớ đi học bằng xe buýt.", image: "https://cdn-icons-png.flaticon.com/512/1033/1033019.png" },
    { word: "Bike", meaning: "Xe đạp", example: "I can ride a bike.", exampleVi: "Tớ biết đi xe đạp.", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png" },
    { word: "Train", meaning: "Tàu hỏa", example: "The train is fast.", exampleVi: "Tàu hỏa chạy rất nhanh.", image: "https://cdn-icons-png.flaticon.com/512/1033/1033012.png" },
    { word: "Plane", meaning: "Máy bay", example: "The plane flies high.", exampleVi: "Máy bay bay rất cao.", image: "https://cdn-icons-png.flaticon.com/512/789/789393.png" }
  ],
  family: [
    { word: "Baby", meaning: "Em bé", example: "The baby is sleeping.", exampleVi: "Em bé đang ngủ.", image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png" },
    { word: "Mom", meaning: "Mẹ", example: "I love my mom.", exampleVi: "Tớ yêu mẹ của tớ.", image: "https://cdn-icons-png.flaticon.com/512/2922/2922522.png" },
    { word: "Dad", meaning: "Bố", example: "My dad is strong.", exampleVi: "Bố tớ rất khỏe mạnh.", image: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png" },
    { word: "Sister", meaning: "Chị/Em gái", example: "My sister is nice.", exampleVi: "Chị gái tớ rất tốt bụng.", image: "https://cdn-icons-png.flaticon.com/512/2922/2922536.png" },
    { word: "Brother", meaning: "Anh/Em trai", example: "My brother plays football.", exampleVi: "Anh trai tớ đá bóng.", image: "https://cdn-icons-png.flaticon.com/512/2922/2922527.png" }
  ],
  toys: [
    { word: "Ball", meaning: "Quả bóng", example: "Kick the ball!", exampleVi: "Sút quả bóng đi!", image: "https://cdn-icons-png.flaticon.com/512/33/33736.png" },
    { word: "Doll", meaning: "Búp bê", example: "She plays with a doll.", exampleVi: "Bé chơi với búp bê.", image: "https://cdn-icons-png.flaticon.com/512/3082/3082060.png" },
    { word: "Teddy", meaning: "Gấu bông", example: "My teddy is soft.", exampleVi: "Chú gấu bông của tớ rất mềm.", image: "https://cdn-icons-png.flaticon.com/512/3082/3082025.png" },
    { word: "Robot", meaning: "Rô-bốt", example: "The robot can walk.", exampleVi: "Rô-bốt có thể đi lại.", image: "https://cdn-icons-png.flaticon.com/512/2083/2083214.png" },
    { word: "Car toy", meaning: "Xe đồ chơi", example: "It is a small toy car.", exampleVi: "Đó là một chiếc xe đồ chơi nhỏ.", image: "https://cdn-icons-png.flaticon.com/512/3082/3082046.png" }
  ],
  school: [
    { word: "Pen", meaning: "Bút mực", example: "Write with a pen.", exampleVi: "Viết bằng bút mực.", image: "https://cdn-icons-png.flaticon.com/512/1250/1250615.png" },
    { word: "Pencil", meaning: "Bút chì", example: "I draw with a pencil.", exampleVi: "Tớ vẽ bằng bút chì.", image: "https://cdn-icons-png.flaticon.com/512/1250/1250616.png" },
    { word: "Book", meaning: "Quyển sách", example: "Read an English book.", exampleVi: "Đọc một cuốn sách tiếng Anh.", image: "https://cdn-icons-png.flaticon.com/512/3389/3389081.png" },
    { word: "Ruler", meaning: "Thước kẻ", example: "Use a ruler to draw lines.", exampleVi: "Dùng thước kẻ để vẽ đường thẳng.", image: "https://cdn-icons-png.flaticon.com/512/1828/1828935.png" },
    { word: "Bag", meaning: "Cặp sách", example: "My school bag is blue.", exampleVi: "Cặp sách của tớ màu xanh.", image: "https://cdn-icons-png.flaticon.com/512/2965/2965318.png" }
  ],
  food: [
    { word: "Rice", meaning: "Cơm", example: "I eat rice every day.", exampleVi: "Tớ ăn cơm mỗi ngày.", image: "https://cdn-icons-png.flaticon.com/512/3174/3174880.png" },
    { word: "Bread", meaning: "Bánh mì", example: "Fresh bread is yummy.", exampleVi: "Bánh mì tươi rất ngon.", image: "https://cdn-icons-png.flaticon.com/512/3014/3014521.png" },
    { word: "Egg", meaning: "Quả trứng", example: "A fried egg for breakfast.", exampleVi: "Một quả trứng ốp la cho bữa sáng.", image: "https://cdn-icons-png.flaticon.com/512/833/833300.png" },
    { word: "Pizza", meaning: "Bánh pizza", example: "We share a big pizza.", exampleVi: "Chúng tớ ăn chung bánh pizza lớn.", image: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png" },
    { word: "Cake", meaning: "Bánh ngọt", example: "Happy Birthday cake!", exampleVi: "Bánh sinh nhật vui vẻ!", image: "https://cdn-icons-png.flaticon.com/512/2682/2682411.png" }
  ],
  drinks: [
    { word: "Water", meaning: "Nước lọc", example: "Drink water every day.", exampleVi: "Uống nước lọc mỗi ngày.", image: "https://cdn-icons-png.flaticon.com/512/3100/3100566.png" },
    { word: "Milk", meaning: "Sữa", example: "Milk is good for teeth.", exampleVi: "Sữa rất tốt cho răng.", image: "https://cdn-icons-png.flaticon.com/512/3050/3050148.png" },
    { word: "Juice", meaning: "Nước ép", example: "Sweet apple juice.", exampleVi: "Nước ép táo ngọt ngào.", image: "https://cdn-icons-png.flaticon.com/512/2447/2447123.png" },
    { word: "Tea", meaning: "Nước trà", example: "Hot tea in a cup.", exampleVi: "Trà nóng trong tách.", image: "https://cdn-icons-png.flaticon.com/512/924/924510.png" },
    { word: "Soda", meaning: "Nước ngầm", example: "Cold soda with ice.", exampleVi: "Sô-đa lạnh có đá.", image: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png" }
  ],
  places: [
    { word: "Home", meaning: "Nhà", example: "Welcome to my home.", exampleVi: "Chào mừng đến nhà tớ.", image: "https://cdn-icons-png.flaticon.com/512/619/619153.png" },
    { word: "School", meaning: "Trường học", example: "I love my school.", exampleVi: "Tớ yêu trường học của tớ.", image: "https://cdn-icons-png.flaticon.com/512/167/167707.png" },
    { word: "Park", meaning: "Công viên", example: "Let's play in the park.", exampleVi: "Hãy cùng chơi ở công viên.", image: "https://cdn-icons-png.flaticon.com/512/432/432315.png" },
    { word: "Zoo", meaning: "Sở thú", example: "See animals at the zoo.", exampleVi: "Ngắm các con vật ở sở thú.", image: "https://cdn-icons-png.flaticon.com/512/2042/2042858.png" },
    { word: "Shop", meaning: "Cửa hàng", example: "Buy sweets at the shop.", exampleVi: "Mua kẹo ở cửa hàng.", image: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png" }
  ],
  routine: [
    { word: "Wake up", meaning: "Thức dậy", example: "I wake up early.", exampleVi: "Tớ thức dậy sớm.", image: "https://cdn-icons-png.flaticon.com/512/2833/2833315.png" },
    { word: "Wash face", meaning: "Rửa mặt", example: "Wash face in the morning.", exampleVi: "Rửa mặt vào buổi sáng.", image: "https://cdn-icons-png.flaticon.com/512/2554/2554032.png" },
    { word: "Eat", meaning: "Ăn uống", example: "Eat healthy food.", exampleVi: "Ăn thức ăn tót cho sức khỏe.", image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
    { word: "Play", meaning: "Vui chơi", example: "Play with friends.", exampleVi: "Chơi đùa cùng bạn bè.", image: "https://cdn-icons-png.flaticon.com/512/2907/2907150.png" },
    { word: "Sleep", meaning: "Đi ngủ", example: "Go to sleep at night.", exampleVi: "Đi ngủ vào buổi đêm.", image: "https://cdn-icons-png.flaticon.com/512/3094/3094833.png" }
  ],
  jobs: [
    { word: "Teacher", meaning: "Giáo viên", example: "My teacher is kind.", exampleVi: "Cô giáo tớ rất hiền.", image: "https://cdn-icons-png.flaticon.com/512/1995/1995535.png" },
    { word: "Doctor", meaning: "Bác sĩ", example: "The doctor helps people.", exampleVi: "Bác sĩ giúp đỡ mọi người.", image: "https://cdn-icons-png.flaticon.com/512/387/387561.png" },
    { word: "Driver", meaning: "Tài xế", example: "A bus driver.", exampleVi: "Bác tài xế xe buýt.", image: "https://cdn-icons-png.flaticon.com/512/2830/2830305.png" },
    { word: "Farmer", meaning: "Nông dân", example: "The farmer grows rice.", exampleVi: "Bác nông dân trồng lúa.", image: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png" },
    { word: "Chef", meaning: "Đầu bếp", example: "The chef cooks food.", exampleVi: "Đầu bếp nấu đồ ăn.", image: "https://cdn-icons-png.flaticon.com/512/1830/1830833.png" }
  ],
  emotions: [
    { word: "Happy", meaning: "Vui vẻ", example: "I am very happy.", exampleVi: "Tớ đang rất vui vẻ.", image: "https://cdn-icons-png.flaticon.com/512/742/742751.png" },
    { word: "Sad", meaning: "Buồn bã", example: "Don't be sad.", exampleVi: "Đừng buồn nhé.", image: "https://cdn-icons-png.flaticon.com/512/742/742752.png" },
    { word: "Angry", meaning: "Tức giận", example: "He looks angry.", exampleVi: "Trông anh ấy tức giận.", image: "https://cdn-icons-png.flaticon.com/512/742/742753.png" },
    { word: "Scared", meaning: "Sợ hãi", example: "Are you scared?", exampleVi: "Cậu có sợ không?", image: "https://cdn-icons-png.flaticon.com/512/742/742784.png" },
    { word: "Tired", meaning: "Mệt mỏi", example: "I feel tired.", exampleVi: "Tớ cảm thấy mệt mỏi.", image: "https://cdn-icons-png.flaticon.com/512/742/742774.png" }
  ],
  personality: [
    { word: "Kind", meaning: "Tốt bụng", example: "She is a kind girl.", exampleVi: "Cô ấy là một cô bé tốt bụng.", image: "https://cdn-icons-png.flaticon.com/512/1152/1152755.png" },
    { word: "Brave", meaning: "Dũng cảm", example: "Brave little soldier.", exampleVi: "Chú chú bộ đội nhỏ dũng cảm.", image: "https://cdn-icons-png.flaticon.com/512/2583/2583209.png" },
    { word: "Smart", meaning: "Thông minh", example: "You are very smart!", exampleVi: "Bé thật là thông minh!", image: "https://cdn-icons-png.flaticon.com/512/1653/1653630.png" },
    { word: "Polite", meaning: "Lịch sự", example: "Say thank you politely.", exampleVi: "Nói lời cảm ơn lịch sự.", image: "https://cdn-icons-png.flaticon.com/512/2922/2922566.png" },
    { word: "Funny", meaning: "Hài hước", example: "A funny monkey.", exampleVi: "Một chú khỉ hài hước.", image: "https://cdn-icons-png.flaticon.com/512/742/742923.png" }
  ]
};

// TRẠNG THÁI
let currentTopic = "animals";
let currentIndex = 0;
let totalStars = 0;
let currentPlaybackSpeed = 1.0;

// LẤY ELEMENT
const wordElement = document.getElementById("word");
const meaningElement = document.getElementById("meaning");
const exampleEnElement = document.getElementById("example-en");
const exampleViElement = document.getElementById("example-vi");
const imageElement = document.getElementById("card-image");
const progressText = document.getElementById("progress-text");
const progressBarFill = document.getElementById("progress-bar-fill");
const totalStarsElement = document.getElementById("total-stars");
const popupOverlay = document.getElementById("congrat-popup");

// ĐỔI CHỦ ĐỀ
function changeTopic(topicKey) {
  currentTopic = topicKey;
  currentIndex = 0;
  resetCardFlip();
  showCard(currentIndex);
}

// HIỂN THỊ THẺ
function showCard(index) {
  const list = level1Data[currentTopic];
  if (!list || index >= list.length) {
    completeTopic();
    return;
  }

  resetCardFlip();

  const item = list[index];
  wordElement.innerText = item.word;
  meaningElement.innerText = item.meaning;
  exampleEnElement.innerText = item.example;
  exampleViElement.innerText = item.exampleVi;
  imageElement.src = item.image;

  progressText.innerText = `${index + 1} / ${list.length}`;
  progressBarFill.style.width = `${((index + 1) / list.length) * 100}%`;

  playCurrentWordAudio();
}

// LẬT THẺ
function flipCard() {
  const cardInner = document.getElementById("card-inner");
  cardInner.classList.toggle("flipped");
}

function resetCardFlip() {
  const cardInner = document.getElementById("card-inner");
  if (cardInner) cardInner.classList.remove("flipped");
}

// CHỈNH TỐC ĐỘ ĐỌC (0.75x, 1.0x, 1.25x)
function setSpeed(speed) {
  currentPlaybackSpeed = speed;
  const btns = document.querySelectorAll('.speed-btn');
  btns.forEach(btn => {
    if (parseFloat(btn.innerText) === speed) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// PHÁT ÂM THANH BẰNG GIỌNG ĐỌC TRÌNH DUYỆT (WEB SPEECH API)
function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Dừng câu trước nếu đang đọc
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = currentPlaybackSpeed;
    window.speechSynthesis.speak(utterance);
  }
}

function playCurrentWordAudio() {
  const list = level1Data[currentTopic];
  if (list && list[currentIndex]) {
    speakText(list[currentIndex].word);
  }
}

function playCurrentExampleAudio() {
  const list = level1Data[currentTopic];
  if (list && list[currentIndex]) {
    speakText(list[currentIndex].example);
  }
}

// ĐIỀU HƯỚNG
function nextWord() {
  const list = level1Data[currentTopic];
  if (currentIndex < list.length - 1) {
    currentIndex++;
    showCard(currentIndex);
  } else {
    completeTopic();
  }
}

function prevWord() {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  }
}

// HOÀN THÀNH 5 TỪ & THƯỞNG 5 SAO
function completeTopic() {
  totalStars += 5;
  if (totalStarsElement) totalStarsElement.innerText = totalStars;

  const select = document.getElementById("topic-select");
  const topicName = select.options[select.selectedIndex].text;
  
  document.getElementById("popup-message").innerText = `Bé đã hoàn thành 5 từ chủ đề ${topicName}!`;
  popupOverlay.style.display = "flex";
  
  playCongratSound();
}

function closePopupAndNext() {
  popupOverlay.style.display = "none";
  
  // Tự động chuyển qua chủ đề tiếp theo
  const select = document.getElementById("topic-select");
  if (select.selectedIndex < select.options.length - 1) {
    select.selectedIndex += 1;
    changeTopic(select.value);
  } else {
    alert("🎉 Bé đã xuất sắc hoàn thành tất cả 16 chủ đề của Level 1!");
    select.selectedIndex = 0;
    changeTopic(select.value);
  }
}

// ÂM THANH HIỆU ỨNG THƯỞNG (Web Audio API)
function playCongratSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = freq;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + index * 0.1 + 0.3);
      osc.stop(ctx.currentTime + index * 0.1 + 0.3);
    });
  } catch(e) {}
}

// TẢI BAN ĐẦU
window.onload = function() {
  showCard(0);
};