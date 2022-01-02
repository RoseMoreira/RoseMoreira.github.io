function marcaPonto () {
  colidiuGol = collideRectCircle(xGol, yGol, comprimentoGol, larguraGol, xBolinha, yBolinha, diametro)
  colisaoComGolDoOponente = collideRectCircle(xGolOponente, yGol, comprimentoGol, larguraGol, xBolinha, yBolinha, diametro)
  
  if(colidiuGol) {
    pontosOponente += 1
    xBolinha = 300
    yBolinha = 200
    for(let i = 0; i < yDasRaquetes.length ; i++) {
      yDasRaquetes[i] = 175
      yDasRaquetesOponente[i] = 175
    }
  }
  
  if(colisaoComGolDoOponente) {
    meusPontos += 1
    xBolinha = 300
    yBolinha = 200
    for(let i = 0; i < yDasRaquetes.length ; i++) {
      yDasRaquetes[i] = 175
      yDasRaquetesOponente[i] = 175
    }
  }
  
}
