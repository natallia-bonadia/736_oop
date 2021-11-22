// 08. Crie uma classe Carro que tenha as propriedades cor, marca, modelo (sedan ou hatch), capacidadeDoTanque (em litros), tipoDeCombustível (gasolina, álcool ou flex) e um método abastecer que respeite o tipo de combustível que o automóvel aceita e a capacidade máxima de litros. Além de abastecer o carro, também devemos ter o preço do abastecimento (gasolina = R$ 5,62/L e etanol = R$ 4,16/L).

class Carro {
  constructor (cor, marca, modelo, capacidadeDoTanque, tipoDeCombustivel) {
    this.cor = cor
    this.marca = marca
    this.modelo = modelo
    this.capacidadeDoTanque = capacidadeDoTanque
    this.tipoDeCombustivel = tipoDeCombustivel
  }

  abastecer = (combustivel, valor) => {
    if (combustivel === 'Gasolina') {
      console.log('Iniciando abastecimento de ' + combustivel)
      const litros = valor/5.62
      if (litros > this.capacidadeDoTanque) {
        console.log('A quantidade de combustível ultrapassa a capacidade do tanque.')
      }
      else {console.log('Abastecimento finalizado. \nTotal: ' + parseInt(litros) + ' litros.')}
    }
    else if (combustivel === 'Álcool') {
      console.log('Iniciando abastecimento de ' + combustivel)
      const litros = valor/4.16
      if (litros > this.capacidadeDoTanque) {
        console.log('A quantidade de combustível ultrapassa a capacidade do tanque.')
      }
      else {console.log('Abastecimento finalizado. \nTotal: ' + parseInt(litros) + ' litros.')}
    }
    else console.log('O tipo de combustível é incompatível')
  }
}

const carro1 = new Carro('preto', 'volkswagen', 'Tiguan', 50, 'flex')
console.log('\n-- Abastecimento 1 --')
carro1.abastecer('Álcool', 200)
console.log('\n-- Abastecimento 2 --')
carro1.abastecer('GNV', 200)
console.log('\n-- Abastecimento 3 --')
carro1.abastecer('Gasolina', 200)
