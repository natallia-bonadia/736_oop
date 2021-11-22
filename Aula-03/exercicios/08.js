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


// Código do Felipe:

class Carro {
  constructor(marca, tanque, combustivel='gasolina', modelo="hatch", cor="prata") {
    const combistiveisPermitidos = ['gasolina', 'álcool', 'flex']

    // if(!combistiveisPermitidos.includes(combustivel)) {
    //   throw 'combustível inválido'
    // }

    this.marca = marca
    this.modelo = modelo
    this.cor = cor
    this.capacidadeDoTanque = tanque
    this.litrosNoTanque = 0
    this.tipoDeCombustivel = 
      combistiveisPermitidos.includes(combustivel) ? combustivel : 'combustível inválido'
  }

  abastecer(litros, tipoDeCombustivel) {
    const precos = {
      'gasolina' : 5.62,
      'alcool' : 4.16,
    }

    if (litros > this.capacidadeDoTanque - this.litrosNoTanque) {
      // se utilizar o throw todas as linhas seguintes do meu código não poderam ser executadas em caso de erro
      // throw 'Tanque não comporta volume fornecido!'
      return 'Tanque não comporta volume fornecido!'
    }

    if (this.tipoDeCombustivel !== 'flex' &&  tipoDeCombustivel != this.tipoDeCombustivel) {
      return 'Tipo de combustivel não suportado pelo carro!'
    }

    this.litrosNoTanque += litros
    const valor = precos[tipoDeCombustivel] * litros
    const preco = Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL'}
    ).format(valor)

    return `O carro foi abastecido com ${litros} L,
     o preço foi de ${preco} e agora o tanque está com ${this.litrosNoTanque} L`
  }
}

const fusca = new Carro('VW', 40, 'gasolina')
console.log(fusca)
console.log(fusca.abastecer(50, 'gasolina'))

const honda = new Carro('Honda', 50, 'GNV')

console.log(fusca.abastecer(20, 'gasolina'))
console.log(fusca.abastecer(10, 'gasolina'))
