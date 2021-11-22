// 27. Agora permita que grupos com mais de 8 pessoas possam entrar na fila separando as pessoas excedentes em novos grupos que possam ser incluídos nas filas das mesas existentes. Como exemplo, um grupo de 14 pessoas será separado em uma mesa de 8 pessoas e outra de 6.


// RESOLUÇÃO 26 DO FELIPE

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
  pessoas: 16,
}

const grupo6 = {
  id: '6',
  pessoas: 3,
}

const fila2pessoas = new Queue()
const fila4pessoas = new Queue()
const fila6pessoas = new Queue()
const fila8pessoas = new Queue()

function gerenciaFila(grupo) {
  const mapeiaNumeroDePessoasParaFila = {
    '1' : fila2pessoas,
    '2' : fila2pessoas,
    '3' : fila4pessoas,
    '4' : fila4pessoas,
    '5' : fila6pessoas,
    '6' : fila6pessoas,
    '7' : fila8pessoas,
    '8' : fila8pessoas,
  }
  
  if (grupo.pessoas <= 8) {
    mapeiaNumeroDePessoasParaFila[`${grupo.pessoas}`].push(grupo)
  }

  else {
    let quantidadeDeMesaPara8 = Math.floor(grupo.pessoas/8)
    while (quantidadeDeMesaPara8 !== 0) {
      let novoGrupo = {
        id: `${grupo.id} (${quantidadeDeMesaPara8})`,
        pessoas : 8,
      }
      mapeiaNumeroDePessoasParaFila[`${novoGrupo.pessoas}`].push(novoGrupo)
      quantidadeDeMesaPara8 --
    }
    if (grupo.pessoas%8 > 0) {
      let mesaRestante = grupo.pessoas%8
      novoGrupo = {
        id: `${grupo.id} (${Math.floor(grupo.pessoas/8)+1})`,
        pessoas: mesaRestante
      }
      mapeiaNumeroDePessoasParaFila[`${novoGrupo.pessoas}`].push(novoGrupo)
    }
  }
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