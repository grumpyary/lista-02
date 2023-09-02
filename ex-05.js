const prompt = require('prompt-sync')()

// Entrada: info sobre formula do raio

var circleRadius = prompt( " Did you know the radius of a circle is calculated using the mathematical formula: r = 3/π? " );

console.log( ` I am not going to show you that, though. ` );

// Processamento 1: para calcular a area, precisa calcular o raio primeiro, pedindo pelo diametro. (raio = d/2)
// Processamento 2: depois de obter o raio, calcular a area tomando pi como 3.14 (A = r * r * pi)

var circleInfo = Number(prompt( " Tell me a number. Any number. " ));
var circleRadius = (circleInfo / 2);
var circleArea = (circleRadius * circleRadius) * (3.14);

console.log( ` Very well. What I am going to show you is that the area of the circle ${circleInfo} is ${circleArea} `);
