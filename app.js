// --------------Player1 Information----------

var player1Name = prompt("Tell me Player 1 Name..??");
var player1NameChange = document.querySelector('.player-1');

// console.log(player1NameChange.textContent);

player1NameChange.textContent = player1Name.slice(0, 1).toUpperCase() + player1Name.slice(1).toLowerCase();
var player1 = document.querySelector('.player1');
var player1Score = document.querySelector('.player1Score');
var player1DiceScore = document.querySelector('.player1DiceScore');
var player1PreviousScore = document.querySelector('.player1PreviousScore');

// console.log(player1NameChange.textContent);

// --------------Player2 Information----------

var player2Name = prompt("Tell me Player 2 Name..??");
var player2NameChange = document.querySelector('.player-2');

// console.log(player2NameChange.textContent);

player2NameChange.textContent = player2Name.slice(0, 1).toUpperCase() + player2Name.slice(1).toLowerCase();
var player2 = document.querySelector('.player2');
var player2Score = document.querySelector('.player2Score');
var player2DiceScore = document.querySelector('.player2DiceScore');
var player2PreviousScore = document.querySelector('.player2PreviousScore');

// console.log(player2NameChange.textContent);

// --------------Others Information----------

var newGameBtn = document.querySelector('.newGameBtn');
var diceImg = document.querySelector('.diceImg');
var rollDiceBtn = document.querySelector('.rollDiceBtn');
var holdBtn = document.querySelector('.holdBtn');
var activePlayer = player1;

// console.log(player2NameChange);

// --------------Create Functions----------

function diceChanging() {
    var diceNum = Math.round(Math.random() * 5) + 1;
    diceImg.src = `./assets/${diceNum}.png`;
    if (diceNum == 1) {
        if (activePlayer == player1) {
            
            activePlayer = player2;

            player1PreviousScore.textContent = +player1DiceScore.textContent;
            
            player1DiceScore.textContent = 0;

            change2Bg();
            
        } else {
            
            activePlayer = player1;
            
            player2PreviousScore.textContent = +player2DiceScore.textContent;
            
            player2DiceScore.textContent = 0;

            change1Bg();
        }
        
        player1.classList.toggle('active');
        player2.classList.toggle('active');
        
    } else {
        if (activePlayer == player1) {
            
            player1DiceScore.textContent = +player1DiceScore.textContent + diceNum
            
        } else {
            
            player2DiceScore.textContent = +player2DiceScore.textContent + diceNum
            
        }
    }
};

function newGame() {
    location.reload();
}


function holdScore() {
    
    player1.classList.toggle('active');
    player2.classList.toggle('active');
    
    if (activePlayer == player1) {
        
        activePlayer = player2;
        
        player1Score.textContent = +player1Score.textContent + Number(player1DiceScore.textContent)
        
        player1PreviousScore.textContent = +player1DiceScore.textContent;
        
        player1DiceScore.textContent = 0

        change2Bg();
        
        if (Number(player1Score.textContent) >= 50) {
            alert(`${player1Name.toUpperCase()} Winner`);
            newGame();
        }
    } else {
        
        activePlayer = player1;
        
        player2Score.textContent = +player2Score.textContent + Number(player2DiceScore.textContent)
        
        player2PreviousScore.textContent = +player2DiceScore.textContent;
        
        player2DiceScore.textContent = 0

        change1Bg();

        if (Number(player2Score.textContent) >= 50) {
            alert(`${player2Name.toUpperCase()} Winner`);
            newGame();
        }
    }
}

function change2Bg() {
    activePlayer.style.borderTopLeftRadius = "0px"
    activePlayer.style.borderBottomLeftRadius = "0px"
    activePlayer.style.borderTopRightRadius = "10px"
    activePlayer.style.borderBottomRightRadius = "10px"
}

function change1Bg() {
    activePlayer.style.borderTopLeftRadius = "10px"
    activePlayer.style.borderBottomLeftRadius = "10px"
    activePlayer.style.borderTopRightRadius = "0px"
    activePlayer.style.borderBottomRightRadius = "0px"
}

// --------------addEvantlistener to click buttons----------

newGameBtn.addEventListener('click', newGame);
rollDiceBtn.addEventListener('click', diceChanging);
holdBtn.addEventListener('click', holdScore);