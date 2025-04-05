const questions = [
  {
    question: "Siapa bias Amalia di NCT?",
    options: ["Mark", "Haechan", "Jeno", "Taeyong"],
    answer: "Haechan"
  },
  {
    question: "Apa yang paling sering Amalia halu-in?",
    options: ["Dapet jodoh", "Menang undian", "Pacaran sama Haechan", "Dapet nilai A tanpa belajar"],
    answer: "Pacaran sama Haechan"
  },
  {
    question: "Amalia tahan banting seperti apa?",
    options: ["Kabel charger ditekuk-tekuk", "Sendal jepit", "Powerbank murahan", "Tukang parkir"],
    answer: "Kabel charger ditekuk-tekuk"
  }
];

let currentQuestion = 0;
let correct = 0;

const bgMusic = document.getElementById("bg-music");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const messageBox = document.getElementById("message");
const quizContainer = document.getElementById("quiz-container");

function startGame() {
  document.querySelector("button").style.display = "none";
  quizContainer.classList.remove("hidden");
  bgMusic.play();
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === q.answer) {
        correct++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        endQuiz();
      }
    };
    optionsEl.appendChild(btn);
  });
}

function endQuiz() {
  quizContainer.classList.add("hidden");
  messageBox.classList.remove("hidden");
}
