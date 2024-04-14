let nome: string = 'carlos';
let idade: number = 20;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualque-coisa');
// let big: bigint = 10n;

// Array
let arrayDeNumeros: Array<number> = [1,2,3,4];
let arrayDeNumeros2: number[] = [1,2,3,4];

//Objects 

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Carlos Eduardo',
  idade: 20,
  adulto: true
}

//Funções

function soma(x: number,y: number) {
  return x + y
}