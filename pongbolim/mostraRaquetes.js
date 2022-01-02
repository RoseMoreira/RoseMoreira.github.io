function mostraRaquetes(){
  strokeWeight(2)
  fill(color(240,0,0))
  for(let i = 0; i < xDasRaquetes.length; i++) {
    rect(xDasRaquetes[i], yDasRaquetes[i], raqueteComprimento, raqueteAltura)
  }
  fill(color(0,100,0))
  for (let i = 0; i < xDasRaquetesOponente.length; i++) {
     rect(xDasRaquetesOponente[i], yDasRaquetesOponente[i], raqueteComprimento, raqueteAltura)
  }
}