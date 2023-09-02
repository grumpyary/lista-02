const prompt = require('prompt-sync')()

// Entrada: largura e altura da parede

var height = Number(prompt( " Digite a altura em metros " )) ;
var width = Number(prompt( " Digite a largura em metros " )) ;
 
// Processamento: calcular a area (larg * alt) da parede a ser pintada.

var area = (height * width) ;

// Processamento: multiplicar a area da parede pelo consumo de tinta (300ml por m quadrado)

var paintArea = (area * 0.3) ; 
var paintCans = (paintArea / 2) ; 

console.log( ` Latas necessarias para a pintura: ${paintCans} ` );
