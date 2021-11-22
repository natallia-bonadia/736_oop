// 3. Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.

const televisao = {
  canal: 2,
  volume: 50,
  ligada: false,

  get liga() {
    return this.ligada = true
  },
  get desliga() {
    return this.ligada = false
  },

  get aumentaVolume() {
    return this.volume+=1
  },
  get diminuiVolume() {
    return this.volume-=1
  },

  get mudaDeCanal() {
    return this.canal
  },

  set mudaDeCanal(canal) {
    const canais = [2, 4, 5, 7, 9, 11, 13]
    const encontrouCanal = canais.find(element => element === canal)
    if (encontrouCanal) {
      this.canal = encontrouCanal
      return console.log('Canal: ' + this.canal)
    }
    console.log('Esse canal não existe')
  }
}

console.log('Modo: ' + televisao.liga)

console.log('Volume: ' + televisao.aumentaVolume)
console.log('Volume: ' + televisao.aumentaVolume)
console.log('Volume: ' + televisao.aumentaVolume)
console.log('Volume: ' + televisao.diminuiVolume)
console.log('Volume: ' + televisao.diminuiVolume)
console.log('Volume: ' + televisao.diminuiVolume)

televisao.mudaDeCanal = 7
televisao.mudaDeCanal = 10
televisao.mudaDeCanal = 13

console.log('Modo: ' + televisao.desliga)