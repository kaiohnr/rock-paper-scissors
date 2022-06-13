const paperChoice = document.querySelector('#paper');
const rockChoice = document.querySelector('#rock');
const scissorsChoice = document.querySelector('#scissors');

const playerScore = document.querySelector('#score');
const resultText = document.querySelector('#result');

const gameContainer = document.querySelector('.game__container');
const choiceResultsContainer = document.querySelector('.choices-results');
const resultsContainer = document.querySelector('.results');

const userResult = document.querySelector('#user-result');
const houseResult = document.querySelector('#house-result');

const playAgainBtn = document.querySelector('#play-again');

const rulesPage = document.querySelector('#rules__page');
const showRulesBtn = document.querySelector('.show-rules-btn');
const closeRulesBtn = document.querySelector('#close-rules-btn');
const overlay = document.querySelector('#overlay');

const houseChoices = ['paper', 'scissors', 'rock'];
let houseChoice;

const getHouseChoice = function () {
  houseChoice = houseChoices[Math.floor(Math.random() * houseChoices.length)];
};

const changeHouseChoice = function () {
  if (houseChoice == 'rock') {
    houseResult.className = 'rock-choice';
  }

  if (houseChoice == 'scissors') {
    houseResult.className = 'scissors-choice';
  }

  if (houseChoice == 'paper') {
    houseResult.className = 'paper-choice';
  }
};

const userChosePaper = function () {
  resultsContainer.classList.add('show-results');

  getHouseChoice();
  userResult.className = 'paper-choice';

  if (houseChoice == 'paper') {
    changeHouseChoice();
    userDrew();
  }

  if (houseChoice == 'scissors') {
    changeHouseChoice();
    userLost();
  }

  if (houseChoice == 'rock') {
    changeHouseChoice();
    userWin();
  }
};

const userChoseRock = function () {
  resultsContainer.classList.add('show-results');

  getHouseChoice();
  userResult.className = 'rock-choice';

  if (houseChoice == 'paper') {
    changeHouseChoice();
    userLost();
  }

  if (houseChoice == 'scissors') {
    changeHouseChoice();
    userWin();
  }

  if (houseChoice == 'rock') {
    changeHouseChoice();
    userDrew();
  }
};

const userChoseScissors = function () {
  resultsContainer.classList.add('show-results');

  getHouseChoice();
  userResult.className = 'scissors-choice';

  if (houseChoice == 'paper') {
    changeHouseChoice();
    userWin();
  }

  if (houseChoice == 'scissors') {
    changeHouseChoice();
    userDrew();
  }

  if (houseChoice == 'rock') {
    changeHouseChoice();
    userLost();
  }
};

const userLost = function () {
  resultText.textContent = 'YOU LOST';
  playerScore.textContent > 0 ? (playerScore.textContent -= 1) : '';
  localStorage.setItem('score', playerScore.textContent);
  gameContainer.classList.add('close-game');
  choiceResultsContainer.classList.add('show-choices');
  choiceResultsContainer.classList.add('choices-space');
  userResult;
  saveScore();
};

const userWin = function () {
  resultText.textContent = 'YOU WON';
  playerScore.textContent = +playerScore.textContent + 1;
  localStorage.setItem('score', playerScore.textContent);
  gameContainer.classList.add('close-game');
  choiceResultsContainer.classList.add('show-choices');
  choiceResultsContainer.classList.add('choices-space');
  saveScore();
};

const userDrew = function () {
  resultText.textContent = 'YOU TIED';
  localStorage.setItem('score', playerScore.textContent);
  gameContainer.classList.add('close-game');
  choiceResultsContainer.classList.add('show-choices');
  choiceResultsContainer.classList.add('choices-space');
  saveScore();
};

const playAgain = function () {
  gameContainer.classList.remove('close-game');
  choiceResultsContainer.classList.remove('show-choices');
  choiceResultsContainer.classList.remove('choices-space');
  resultsContainer.classList.remove('show-results');
  userResult.className = '';
  houseResult.className = '';
};

const saveScore = function () {
  const savedScore = localStorage.getItem('score');
  if (savedScore) {
    playerScore.textContent = savedScore;
  }
};
saveScore();

function showRules() {
  rulesPage.classList.toggle('show-rules');
  showRulesBtn.classList.toggle('removeRulesBtn');
  overlay.classList.toggle('show-overlay');
}

overlay.addEventListener('click', function () {
  rulesPage.classList.remove('show-rules');
  showRulesBtn.classList.remove('removeRulesBtn');
  overlay.classList.remove('show-overlay');
});

showRulesBtn.addEventListener('click', showRules);
closeRulesBtn.addEventListener('click', showRules);
playAgainBtn.addEventListener('click', playAgain);
paperChoice.addEventListener('click', userChosePaper);
rockChoice.addEventListener('click', userChoseRock);
scissorsChoice.addEventListener('click', userChoseScissors);
