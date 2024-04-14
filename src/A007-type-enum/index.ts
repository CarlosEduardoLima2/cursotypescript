// enum é um tipo e um valor
enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO // 2
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.AMARELO);