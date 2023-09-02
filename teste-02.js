const prompt = require('prompt-sync')()

var amountMoney = Number(prompt( " Digite a quantidade em dinheiro " )) ;

var hundredBill = 0
var fiftyBill = 0
var tenBill = 0
var fiveBill = 0
var oneBill = 0

var hundredBill = Math.floor( ( amountMoney % 100 ) / 100 ) ;
var fiftyBill = Math.floor( ( amountMoney % 50 ) / 50 ) ;
var tenBill = Math.floor( amountMoney / 10 ) ;
var fiveBill = Math.floor( amountMoney / 5 ) ;
var oneBill = Math.floor( amountMoney ) ;

console.log( ` A quantidade de notas necessarias sera de: ` ) ;
console.log( ` Notas de $100: ${hundredBill} ` ) ;
console.log( ` Notas de $50: ${fiftyBill} ` ) ;
console.log( ` Notas de $10: ${tenBill} ` ) ;
console.log( ` Notas de $5: ${fiveBill} ` ) ;
console.log( ` Notas de $1: ${oneBill} ` ) ;

