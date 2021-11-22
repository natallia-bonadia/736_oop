// 20. Utilizando como base a classe:
// Dispositivo: 
// + calcula()
// Faça alguns mixins para as seguintes funcionalidades:
// + ilumina()
// + acessaInternet()
// + tiraFoto()
// + registraPassos()
// Para construir as seguintes classes:
// Relogio: + calcula(), + acessaInternet(), + registraPassos()
// Computador: + calcula(), + acessaInternet(), + tiraFoto()
// Celular: +calcula(), +ilumina(), +acessaInternet(), + tiraFoto(), + registraPassos()

function MixinRegistraPassos(classe) {
  return class extends classe {
    registraPassos() {
      return 'ativada função registra passos'
    }
  }
}

function MixinTiraFoto(classe) {
  return class extends classe {
    tiraFoto() {
      return 'ativa função tira foto'
    }
  }
}

function MixinIlumina(classe) {
  return class extends classe {
    ilumina() {
      return 'ativa função ilumina'
    }
  }
}

class Dispositivo {
  calcula() {
   return 'ativada a função calcula' 
  }

  acessaInternet() {
    return 'ativada a função acessa a internet'
  }
}

class Relogio extends MixinRegistraPassos(Dispositivo) {}
const appleWatch = new Relogio()
console.log(appleWatch.calcula())
console.log(appleWatch.acessaInternet())
console.log(appleWatch.registraPassos())

class Computador extends MixinTiraFoto(Dispositivo) {}
const iMac = new Computador()
console.log(iMac.calcula())
console.log(iMac.acessaInternet())
console.log(iMac.tiraFoto())

class Celular extends MixinIlumina(MixinRegistraPassos(Computador)) {}
const iphone = new Celular()
console.log(iphone.calcula())
console.log(iphone.acessaInternet())
console.log(iphone.registraPassos())
console.log(iphone.tiraFoto())
console.log(iphone.ilumina())