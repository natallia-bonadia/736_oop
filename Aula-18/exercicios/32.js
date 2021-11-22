// 32. Faça uma pilha de cartas com os seguintes atributos:
// valor: (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K)
// naipe: (paus (♣), ouros (♦), copas (♥) e espadas (♠))

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

function MixinVerificaCarta (classe) {
  return class extends classe {
    #numerosValidos = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    #naipesValidos = {paus : '♣', ouros : '♦', copas : '♥', espadas : '♠'}

    push(carta) {
      const numeroValido = this.#numerosValidos.includes(carta.numero)
      const naipeValido = this.#naipesValidos[carta.naipe]

      if (!numeroValido || !naipeValido) return

      super.push(carta)
    }
  }
}

class Baralho extends MixinVerificaCarta(Stack) {}
const baralho1 = new Baralho()

baralho1.push({numero: '2', naipe: 'copas'})
console.log(baralho1.printStack())
baralho1.push({numero: 'J', naipe: 'paus'})
console.log(baralho1.printStack())
baralho1.push({numero: '7', naipe: 'trevos'})
console.log(baralho1.printStack())