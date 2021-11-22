// Crie uma pilha que seja capaz de receber um parâmetro tamanhoInicial no seu construtor e que monte uma pilha da seguinte forma:
// Exemplo:
// const minhaPilha = new PilhaCustomizada(4)
// cria pilha com os elementos [4, 3, 2, 1]
// note que neste caso 4 é o topo e 1 é o primeiro elemento empilhado

class Pilha {
  constructor() {
    this.tamanho = 0
    this.topo = null
  }

  //add
  empilha(elemento) {
    this.tamanho += 1
    this.topo = {
      valor: elemento,
      proximo: this.topo
    }
  }

  //remove
  desempilha() {
    if(!this.topo) {
      return
    }

    this.tamanho -= 1
    this.topo = this.topo.proximo
  }

  imprimePilha() {
    const valordosElementos = []

    let proximo = this.topo
    while (proximo) {
      valordosElementos.push(proximo.valor)
      proximo = proximo.proximo
    }

    return valordosElementos
  }
}

class PilhaDeNumeros extends Pilha {
  constructor(numero) {
    super()
    this.CriaArray(numero)
  }

  CriaArray(tamanho) {
    let elemento = 1
    while (tamanho >= elemento) {
      this.topo = {
        valor: elemento,
        proximo: this.topo
      }
      elemento ++
    }
    
  }
}

const minhaPilha = new PilhaDeNumeros(4)
console.log(minhaPilha.imprimePilha())

