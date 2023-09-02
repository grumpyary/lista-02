const prompt = require('prompt-sync')()

var askName = prompt( " Tell me your name, if you'd be so kind. " );
var askAge = Number(prompt( " Now I will need your age. " ));
var ageInDays = (365 * askAge);

console.log(` You are ${ageInDays} days old. Time is fleeting. Enjoy what's left of it. ` );
