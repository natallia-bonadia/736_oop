// Crie uma classe Camera que deve ter como propriedades resolucaoMaxima e fotosTiradas e um método tiraFoto que apenas aumenta o número de fotos tiradas. Crie uma classe Celular que  tenha como propriedades espacoDisponivel (em número de fotos), cameraFrontal e cameraTraseira. Tanto a cameraFrontal como a cameraTraseira devem ser classes que herdam de Camera e tem como propriedades adicionais a resolucaoAtual (não pode ser superior à resolucaoMaxima). Ambas apenas podem tirar fotos se houver espaço disponível no celular e a cameraFrontal deve ter resolucaoMaxima menor que a cameraTraseira.

class Camera {
  constructor (resMaxima, fotosTiradas) {
    this.resMaxima = resMaxima
    this.fotosTiradas = fotosTiradas >= 0 ? fotosTiradas : 0
  }

  tiraFoto() {
    return `${this.fotosTiradas += 1} fotos`
  }
}

class CameraFrontal extends Camera {
  constructor(resMaxima, fotosTiradas, resAtual) {
    super (resMaxima, fotosTiradas)
    this.resAtual = resAtual

  }
}

class CameraTraseira extends Camera {
  constructor(resMaxima, fotosTiradas, resAtual) {
    super (resMaxima, fotosTiradas)
    this.resAtual = resAtual

  }
}

class Celular extends Camera {
  constructor (resMaxima, fotosTiradas, espacoDisponivel) {
    super (resMaxima, fotosTiradas)
    this.espacoDisponivel = espacoDisponivel
  }
    
}


{const camera1 = new Camera (500, 0)
console.log(camera1)
console.log(camera1.tiraFoto())
console.log(camera1.tiraFoto())
console.log(camera1.tiraFoto())
console.log(camera1.tiraFoto())
console.log(camera1)


const celular1 = new Celular (800, 15)
console.log(celular1)
console.log(celular1.tiraFoto())
console.log(celular1.tiraFoto())
console.log(celular1.tiraFoto())
console.log(celular1.tiraFoto())
console.log(celular1)
}



// Resolução do Felipe

class Camera {
  #resolucaoMaxima

  constructor(resolucaoMax, fotosTiradas=0) {
    this.#resolucaoMaxima = resolucaoMax
    this.fotosTiradas = fotosTiradas
  }

  get resolucaoMaxima() {
    return this.#resolucaoMaxima
  }

  set resolucaoMaxima(resolucao) {
    this.#resolucaoMaxima = resolucao
  }

  tiraFotos(quantidadeDeFotos) {
    if (quantidadeDeFotos < 1) {
      return
    }

    this.fotosTiradas += quantidadeDeFotos
  }
}

class CameraDeCelular extends Camera {
  #resolucaoAtual
  #resolucaoMaxima
  #resolucoesOrdenadas = ['muito baixa', 'baixa', 'média', 'alta', 'muito alta']
  #celular
  #cameraTraseira

  constructor(celular, resolucaoMax, fotosTiradas, cameraTraseira) {
    super(resolucaoMax, fotosTiradas)
    this.#resolucaoMaxima = resolucaoMax
    this.#resolucaoAtual = resolucaoMax
    this.#celular = celular
    this.#cameraTraseira = cameraTraseira
  }

  get resolucaoMaxima() {
    return this.#resolucaoMaxima
  }

  set resolucaoMaxima(resolucao) {
    if (!this.#cameraTraseira) {
      this.#resolucaoMaxima = resolucao
      return
    }

    const indiceDaResolucaoPassada = this.#resolucoesOrdenadas.findIndex(
      procuraResolucao => {
      return procuraResolucao === resolucao
    })

    const indiceDaResolucaoDaCameraTraseira = this.#resolucoesOrdenadas.findIndex(
      procuraResolucao => {
      return procuraResolucao === this.#cameraTraseira.resolucaoMaxima
    })

    if (indiceDaResolucaoPassada > indiceDaResolucaoDaCameraTraseira) {
      return
    }

    this.#resolucaoMaxima = resolucao
  }

  get resolucaoAtual() {
    return this.#resolucaoAtual
  }

  set resolucaoAtual(resolucao) {
    const indiceDaResolucao = this.#resolucoesOrdenadas.findIndex(
      procuraResolucao => {
      return procuraResolucao === resolucao
    })

    const indiceDaResolucaoMaxima = this.#resolucoesOrdenadas.findIndex(
      procuraResolucao => {
      return procuraResolucao === this.resolucaoMaxima
    })

    if (indiceDaResolucao === -1) {
      return
    }

    // guard clause
    if (indiceDaResolucao > indiceDaResolucaoMaxima) {
      return
    }

    this.#resolucaoAtual = resolucao
  }

  tiraFotos(quantidadeDeFotos) {
    if (quantidadeDeFotos < 1) {
      return
    }

    if (this.espacoDisponivel <= 0) {
      return
    }
    
    this.fotosTiradas += quantidadeDeFotos
    this.#celular.espacoDisponivel -= quantidadeDeFotos
  }
}

class Celular {
  constructor(
    resolucaoMaxCameraFrontal,
    resolucaoMaxCameraTraseira,
    espacoDisponivel,
    fotosTiradas=0,
  ) {
    this.espacoDisponivel = espacoDisponivel >= 0 ? espacoDisponivel : 0
    this.cameraTraseira = new CameraDeCelular(
      this, resolucaoMaxCameraTraseira, fotosTiradas
      )
    this.cameraFrontal = new CameraDeCelular(
      this, resolucaoMaxCameraFrontal, fotosTiradas, this.cameraTraseira
    )
  }
}

const polaroid = new Camera('baixa')
console.log(polaroid)

polaroid.tiraFotos(3)
polaroid.tiraFotos(2)

console.log(polaroid)

const s9 = new Celular('média','alta', 200)

console.log(s9.cameraFrontal.resolucaoMaxima)
console.log(s9.cameraTraseira.resolucaoMaxima)
s9.cameraTraseira.resolucaoAtual = "muito alta"
console.log(s9.cameraTraseira.resolucaoAtual)

s9.cameraTraseira.tiraFotos(2)
s9.cameraFrontal.tiraFotos(6)
console.log(s9.espacoDisponivel)
console.log(s9.cameraTraseira.fotosTiradas)

s9.cameraFrontal.resolucaoMaxima = "muito alta"
console.log(s9.cameraFrontal.resolucaoMaxima)


console.log(s9.cameraFrontal)
console.log(polaroid.resolucaoMaxima)
