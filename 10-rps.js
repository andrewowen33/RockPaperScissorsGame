let score = JSON.parse(localStorage.getItem('score'))|| {
  wins: 0,
  losses:0,
  ties: 0
};

updateScoreElems();


console.log(JSON.parse(localStorage.getItem('score')));

function playGame(playerMove){
const computerMove= pickComputerMove();
let res = '';
if (playerMove=== 'Scissors'){
    if (computerMove=== 'Scissors'){
      res = 'Tie';
    }
    else if (computerMove === 'Rock'){
      res = 'You lose';
    }
    else if (computerMove === 'Paper'){
      res = 'You win';
    }
}
else if(playerMove=== 'Paper'){
    if (computerMove=== 'Paper'){
      res = 'Tie';
    }
    else if (computerMove === 'Rock'){
      res = 'You win';
    }
    else if (computerMove === 'Scissors'){
      res = 'You lose';
    }
}
else if (playerMove==='Rock'){
    if (computerMove=== 'Rock'){
      res = 'Tie';
    }
    else if (computerMove === 'Paper'){
      res = 'You lose';
    }
    else if (computerMove === 'Scissors'){
      res = 'You win';
    }
}

if (res==='You win') {
  score.wins += 1;
}
else if (res==='You lose'){
  score.losses += 1;
}
else if (res==='Tie'){
  score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElems();

document.querySelector('.js-result')
  .innerHTML=res;

document.querySelector('.js-moves')
  .innerHTML=`You:
<img src="images/${playerMove}-emoji.png" class="move-icon">
Computer:
<img src="images/${computerMove}-emoji.png" class="move-icon">`;
}

function updateScoreElems () {
document.querySelector('.js-score')
.innerHTML= `Wins: ${score.wins}, Losses: ${score.losses},Ties: ${score.ties}`;
}

function pickComputerMove(){
const randomNum = Math.random();
let computerMove = '';

if (randomNum >=0 && randomNum <1/3 ){
  computerMove= 'Rock';
}
else if(randomNum>=1/3&&randomNum<2/3){
  computerMove= 'Paper';
}
else if(randomNum>=2/3&&randomNum <1){
  computerMove= 'Scissors';
}
return computerMove;
}
