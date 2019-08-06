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
      console.log(getMoveName)

    const randomNumber = Math.floor(Math.random() * 3 + 1),
      argComputerMove = getMoveName(randomNumber),
      argPlayerMove = getMoveName(playerInput);
      console.log('Wylosowana liczba to: ' + randomNumber);
      console.log('Gracz wpisał: ' + playerInput);
      console.log('ruchy to:', argComputerMove, argPlayerMove);

    const displayResult = function(argPlayerMove, argComputerMove) {
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
      else {
        printMessage('Przegrałeś')
      }
    }

    displayResult(argPlayerMove, argComputerMove)
    console.log(displayResult)

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
