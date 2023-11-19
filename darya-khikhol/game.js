function rollDice(player) {
	var roll = Math.floor(Math.random() * 6) + 1;
	document.getElementById(player + '-roll').innerHTML = roll;
 
	var otherPlayer = (player === 'player1') ? 'player2' : 'player1';
	var otherRoll = parseInt(document.getElementById(otherPlayer + '-roll').innerHTML);
 
	if (otherRoll) {
	  var result = (roll > otherRoll) ? player + ' wins!' : otherPlayer + ' wins!';
	  document.getElementById('result').innerHTML = result;
	}
 }
 