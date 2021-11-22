// 19. Em um time de desenvolvimento temos os seguintes tipos de desenvolvedores com as mínimas competências esperadas:
//   Backend:
//      - métodos: lerCodigo, criaBancoDeDados, criaApiRest
//   Devops:
//      métodos: lerCodigo, criaBancoDeDados, gerenciaBancoDeDados, configuraDeploy
//   Frontend:
//      - métodos: lerCodigo, protipaUI, criaUI
//   DesignerUI:
//      - métodos: lerCodigo, protipaUI
//   Fullstack:
//      - métodos: lerCodigo, criaBancoDeDados, criaUI, criaApiRest
//   TI:
//      - métodos: lerCodigo

function MixinDevOps (Classe) {
  return class extends Classe {
    configuraDeploy() {
      return 'ativa função configura deploy'
    }

    gerenciaBancoDeDados() {
      return 'ativa função gerencia banco de dados'
    }
  }
}

function MixinCriaApiRest (Classe) {
  return class extends Classe {
    criaApiRest() {
      return 'ativa função cria api rest'
    }
  }
}

function MixinCriaBancoDeDados (Classe) {
  return class extends Classe {
    criaBancoDeDados() {
      return 'ativa função cria banco de dados'
    }
  }
}

function MixinCriaUI (Classe) {
  return class extends Classe {
    criaUI() {
      return 'ativa função cria UI'
    }
  }
}

function MixinPrototipaUI (Classe) {
  return class extends Classe {
    prototipaUI() {
      return 'ativa função prototipa UI'
    }
  }
}

class TI {
  lerCodigo() {
    return 'ativa função ler código'
  }
}

const cleber = new TI()
console.log(cleber.lerCodigo())

class DesignerUI extends MixinPrototipaUI(TI) {}
const amanda = new DesignerUI()
console.log(amanda.lerCodigo())
console.log(amanda.prototipaUI())

class FrontEnd extends MixinCriaUI(DesignerUI) {}
const roberta = new FrontEnd()
console.log(roberta.lerCodigo())
console.log(roberta.prototipaUI())
console.log(roberta.criaUI())

class BackEnd extends MixinCriaApiRest(MixinCriaBancoDeDados(TI)) {}
const leandro = new BackEnd()
console.log(leandro.lerCodigo())
console.log(leandro.criaBancoDeDados())
console.log(leandro.criaApiRest())

class FullStack extends MixinCriaUI(BackEnd) {}
const natallia = new FullStack()
console.log(natallia.lerCodigo())
console.log(natallia.criaBancoDeDados())
console.log(natallia.criaApiRest())
console.log(natallia.criaUI())

class DevOps extends MixinDevOps(MixinCriaBancoDeDados(TI)) {}
const gil = new DevOps()
console.log(gil.lerCodigo())
console.log(gil.criaBancoDeDados())
console.log(gil.gerenciaBancoDeDados())
console.log(gil.configuraDeploy())


// Exemplo: se não for uma função 'undefined'
// console.log(natallia.prototipaUI?.())