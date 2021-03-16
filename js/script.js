/* un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// funcions


function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function isItIn(array, element){
  var i = 0;

  while ( i < array.length ){
    if ( array[i] == element ){
      return true
    }
    i ++
  }
  return false;
}

// variables / arrays

var cpuNumbers = [];
var guessed = [];
var userNumber = "";

// random numbers
for (var i = 0; i < 5; i++) {
  cpuNumbers.push(randomNumber(1, 100));
}
alert("I'll test your memory...dont't forget this numbers: " + cpuNumbers)


// timeout
setTimeout(function () {
  alert ("Let's see...Enter one by one all the numbers you've seen...");
  // check
  for (var i = 0; i < cpuNumbers.length; i++) {
    userNumber = prompt("enter the number");
    if (isItIn(cpuNumbers, userNumber)){
      guessed.push(userNumber);
    }
  }
  // message
  alert("You guessed " + guessed.length + " numebers: " + guessed)
}, 30000);
