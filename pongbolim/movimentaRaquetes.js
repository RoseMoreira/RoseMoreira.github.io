function movimentaRaquetes() {
  if (keyIsDown(UP_ARROW)){
    for(let i = 0; i < yDasRaquetes.length; i++) {
      yDasRaquetes[i] -= 10;
          if(yDasRaquetes[i] < -30) {
        yDasRaquetes[i] = -30
      }
    }
    
  }
  if (keyIsDown(DOWN_ARROW)){
    for(let i = 0; i < yDasRaquetes.length; i++) {
      yDasRaquetes[i] += 10;
        if(yDasRaquetes[i] > 300 ) {
      yDasRaquetes[i] = 300
    }
    }
    
  }
  
  if (keyIsDown(87)){
    for(let i = 0; i < yDasRaquetesOponente.length; i++) {
      yDasRaquetesOponente[i] -= 10;
      if(yDasRaquetesOponente[i] < -30) {
        yDasRaquetesOponente[i] = -30
      }
    }
    
  }
  if (keyIsDown(82)){
    for(let i = 0; i < yDasRaquetesOponente.length; i++) {
      yDasRaquetesOponente[i] += 10;
      if(yDasRaquetesOponente[i] > 370) {
        yDasRaquetesOponente[i] = 370
      }
    }
  }
}
