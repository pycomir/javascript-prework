console.log(playGame);
function playGame(playerInput) {

  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log(getMoveName)

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);

  function getMoveName(argMoveId) {
    if(argMoveId == 1 ) {
      return 'kamień';
    }
    else if (argMoveId == 2 ) {
      return 'papier';
    }
    else if (argMoveId == 3) {
      return 'nożyce';
    }
    printMessage('To prosta gra. Nie kombinuj. ' + argMoveId + ' nie mieści się w przedziale 1-3 ;)');
    return 'nieznany ruch';
  }

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

  console.log(displayResult)

  function displayResult (argPlayerMove, argComputerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Mój ruch to: ' + argComputerMove);
    printMessage('Twój ruch to: ' + argPlayerMove);
    if (argComputerMove == argPlayerMove) {
      printMessage('Mamy remis');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Wygrałeś');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Wygrałeś');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Wygrałeś');
    }
    else if (argPlayerMove == 'nieznany ruch') {
      printMessage('Wybierz cyfrę od 1 do 3');
    }
    else {
      printMessage('Przegrałeś')
    }
  }

  displayResult(argPlayerMove, argComputerMove)
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame('1');
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame('2');
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame('3');
});
