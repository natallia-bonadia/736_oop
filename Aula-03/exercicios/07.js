// 07. Crie uma classe CNH que tenha como propriedades país e idade que, por padrão, deve ser maior ou igual a 18, 16 se for igual a US ou CA e 21 se corresponder a CH ou RU. Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).

class CNH {
  constructor (pais, idade, categoria) {
    
    this.pais = pais

    if (this.pais === 'US' || this.pais === 'CA') {
      const idadeUsCa = (idade >= 16) ? idade : 'Sem permissão para dirigir.'
      this.idade = idadeUsCa
    }

    else if (this.pais === 'CH' || this.pais === 'RU') {
      const idadeChRu = (idade >= 21) ? idade : 'Sem permissão para dirigir.'
      this.idade = idadeChRu
    }

    else {
      const idadeOutros = (idade >= 18) ? idade : 'Sem permissão para dirigir.'
      this.idade = idadeOutros
    }

    const categoriasPermitidas = ['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE']
    if (pais === 'BR') {
      const categoriaValidada = categoriasPermitidas.includes(categoria)
      this.categoria = categoriaValidada ? categoria : 'Categoria inválida'
    }

  }
}

const cnh1 = new CNH ('FR', 20)
console.log(cnh1)

const cnh2 = new CNH ('US', 18)
console.log(cnh2)

const cnh3 = new CNH ('CH', 18)
console.log(cnh3)

const cnh4 = new CNH ('BR', 45, 'AB')
console.log(cnh4)

const cnh5 = new CNH ('BR', 45, 'moto')
console.log(cnh5)