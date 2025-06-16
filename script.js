document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("dark");
};

function generatePlan() {
  const hours = parseInt(document.getElementById("studyHours").value);
  const subjects = document.getElementById("subjects").value.split(",").map(s => s.trim());
  const container = document.getElementById("plansContainer");
  container.innerHTML = "";

  if (isNaN(hours) || subjects.length === 0) {
    alert("Please enter valid input");
    return;
  }

  const icons = {
    math: "📘", physics: "⚛️", chemistry: "🧪", biology: "🧬", english: "📖",
    history: "🏛️", computer: "💻", hindi: "📚", default: "📚"
  };

  for (let i = 1; i <= 3; i++) {
    let plan = {};
    subjects.sort(() => 0.5 - Math.random()).forEach((subj) => {
      plan[subj] = Math.round((hours / subjects.length) * 100) / 100;
    });

    const card = document.createElement("div");
    card.className = "plan";
    card.innerHTML = `<strong>🌟 Plan ${i}</strong><br>`;
    for (let s in plan) {
      const icon = icons[s.toLowerCase()] || icons.default;
      card.innerHTML += `${icon} ${s}: ${plan[s]} hrs<br>`;
    }
    container.appendChild(card);
  }
}
