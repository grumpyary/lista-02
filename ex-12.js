const prompt = require('prompt-sync')() ;

var timeHour = Number(prompt( " Digite o tempo em horas. " ) ) ;
var timeMin = Number(prompt( " Digite o tempo em minutos. " ) ) ;
var timeSec = Number(prompt( " Digite o tempo em segundos." ) ) ;

var timeHourSec = (timeHour * 60 * 60) ;
var timeMinSec = (timeMin * 60) ;
var timeSecTotal =  (timeHourSec + timeMinSec + timeSec) ;

console.log( ` O tempo total em segundos e de: ${timeSecTotal} ` ) ;
