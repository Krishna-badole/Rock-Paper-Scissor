
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");
const resetBtn = document.querySelector("#reset");

let userscore = 0;
let compscore = 0;

const winMap = { rock: "scissor", paper: "rock", scissor: "paper" };

const genCompChoice = () => ["rock","paper","scissor"][Math.floor(Math.random()*3)];

const showMessage = (text, color) => {
  msg.innerText = text;
  msg.style.backgroundColor = color;
  msg.style.transform = "scale(1.1)";
  setTimeout(() => msg.style.transform = "scale(1)", 300);
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    showMessage("Draw! Play again", "#555");
    return;
  }

  const userWin = winMap[userChoice] === compChoice;
  if (userWin) {
    userscore++;
    userScorePara.innerText = userscore;
    showMessage(`You Win! 🎉 ${userChoice} beats ${compChoice}`, "#4caf50");
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    showMessage(`You Lost! 💔 ${compChoice} beats ${userChoice}`, "#f44336");
  }
};

choices.forEach(choice => {
  choice.addEventListener("click", () => playGame(choice.id));
});

resetBtn.addEventListener("click", () => {
  userscore = 0; compscore = 0;
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
  showMessage("Game reset! Play again.", "#2196f3");
});
