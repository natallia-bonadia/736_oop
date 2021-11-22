// Crie uma classe Livro com as propriedades autor e ano. Crie também as classes Ebook e AudioBook que herdam de Livro. Ebook deve ter numero de páginas e número de capítulos. Já a classe AudioBook deve ter a duração total do aúdio em minutos.

class Livro {
  constructor(autor, ano) {
    this.autor = autor
    this.ano = ano
  }
}

class Ebook extends Livro {
  constructor (autor, ano, paginas, capitulos) {
    super (autor, ano)
    this.paginas = paginas > 0 ? paginas : 1
    this.capitulos = capitulos > 0 ? capitulos : 1
  }
}

class AudioBook extends Livro {
  #duracaoDoAudio

  constructor (autor, ano, duracaoEmSegundos) {
    super (autor, ano)
    this.#duracaoDoAudio = this.#validaDuracaoDoAudio(duracaoEmSegundos)
  }

  get duracaoDoAudio () {
    return this.#duracaoDoAudio
  }

  set duracaoDoAudio (duracaoEmSegundos) {
    return this.#validaDuracaoDoAudio(duracaoEmSegundos)
  }

  #validaDuracaoDoAudio(duracaoEmSegundos) {
    const minutos = Math.floor(duracaoEmSegundos/60)
    const segundos = duracaoEmSegundos%60

    return `${minutos}m${segundos}s`
  }
}

const harryPotter = new Livro ('J. K. Rowling', 1997)
console.log(harryPotter)

const essencialismo = new Ebook ('Greg McKeown', 2014, 130, 10)
console.log(essencialismo)

const oMilagreDaManha = new AudioBook ('Hal Elrod', 2010, 1520)
console.log(oMilagreDaManha)
console.log(oMilagreDaManha.duracaoDoAudio)