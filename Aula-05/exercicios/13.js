// 13. Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro). Garanta utilizando acessors (get/set) que os passos apenas podem ser incrementados e um método resetOnMidnight() que reseta os passos para 0.

class SmartWatch {
  constructor(nomeDoUsuario) {
    this.nomeDoUsuario = nomeDoUsuario
    this._passos = 0
  }

  get passos() {return this._passos}

  set passos(incremento) {
    if (isNaN(incremento) || incremento < 0) {throw 'O incremento deve ser um número positivo'}
    this._passos = this._passos + incremento
  }

  resetOnMidnight() {
    this._passos = 0
  }
}

const user1 = new SmartWatch('Natallia')
user1.passos = 55
user1.passos = 20
user1.passos = 150
console.log(user1)
user1.resetOnMidnight()
console.log(user1)
user1.passos = -10
console.log(user1)