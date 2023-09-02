const prompt = require('prompt-sync')()

// Input: qtde de cada nota

var oneBill = Number(prompt( " Digite a quantidade de notas de 1 real. " )) ;
var twoBill = Number(prompt( " Digite a quantidade de notas de 2 reais. " )) ;
var tenBill = Number(prompt( " Digite a quantidade de notas de 10 reais. " )) ;
var fiftyBill = Number(prompt( " Digite a quantidade de notas de 50 reais. " )) ;
var hundredBill = Number(prompt( " Digite a quantidade de notas de 100 reais. " )) ;

// Processamento: Calcular o valor total em especie multiplicando a qtde de notas pelo seu valor e depois somar tudo.

var amount = (oneBill * 1) + (twoBill * 2) + (tenBill * 10) + (fiftyBill * 50) + (hundredBill * 100) ;

// Output: valor total em especie na tela

console.log(` Valor total em dinheiro e de: R$ ${amount}`) ;
