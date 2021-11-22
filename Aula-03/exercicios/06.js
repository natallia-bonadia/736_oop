// 06. Faça uma classe Boletim para uma faculdade com as propriedades nome (do aluno), ano (maior que 1964), semestre(de 1 a 14) e um array média com as médias de 6 máterias.

class Boletim {
  constructor(nome, ano, semestre, medias) {
    this.nome = nome
    
    const anoValido = (ano >=1964 && ano < 2021) ? ano : 'Ano inválido'
    this.ano = anoValido

    const semestreValido = (semestre >= 1 && semestre <=14) ? semestre : 'Semestre inválido'
    this.semestre = semestreValido

    this.medias = medias

  }
}

const boletim1 = new Boletim ('Luis', 1975, 8, [5.5, 8.0, 9.1, 6.6, 7.8, 9.4])

console.log(boletim1)