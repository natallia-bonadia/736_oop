// 12. Faça uma classe Perfil que tem as seguintes informações:  nome, avatar (foto de perfil) e tema. Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de perfil deve ser uma url (iniciada com http ou https).

class Perfil {
  #tema
  #avatar

  constructor(nome) {
    this.nome = nome
    this.#avatar = undefined
    this.#tema = undefined
  }

  get avatar() {return this.#avatar}

  set avatar(avatarDoUsuario) {
    if (avatarDoUsuario.indexOf('http') !== 0 && avatarDoUsuario.indexOf('https') !== 0) {
      throw 'URL inválida'
    }
    this.#avatar = avatarDoUsuario
  }

  get tema() {return this.#tema}

  set tema(temaDoUsuario) {
    if (temaDoUsuario !== 'light' && temaDoUsuario !== 'dark') {
      throw 'Tema inválido'
    }
    this.#tema = temaDoUsuario
  }
}

const user1 = new Perfil('Natallia')
user1.avatar = 'https//www.minhafoto.com'
user1.tema = 'light'
console.log(user1)

const user2 = new Perfil('Gil')
user2.avatar = 'http//www.foto3x4.com'
user2.tema = 'dark'
console.log(user2)

// Erro de avatar
// const user3 = new Perfil('Felipe')
// user3.avatar = 'www.eu.com.br'
// user3.tema = 'dark'
// console.log(user3)

// Erro de tema
// const user4 = new Perfil('Luisa')
// user4.avatar = 'https://www.eu.com.br'
// user4.tema = 'drakula'
// console.log(user4)


