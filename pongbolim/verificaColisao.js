function verificaColisao(){
  if (xBolinha + raio> width ||
     xBolinha < raio){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha < raio ){
    velocidadeYBolinha *= -1;
  }
}