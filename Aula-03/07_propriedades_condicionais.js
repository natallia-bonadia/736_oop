// class Filme terá propriedades ano, que não pode anteceder 1895 e categorias que podem ser suspense, drama, ação, comédia e terror

class Filme {
  constructor (ano, categorias){
    
    const categoriasPermitidas = ['suspense', 'drama', 'ação', 'comédia', 'terror']
    const categoriasValidas = categorias.filter(categoria => {
      return categoriasPermitidas.includes(categoria)
    })

    this.ano = (ano < 1895 || ano > 2021) ? 'Ano Inválido' : ano
    this.categorias = categoriasValidas

  }

}

const filme1 = new Filme (1950, ['suspense'])
console.log(filme1)

const filme2 = new Filme (1872, ['romance'])
console.log(filme2)

const filme3 = new Filme (2041, ['drama'])
console.log(filme3)