// Crie uma classe cachorro(dog) que tenha duas propriedades raça(breed), castrado(castrated) (true/false)

class Cachorro {
  constructor (raca = 'Não informada', castrado = false){
    this.raca = raca
    this.castrado = castrado  
  }
}

const cachorro1 = new Cachorro('poodle', true)
const cachorro2 = new Cachorro('srd', false)
const cachorro3 = new Cachorro('beagle')

console.log(cachorro1)
console.log(cachorro2)
console.log(cachorro3)
