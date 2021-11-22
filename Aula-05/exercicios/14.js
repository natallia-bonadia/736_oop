// 14. Faça uma classe Album (de figurinhas) que tem como propriedades a quantidade de figurinhas e um array de figurinhasColadas que recebe os números das figurinhas coladas. Garanta que o array de  figurinhasColadas apenas pode crescer. Tenha também um método colarFigurinha que permita colar figurinhas que existam no álbum e que não foram coladas ainda.

// totalDeFigurinhas: 8
// 1 - 8
// figurinhasColadas: [1, 6]
// colarFigurinha 9


class Album {
  constructor (totalDeFigurinhas, figurinhasColadas = []) {
    this.totalDeFigurinhas = totalDeFigurinhas
    this.figurinhasColadas = figurinhasColadas
  }

  colarFigurinha(numeroDaFigurinha) {
    if (this.figurinhasColadas.includes(numeroDaFigurinha) || numeroDaFigurinha < 1 || numeroDaFigurinha > this.totalDeFigurinhas) {return 'Essa figurinha já existe no album'}
    else this.figurinhasColadas.push(numeroDaFigurinha)

  }
}

const albumFriends = new Album (12, [4, 8])
albumFriends.colarFigurinha(3)
albumFriends.colarFigurinha(5)
albumFriends.colarFigurinha(1)
albumFriends.colarFigurinha(12)
albumFriends.colarFigurinha(8)
console.log(albumFriends)