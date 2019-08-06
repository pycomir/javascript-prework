{

  const playGame = function(playerInput) {

      console.log(playGame);

      clearMessages();

    const getMoveName = function(a) {
        if (a == 1) {
          return 'kamień';
        }
        else if (a == 2) {
          return 'papier';
        }
        else if (a == 3) {
          return 'nożyce';
        }
      }
      console.log(getMoveName)

    const randomNumber = Math.floor(Math.random() * 3 + 1),
      computerMove = getMoveName(randomNumber),
      playerMove = getMoveName(playerInput);
      console.log('Wylosowana liczba to: ' + randomNumber);
      console.log('Gracz wpisał: ' + playerInput);
      console.log('ruchy to:' + computerMove, playerMove);

    const displayResult = function(a, b) {
      printMessage('Twój ruch to: ' + a);
      printMessage('Mój ruch to: ' + b);
      if (a == b) {
        printMessage('Mamy remis');
      }
      else if (b == 'kamień' && a == 'papier'){
        printMessage('Wygrałeś');
      }
      else if (b == 'papier' && a == 'nożyce') {
        printMessage('Wygrałeś');
      }
      else if (b == 'nożyce' && a == 'kamień') {
        printMessage('Wygrałeś');
      }
      else {
        printMessage('Przegrałeś')
      }
    }

    displayResult(playerMove, computerMove)
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
