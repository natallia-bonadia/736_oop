// 1. A partir do objeto:

const caneta = {
	marca: 'bic',
	tipo: 'esferográfica',
}

// Crie um novo objeto canetaVermelha com as mesmas propriedades e valores da caneta acima, mas com a propriedade cor com o valor vermelha.

const canetaVermelha = {
  ...caneta,
  cor : 'vermelha'
}

console.log(canetaVermelha)

