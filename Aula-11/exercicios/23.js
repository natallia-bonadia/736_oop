// 23. Com a mesma ideia do exercício anterior, agora adicione uma propriedade tamanhoDaCasquinha (pode ser pequena,  média ou grande) na classe CasquinhaDeSorvete. A casquinha pequena pode ter um máximo de 2 bolas, a média, 3 e a grande, 4. Faça também um método na classe CasquinhaDeSorvete para calcular os preço do sorvete:
// - Casquinha pequena de 1 bola: R$ 2,50 (+ R$ 2,50 por mais uma bola)
// - Casquinha média de 2 bolas: R$ 6,00 (+ R$ 2,00 por mais uma bola)
// - Casquinha grande de 2 bolas: R$ 7,50 (+ R$ 1,00 por bola adicional )




// RESOLUÇÃO DO FELIPE

class Stack {
  constructor() {
    this.length = 0
    this.top = null
  }

  push(elemento) {
    this.length += 1
    this.top = {
      valor: elemento,
      next: this.top
    }
  }

  pop() {
    if(!this.top) {
      return
    }
  
    this.length -= 1
    this.top = this.top.next
  }

  printStack() {
    const valordosElementos = []

    let next = this.top
    while (next) {
      valordosElementos.push(next.valor)
      next = next.next
    }

    return valordosElementos
  }
}

class CasquinhaDeSorvete extends Stack {
  #mapeamentoTamanhoQuantidade = {
    'pequena' : 2,
    'média' : 3,
    'grande' : 4,
  }

  constructor(tamanhoDaCasquinha) {
    super()
    this.tamanhoDaCasquinha = tamanhoDaCasquinha
  }

  push(elemento) {

    // if (this.tamanhoDaCasquinha === 'pequena' && this.length >= 2) {
    //   return
    // }

    // em vez disso podemos pegar o valor esperado para cada tamanho de casquinha
    // e armazenar em uma variável
    const maximoDeBolas = this.#mapeamentoTamanhoQuantidade[this.tamanhoDaCasquinha]

    if (!maximoDeBolas) {
      return
    }

    if (this.length >= maximoDeBolas) {
      return
    }

    if (this.top && this.top.valor === elemento) {
      return
    } 

    super.push(elemento)
  }
}

const casquinhaDeChocolatePequena = new CasquinhaDeSorvete('pequena')
console.log(casquinhaDeChocolatePequena.tamanhoDaCasquinha)
casquinhaDeChocolatePequena.push('chocolate amargo')
casquinhaDeChocolatePequena.push('chocolate amargo')
casquinhaDeChocolatePequena.push('banana')
casquinhaDeChocolatePequena.push('abacaxi')
casquinhaDeChocolatePequena.push('abacaxi')
casquinhaDeChocolatePequena.push('framboesa')

casquinhaDeChocolatePequena.pop()

casquinhaDeChocolatePequena.push('menta')
console.log(casquinhaDeChocolatePequena.printStack())