const prompt = require('prompt-sync')() ;

var timeSec = Number(prompt( " Digite o tempo total em segundos. " ) ) ; 

var timeHour = Math.floor( timeSec / 3600 ) ;
var timeMin = Math.floor( ( ( timeSec % 3600 )  / 60 ) ) ; 
var timeTotal = timeSec % 60

console.log( ` O tempo em horas e de ${timeHour}, o tempo em minutos e de ${timeMin}, e ${timeTotal} segundos. `)
