let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

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

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == 2) {
  playerMove = 'papier';
}
else if (playerInput == 3) {
  playerMove = "nożyce"
}*/

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Wygrałeś!');
}
else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage('Przegrałeś');
}
else if (computerMove == 'kamień' && playerMove == 'kamień') {
  printMessage('Mamy remis');
}
else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Wygrałeś');
}
else if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage('Przegrałeś');
}
else if (computerMove == 'papier' && playerMove == 'papier') {
  printMessage('Mamy remis');
}
else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Wygrałeś');
}
else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Przegrałeś');
}
else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
  printMessage('Mamy remis');
}
else if (playerMove == 'nieznany ruch') {
  printMessage('Wybierz cyfrę od 1 do 3');
}
