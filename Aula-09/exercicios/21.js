// 21. Crie as seguintes classes utilizando composição: 
// Estabelecimento:
// - id
// - produtos: [
//   {
//     nome: string
//     valor: number
//   }
// ]
// Restaurante:
// - id
// - produtos
// - pontosParaResgatarPremio: number
// + resgataPremio(cartela)
// Farmácia:
// - id
// - produtos
// + compraRemedio(prescricao)
// Bar:
// - id
// - produtos
// - pontosParaResgatarPremio: number
// + resgataPremio(cartela)
// + pedeBebida(idade)

// Para resgatar um prêmio, cliente deve ter cartela do estabelecimento com número de carimbos igual aos pontosParaResgatarPremio do estabelecimento. Após resgate, número de carimbos volta para 0.

// Cartela:
// - idDoEstabelecimento
// - carimbos

// Prescricao:
// - remedios: string[]

function MixinCartelaDePremio(Classe) {
  return class extends Classe {
    constructor(id, produtos, pontosParaResgatarPremio) {
      super(id, produtos, pontosParaResgatarPremio)
      this.pontosParaResgatarPremio = pontosParaResgatarPremio
    }

    resgataPremio(pontuacaoAtual) {
      if (this.pontosParaResgatarPremio <= pontuacaoAtual) {
        const novosPontos = pontuacaoAtual - this.pontosParaResgatarPremio
        return `Parabéns, você resgatou seu prêmio.\nSua nova pontuação é ${novosPontos}!`
      }
      return `Sua pontuação não é suficiente para resgatar o prêmio.`
    }
  }
}

class Estabelecimento {
  #produtos

  constructor(id, produtos) {
    this.id = id
    this.#produtos = this.#validaProdutos(produtos)
  }

  get produtos() {
    return this.#produtos
  }

  #validaProdutos(produto) {
    this.#produtos = produto
    // VALIDAR UM OBJETO DENTRO DE UM ARRAY
  }
}

class Restaurante extends MixinCartelaDePremio(Estabelecimento) {}
const mcdonalds = new Restaurante(1, 'big mac', 25)
console.log(mcdonalds.resgataPremio(20))

class Bar extends MixinCartelaDePremio(Estabelecimento) {}
const gooseisland = new Bar(2, 'caipirinha', 10)
console.log(gooseisland.resgataPremio(20))


// RESOLUÇÃO DO FELIPE

class Estabelecimento {
  constructor(id, produtos=[]) {
    this.id = id
    this.produtos = produtos
  }
}

class Farmacia extends MixinRemedios(Estabelecimento) {}

class Restaurante extends MixinPremios(Estabelecimento) {}

class Bar extends MixinBebida(MixinPremios(Estabelecimento)) {}

class Produto {
  constructor(nome) {
    this.nome = nome 
  }
}

class Remedio extends Produto {
  constructor(nome, deveSerPrescrito=false) {
    super(nome)
    this.deveSerPrescrito = deveSerPrescrito
  }
}

class Cartela {
  constructor(idDoEstabelecimento, carimbos) {
    this.idDoEstabelecimento = idDoEstabelecimento
    this.carimbos = carimbos
  }
}

function MixinRemedios(classe) {
  return class extends classe {
    compraRemedio(prescricao, remedios) {
      const remediosEmEstoque = remedios.filter(remedio => {
        return this.produtos.includes(remedio)
      })

      const remedioQuePossoComprar = remediosEmEstoque.filter(
        remedio => 
        !remedio.deveSerPrescrito ||
        prescricao.includes(remedio.nome)
      )

      return remedioQuePossoComprar.map(remedio => remedio.nome)
    }
  }
}

function MixinPremios(classe) {
  return class extends classe {
    constructor(id, produtos, pontosParaResgatarPremio) {
      super(id, produtos)
      this.pontosParaResgatarPremio = pontosParaResgatarPremio
    }
  
    resgataPremio(cartela) {
      if (cartela.idDoEstabelecimento !== this.id) {
        return 'cartela passada não é válida para este estabelecimento'
      }

      if (cartela.carimbos <= this.pontosParaResgatarPremio) {
        const pontosRestantes = this.pontosParaResgatarPremio - cartela.carimbos
        return `pontos insuficientes. Faltam 
        ${pontosRestantes} ponto(s) para resgatar prêmio`
      }
      
      cartela.carimbos -= this.pontosParaResgatarPremio
      return 'parabéns, você resgatou seu prêmio'
    }
  }
}

function MixinBebida(classe) {
  return class extends classe {
    pedeBebida(idade, bebida) {
      if (idade > 18) {
        return 'Menor de idade não pode pedir bebida no bar'
      }

      // nosso array original
      // [{nome: 'capirinha'}, {nome: 'cerveja'}]
      // arrary gerado pelo map
      // ['capirinha', 'cerveja']
      const arrayComNomesDasBebidas = this.produtos.map(produto => produto.nome)

      if (!arrayComNomesDasBebidas.includes(bebida)) {
        return 'Bar não tem a bebida escolhida em estoque'
      }

      return bebida
    }
  }
}

const estabelecimentoGenerico = new Estabelecimento('1')
console.log(estabelecimentoGenerico)

const remedios = [new Remedio('vitamina C'), new Remedio('cortisona', true)]

const farmacia = new Farmacia('2', remedios)
const pizzaria = new Restaurante('3', [], 5)
const cartelaDaPizzaria = new Cartela(pizzaria.id, 7)

const barDoZeca = new Bar('4', [new Produto('capirinha'), new Produto('cerveja')], 3)

console.log(barDoZeca.pedeBebida(20, 'cerveja'))

console.log(pizzaria.resgataPremio(cartelaDaPizzaria))
console.log(cartelaDaPizzaria.carimbos)

console.log(farmacia.compraRemedio(['cortisona'], remedios))