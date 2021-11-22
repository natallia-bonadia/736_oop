// 31. Faça uma classe Mes que receba como parâmetro um número de 0 a 11 e grave em uma propriedade nome, o nome correspondente do mês.
  
// const mes1 = new Mes(1)
// console.log(mes1.nome) // janeiro

// Faça uma classe Mes que receba como parâmetro um número de 0 a 11
// e grave em uma propriedade nome, o nome correspondente do mês.

class Mes {
  #meses = [
    {mes: 'Janeiro', dias : 31},
    {mes: 'Fevereiro', dias : 28},
    {mes: 'Março', dias : 31},
    {mes: 'Abril', dias : 30},
    {mes: 'Maio', dias : 31},
    {mes: 'Junho', dias : 30},
    {mes: 'Julho', dias : 31},
    {mes: 'Agosto', dias : 31},
    {mes: 'Setembro', dias : 30},
    {mes: 'Outubro', dias : 31},
    {mes: 'Novembro', dias : 30},
    {mes: 'Dezembro', dias : 31}
  ]

  constructor(numeroDoMes) {
    this.numeroDoMes = numeroDoMes
    this.#vinculaDadosDoMes()
  }

  #vinculaDadosDoMes() {
    const mes = this.#meses[this.numeroDoMes]

    if (!mes) 
      return
    
    this.nome = mes.mes
    this.numeroDeDias = mes.dias
  }
}

const mes3 = new Mes(3)
console.log(mes3)

const mes12 = new Mes(12)
console.log(mes12)

const mes7 = new Mes(7)
console.log(mes7)