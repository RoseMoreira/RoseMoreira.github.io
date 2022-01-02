function verificaColisaoRaquete() {
  for (let i = 0; i < xDasRaquetes.length; i++) {
    colidiu = collideRectCircle(xDasRaquetes[i], yDasRaquetes[i], raqueteComprimento, raqueteAltura, xBolinha, yBolinha, diametro)
    if(colidiu) {
      velocidadeXBolinha *= -1;
      raquetada.play()
    }
  }
  
  for (let i = 0; i < xDasRaquetesOponente.length; i++) {
    colidiu = collideRectCircle(xDasRaquetesOponente[i], yDasRaquetesOponente[i], raqueteComprimento, raqueteAltura, xBolinha, yBolinha, diametro)
    if(colidiu) {
      velocidadeXBolinha *= -1;
      raquetada.play()  
    }
  }
}
