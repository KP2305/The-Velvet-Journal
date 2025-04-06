function toggleNav() {
    document.getElementById("navLinks").classList.toggle("show");
  }
  
  function saveNote() {
    const content = document.querySelector("textarea").value;
    if (content.trim()) {
      localStorage.setItem("journalNote", content);
      document.getElementById("saveMsg").textContent = "✅ Note saved!";
    } else {
      alert("Please write something!");
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quizForm");
    if (form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        const answer = document.querySelector("input[name='q']:checked");
        const result = document.getElementById("quizResult");
        if (!answer) {
          result.textContent = "Please choose an answer!";
        } else {
          const vibes = ["The Planner", "The Glow Getter", "The Bookworm"];
          result.textContent = "You are: " + vibes[parseInt(answer.value) - 1];
        }
      });
    }
  });

  const quotes = [
    '"You are enough, just as you are." — Meghan Markle',
    '"Be messy and complicated and afraid — and show up anyway." — Glennon Doyle',
    '"To love oneself is the beginning of a lifelong romance." — Oscar Wilde'
  ];
  let qIndex = 0;
  setInterval(() => {
    document.querySelector(".quote").textContent = quotes[qIndex];
    qIndex = (qIndex + 1) % quotes.length;
  }, 6000);
  
  const tips = [
  "Take 10 deep breaths — reset your nervous system.",
  "Drink water before your coffee today!",
  "Say one kind thing to yourself right now.",
  "Take a 5-minute sunlight break"
];
document.getElementById("dailyTip").textContent = tips[Math.floor(Math.random() * tips.length)];


