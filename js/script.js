{

  const playGame = function(playerInput) {

    console.log(playGame);

    clearMessages();

  const getMoveName = function (argMoveId) {
      if(argMoveId == 1 ) {
        return 'kamień';
      }
      else if (argMoveId == 2 ) {
        return 'papier';
      }
      else if (argMoveId == 3) {
        return 'nożyce';
      }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1),
    argComputerMove = getMoveName(randomNumber),
    argPlayerMove = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + randomNumber);

    console.log(getMoveName)

    console.log('Gracz wpisał: ' + playerInput);


    const displayResult = function(argPlayerMove, argComputerMove) {
      console.log(displayResult)
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
      /*else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Wybierz cyfrę od 1 do 3');
      }*/
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
}
