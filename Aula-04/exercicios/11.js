// 11. Crie uma classe Restaurante com as propriedades cidade, delivery (verdadeiro ou falso), pedidosPendentes e tempo de entrega estimado (calculado com base nos pedidos pendentes, sendo 10 + 2 * pedidosPendentes em minutos). Os restaurantes devem ser capazes de realizar entregas desde que o cliente esteja localizado na mesma cidade e, para isso, precisamos de um método entregaPedido que devolve como resultado se é possível realizar a entrega para um determinado cliente ou não e, em caso positivo, o tempo estimado de entrega.

class Restaurante {
  constructor (cidade, delivery, pedidosPendentes) {
    this.cidade = cidade
    this.delivery = delivery
    this.pedidosPendentes = pedidosPendentes
  }

  entregaPedido(cidade) {
    const tempoDeEntrega = 10+2*this.pedidosPendentes
    const mensagem = this.cidade === cidade && this.delivery === true ? 'Seu pedido foi enviado. O tempo de entrega é de ' + tempoDeEntrega + ' minutos' : 'O pedido não pode ser realizado.'
    return mensagem
  }
}

const rest1 = new Restaurante ('Sao Paulo', true, 10)
console.log(rest1)
console.log(rest1.entregaPedido('Sao Paulo'))
console.log(rest1.entregaPedido('Diadema'))
const rest2 = new Restaurante ('Osasco', false, 12)
console.log(rest2)
console.log(rest2.entregaPedido('Osasco'))
console.log(rest2.entregaPedido('Osasco'))
const rest3 = new Restaurante ('Itatiba', true, 5)
console.log(rest3)
console.log(rest3.entregaPedido('Itatiba'))
console.log(rest3.entregaPedido('Itupeva'))


// Resolução do Felipe com Acessors

class Restaurante {
  #tempoDeEntregaEstimado

  constructor(cidade, delivery=false, pedidosPendentes=0) {
    this.cidade = cidade
    this.delivery = delivery
    this.pedidosPendentes = pedidosPendentes
    this.#tempoDeEntregaEstimado = this.#formulaDoTempoDeEntregaEstimado()
  }

  get tempoDeEntregaEstimado() {
    return this.#tempoDeEntregaEstimado
  }

  set tempoDeEntregaEstimado(_) {
    this.#tempoDeEntregaEstimado = this.#formulaDoTempoDeEntregaEstimado()
  }

  #formulaDoTempoDeEntregaEstimado = () => {
    return 10 + 2 * this.pedidosPendentes
  }

  entregaPedido(cidadeDoCliente) {
    if (cidadeDoCliente !== this.cidade) {
      return 'Entrega não pode ser realizada'
    }

    this.pedidosPendentes += 1
    this.tempoDeEntregaEstimado = this.pedidosPendentes

    return `Tempo de entrega estimado: ${this.tempoDeEntregaEstimado} minutos`
  }
}

const churrascaria = new Restaurante("SP", true, 2)

console.log(churrascaria.entregaPedido("SP"))
// console.log(churrascaria.#formulaDoTempoDeEntregaEstimado)

console.log(churrascaria)