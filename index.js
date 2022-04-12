let player1Score = 0
let player2Score = 0
let player1Turn = true

const message = document.getElementById('messageTitle')
const player1TotalScore = document.getElementById('player1ScoreBoard')
const player2TotalScore = document.getElementById('player2ScoreBoard')
const player1Dice = document.getElementById('player1dice')
const player2Dice = document.getElementById('player2dice')
const rollBtn = document.getElementById('roll-btn')
const resetBtn = document.getElementById('reset-btn')

rollBtn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * 6) + 1
    
    if(player1Turn){
        player1Dice.textContent = randomNumber
        player1Score += randomNumber
        player1TotalScore.textContent = "Score: " + player1Score
        player1Turn = false
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        message.textContent = "Player 2's Turn"
    } else {
        player2Dice.textContent = randomNumber
        player2Score += randomNumber
        player2TotalScore.textContent = "Score: " + player2Score
        player1Turn = true
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        message.textContent = "Player 1's Turn"
    }


    if(player1Score >= 21){
        message.textContent = "Player 1 Wins!"
        resetBtn.style.display = "block"
        rollBtn.style.display = "none"
    } else if (player2Score >= 21){
        message.textContent = "Player 2 Wins!"
        resetBtn.style.display = "block"
        rollBtn.style.display = "none"
    }
})

resetBtn.addEventListener("click", function(){
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player1Score = 0
    player2Score = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1TotalScore.textContent = "Score: 0"
    player2TotalScore.textContent = "Score: 0"
    message.textContent = "Player 1's Turn"
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
})
