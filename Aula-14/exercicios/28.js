// 28. Faça um programa para organizar pessoas em duas filas, uma comum e outra prioritária. Leve em consideração as seguintes regras para entrada na fila prioritária:
// - Pessoas com 60 anos ou mais
// - Gestantes
// - Pessoas com deficiências
// Para fazer a conferência, passe para a fila um objeto da classe Pessoa que pode ter as propriedades: idade (number), portadorDeDeficiencia (boolean) e gestante (boolean)

// criar uma Pessoa, avaliar a pessoa e enfiar na fila

class Queue {
  constructor() {
    this.length = 0
    this.firstIn = null
  }

  #getLastElement(element) {
    if (!element.next){
      return element
    }
    return this.#getLastElement(element.next)
  }

  push(element) {
    this.length += 1

    if(!this.firstIn) {
      this.firstIn = {
        value: element,
        next: null
      }
      return
    }

    const lastIn = this.#getLastElement(this.firstIn)
    lastIn.next = {
      value: element,
      next: null
    }
  }

  pop() {
    if(!this.firstIn) {
      return
    }

    this.length -= 1
    this.firstIn = this.firstIn.next
  }

  printQueue() {
    const valordosElementos = []

    let next = this.firstIn
    while (next) {
      valordosElementos.push(next.value)
      next = next.next
    }

    return valordosElementos
  }
}

const filaNormal = new Queue()
const filaPrioritaria = new Queue()

class Pessoa {
  constructor (idade, portadorDeDeficiencia = false, gestante = false) {
    this.idade = idade
    this.portadorDeDeficiencia = portadorDeDeficiencia
    this.gestante = gestante
    this.gerenciaFila()
  }

  gerenciaFila () {
    if (this.idade >= 60 || this.portadorDeDeficiencia || this.gestante) {
      filaPrioritaria.push(this)      
    }
    else filaNormal.push(this)
  }
}

const adolescente = new Pessoa(15)
const pcd = new Pessoa(35, true, false)
const idoso = new Pessoa(62)
const gestante = new Pessoa(28, false, true)

console.log(adolescente)
console.log(pcd)
console.log(idoso)
console.log(gestante)

console.log(filaPrioritaria.printQueue())
console.log(filaNormal.printQueue())