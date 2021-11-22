// 2. Faça um objeto pessoa com as propriedades nome completo, email e primeiroNome (com get).

const pessoa = {
  nomeCompleto: 'Natallia Bonadia',
  email: 'natallia.bonadia@gmail.com',
  get primeiroNome() {
    return this.nomeCompleto.split(' ')[0]
  }
}

console.log(pessoa.primeiroNome)

