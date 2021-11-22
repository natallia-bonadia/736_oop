// 10. Deseja-se montar uma classe Sorteio que tem o número de pessoas inscritas e um método sorteiaPremio que sorteia um número que corresponderá ao número de inscrição do participante e declara o vencedor.

class Sorteio {
  constructor (numeroDeInscritos) {
    this.numeroDeInscritos = numeroDeInscritos
  }

  sorteiaPremio() {
    const sorteado = Math.floor(Math.random() * this.numeroDeInscritos + 1)
    console.log(`O vencedor do sorteio foi o inscrito número ${sorteado}.`)
  }
}

const sorteio = new Sorteio(50)
sorteio.sorteiaPremio()