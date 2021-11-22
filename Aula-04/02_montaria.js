// Vamos criar uma classe Animal que tenha como propriedades o peso, especie, montaria(verdadeiro ou falso) e método pessoaMonta (para a pessoa montar, o animal deve ser do tipo montaria e o animal deve ser no mínimo 50% mais pesado que a pessoa)

// Animais que são considerados montaria: Cavalo, Burro, Pônei, Câmelo, Dromedário

class Animal {
  constructor (peso, especie) {
    this.peso = peso

    const especiesMontaria = ['cavalo', 'burro', 'ponei', 'camelo', 'dromedario']
    const especieVerificada = especiesMontaria.includes(especie)
    this.especie = especieVerificada ? especie : 'Essa espécie não é de montaria'

  }

  pessoaMonta(pesoDaPessoa) {
    if (this.peso >= pesoDaPessoa*2) {
      console.log('Montaria liberada')
    }
    else {console.log('O animal precisa ser maior')}
    
  }
}

const animal1 = new Animal (200, 'cavalo')
console.log(animal1)
animal1.pessoaMonta(50)

const animal2 = new Animal (10, 'galinha')
console.log(animal2)
// Vamos criar uma classe Animal que tenha como propriedades o peso, especie,
// montaria(verdadeiro ou falso) e
// método pessoaMonta (para a pessoa montar, o animal deve ser do 
// tipo montaria e o animal deve ser no mínimo
// 50% mais pesado que a pessoa)

// Animais que são considerados montaria: Cavalo, Burro, Pônei, Camelo, Dromedário

class Animal {
  constructor(especie, peso) {
    const montarias = ["cavalo", "burro", "pônei", "camelo", "dromedário"]

    this.especie = especie.toLowerCase()
    this.peso = peso
    this.ehMontaria = montarias.includes(especie.toLowerCase())
  }

  pessoaMonta(pesoDaPessoa) {
    console.log(
      this.peso > pesoDaPessoa * 1.5
      ? 'pessoa consegue montar neste animal'
      : 'pessoa não consegue montar no animal' 
    )
  }
}

const cavalo = new Animal('CAVALO', 140)
cavalo.pessoaMonta(70)

console.log(cavalo)