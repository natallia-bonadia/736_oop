// 05. Refaça o exercício da TV utilizando a sintaxe de classe (class).

class Tv {
  constructor(ligada, canal, volume) {
  this.ligada = ligada
  this.canal = canal
  this.volume = volume
  }

  liga = () => {
    this.ligada = true
    return 'Modo: ligada'
  }
  
  desliga = () => {
    this.ligada = false
    return 'Modo: desligada'
  }

  aumentaVolume = () => {
    this.volume+=1
    return 'Volume: ' + this.volume
  }
  diminuiVolume = () => {
    this.volume-=1
    return 'Volume: ' + this.volume
  }

  mudaDeCanal = (canal) => {
    const canais = [2, 4, 5, 7, 9, 11, 13]
    const encontrouCanal = canais.find(element => element === canal)
    if (encontrouCanal) {
      this.canal = encontrouCanal
      return 'Canal: ' + this.canal
    }
    else {
      return 'Esse canal não existe'
    }
  }
}

const tv1 = new Tv(true, 4, 26)
console.log(tv1)

console.log(tv1.liga())

console.log(tv1.aumentaVolume())
console.log(tv1.aumentaVolume())
console.log(tv1.aumentaVolume())
console.log(tv1.diminuiVolume())
console.log(tv1.diminuiVolume())

console.log(tv1.mudaDeCanal(0))
console.log(tv1.mudaDeCanal(13))
console.log(tv1.mudaDeCanal(8))

console.log(tv1.desliga())