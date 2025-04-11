import { Somador, Subtrator, Multiplicador, Divisor } from "../models/operations";

let somador = new Somador();
let subtrator = new Subtrator();
let multiplicador = new Multiplicador();
let divisor = new Divisor();

console.log("Soma: " + somador.calcular(2,2))
console.log("Subtração: " + subtrator.calcular(10,2))
console.log("Multiplicação: " + multiplicador.calcular(50, 4))
console.log("Divisão: " + divisor.calcular(50, 4))

