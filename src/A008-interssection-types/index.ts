type TemNome = { nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};

type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa1: Pessoa = {
  nome: 'Carlos',
  idade: 20,
  sobrenome: "Lima"
}

console.log(pessoa1)