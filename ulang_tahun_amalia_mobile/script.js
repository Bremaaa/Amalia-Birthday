
const quizBox = document.getElementById("quiz-box");
const messageBox = document.getElementById("birthday-message");
const correctSound = new Audio("cute-level-up-2-189851.mp3");
const wrongSound = new Audio("buzzerwav-14908.mp3");
const birthdaySound = new Audio("happy-birthday-220024.mp3");

const questions = [
  {
    question: "Zodiac Brema itu apa?",
    options: ["Libra", "Gemini", "Sagitarius", "Pisces", "Aries"],
    answer: "Aries",
  },
  {
    question: "Siapa dospem si brema?",
    options: ["Pak Alfifto", "Buk Indah", "Pak Darul", "Buk Mutia", "Buk Syafrida"],
    answer: "Pak Alfifto",
  },
  {
    question: "Brema memiliki sifat?",
    options: ["Introvert", "Ambivert", "Ektrovert"],
    answer: "Introvert",
  },
  {
    question: "Game yang paling disukai Brema adalah?",
    options: ["PUBG", "FF", "ML"],
    answer: "ML",
  },
  {
    question: "Apa hewan kesukaan Brema?",
    options: ["Anjing", "Kucing", "Dinosaurus", "Mermaid", "Unicorn"],
    answer: "Kucing",
  },
  {
    question: "Merk HP Brema itu apa?",
    options: ["OPPO", "VIVO", "SAMSUNG", "REALME", "INFINIX", "POCO", "IPHONE"],
    answer: "INFINIX",
  },
  {
    question: "Brema itu anak ke berapa?",
    options: ["1", "2", "3", "4", "5"],
    answer: "4",
  },
  {
    question: "Berapa lama Brema menjabat sebagai komting?",
    options: ["1 semester", "2 semester", "3 semester", "4 semester"],
    answer: "2 semester",
  },
  {
    question: "Apa merk facial wash Brema?",
    options: ["COSRX", "G2G", "ORIGINOTE", "WARDAH", "SKINTIFIC", "KAHF"],
    answer: "COSRX",
  },
  {
    question: "Apa merk kreta yang dipakai Brema saat pergi ke kampus?",
    options: ["Scoopy", "Vario", "Beat Karbu", "Nmax"],
    answer: "Scoopy",
  },
  {
    question: "Inisial nama mantan Brema?",
    options: ["J", "A", "M", "O", "I", "U", "D", "R", "S"],
    answer: "J",
  },
  {
    question: "Hero favorit Brema di Mobile Legends?",
    options: ["Selena", "Harith", "Guiniver", "Kagura"],
    answer: "Kagura",
  },
  {
    question: "Bias Brema di grup H2H?",
    options: ["Carmen", "Ian", "Jiwoo", "Juun"],
    answer: "Carmen",
  },
  {
    question: "Kapan Brema ulang tahun?",
    options: ["12 Maret 2003", "17 April 2004", "26 November 2003"],
    answer: "17 April 2004",
  },
  {
    question: "Apa warna kesukaan Brema?",
    options: ["Biru", "Merah", "Hitam", "Kuning", "Hijau"],
    answer: "Biru",
  },
  {
    question: "Hobi Brema selain game adalah?",
    options: ["Berenang", "Membaca buku", "Membaca jurnal", "Membaca berita", "Karoke"],
    answer: "Karoke",
  },
  {
    question: "Rasa makanan kesukaan Brema?",
    options: ["Pedas", "Manis", "Asam", "Pahit"],
    answer: "Manis",
  },
  {
    question: "Genre lagu seperti apa yang disukai Brema?",
    options: ["Rock", "Dangdut", "Pop"],
    answer: "Dangdut",
  },
  {
    question: "Genre film seperti apa yang disukai Brema?",
    options: ["Horror", "Komedi", "Fantasi", "Romance"],
    answer: "Horror",
  },
  {
    question: "Kemana Brema saat liburan kuliah dan nekat sendiri?",
    options: ["Paropo", "Berastagi", "Mall", "Pantai"],
    answer: "Paropo",
  },
  {
    question: "Dimana Brema tinggal?",
    options: ["Merkurius", "Venus", "Bumi", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus"],
    answer: "Bumi",
  },
];

let currentQuestion = 0;

function showQuestion(index) {
  const q = questions[index];
  quizBox.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options.map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join('')}
  `;
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    correctSound.play();
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(() => showQuestion(currentQuestion), 500);
    } else {
      showMessage();
    }
  } else {
    wrongSound.play();
    currentQuestion = 0;
    setTimeout(() => showQuestion(currentQuestion), 500);
  }
}

function showMessage() {
  quizBox.classList.add("hidden");
  messageBox.classList.remove("hidden");
  birthdaySound.play();
  messageBox.innerHTML = \`
    <h2>Selamat Ulang Tahun Amalia! 🎂🎉</h2>
    <pre>
Akhirnya kamu sampai di tahap ini. Jadi ikut senang ngeliatnya,
maaf ya cebol udah bikin kamu kesel karena pertanyaan yang sangat banyak
tentang diriku, ini ngetest sejauh mana kamu kenal Brema yang ganteng ini plus anak namutrasi wkwk.

Happy Birthday Amalia Rivana yang berumur 22 tahun 🎉
Semoga kamu makin dewasa, rezekinya lancar kayak Shopee COD,
urusan dimudahkan, dan wishlist-nya tercapai.
Cepetan dapet jodoh ya, biar gak tarik ulur terus 😆

Kamu udah gede cebol, walau badan masih imut aja hehe.
Tetap jadi pendengar setia walau kadang capek dengerin yang sama terus ya wkwk.
Jadi manusia super sabar yang tahan banting kayak charger HP, anjay.

Skripsinya semoga lancar biar gak jadi kisah horror semester akhir. Amin.
Dan kurangin halu sama Haechan ya, mending haluin aku yang mirip Jeffrie Nichol WKWKW 😂

Makasih udah jadi temen kuliah dari akhir semester satu.
Jangan pernah berubah ya cebol. Tetap jadi temannya aku, Christine, Riri, dan Gea ya.

Yang paling penting: JANGAN LUPA SAMA AKU 😎
Teman baik, rajin menabung, suka menolong, gak sombong, dan jelas limited edition 💖
    </pre>
  \`;
}

showQuestion(currentQuestion);
