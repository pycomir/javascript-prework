let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

function getMoveName(argMoveId) {
  if(argMoveId == 1) {
    return 'kamień';
  }
  else if (argMoveId == 2) {
    return 'papier';
  }
  else if (argMoveId == 3) {
    return 'nożyce';
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

function displayResult (argPlayerMove, argComputerMove) {
  printMessage('Mój ruch to: ' + argComputerMove);
  printMessage('Twój ruch to: ' + argPlayerMove);
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Wygrałeś!');
  }
  else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Przegrałeś');
  }
  else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
    printMessage('Mamy remis');
  }
  else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Wygrałeś');
  }
  else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Przegrałeś');
  }
  else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
    printMessage('Mamy remis');
  }
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Wygrałeś');
  }
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Przegrałeś');
  }
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('Mamy remis');
  }
  else if (argPlayerMove == 'nieznany ruch') {
    printMessage('Wybierz cyfrę od 1 do 3');
  }
}

displayResult(argPlayerMove, argComputerMove)



/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == 2) {
  playerMove = 'papier';
}
else if (playerInput == 3) {
  playerMove = "nożyce"
}*/
