// Em um restaurante existem quatro tipos de mesas para 2, 4, 6 e 8 pessoas. Faça um gerenciador de filas simples que receba como parâmetro um objeto com as informações do grupo de pessoas e encaixe-o na fila correspondente. Por exemplo, um grupo de 3 pessoas seria colocado em um mesa de 4 pessoas e assim por diante. Se o grupo tiver mais de 8 pessoas, ele não poderá entrar na fila.

// grupo tem como parâmetro um id único e o número de pessoas
const grupo1 = {
  id: '1',
  pessoas: 4,
}

const grupo2 = {
  id: '2',
  pessoas: 7,
}

const grupo3 = {
  id: '3',
  pessoas: 1,
}

const grupo4 = {
  id: '4',
  pessoas: 6,
}

const grupo5 = {
  id: '5',
  pessoas: 9,
}

const grupo6 = {
  id: '5',
  pessoas: 3,
}

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

const fila2pessoas = new Queue()
const fila4pessoas = new Queue()
const fila6pessoas = new Queue()
const fila8pessoas = new Queue()

function gerenciaFila(grupo) {
  if (grupo.pessoas === 1 || grupo.pessoas === 2) {
    fila2pessoas.push(grupo)
  }
  else if (grupo.pessoas === 3 || grupo.pessoas === 4) {
    fila4pessoas.push(grupo)
  }
  else if (grupo.pessoas === 5 || grupo.pessoas === 6) {
    fila6pessoas.push(grupo)
  }
  else if (grupo.pessoas === 7 || grupo.pessoas === 8) {
    fila8pessoas.push(grupo)
  }
  else return 'erro'
}

gerenciaFila(grupo1)
gerenciaFila(grupo2)
gerenciaFila(grupo3)
gerenciaFila(grupo4)
gerenciaFila(grupo5)
gerenciaFila(grupo6)

console.log(fila2pessoas.printQueue())
console.log(fila4pessoas.printQueue())
console.log(fila6pessoas.printQueue())
console.log(fila8pessoas.printQueue())
console.log(gerenciaFila(grupo5))
