let colidiu = false;
let colidiuGol = false;
let colisaoComGolOponente = false;


// Placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

// Sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
   trilha = loadSound("trilha.mp3");
   ponto = loadSound("ponto.mp3");
   raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.play()
}

function draw() {
  background(color(10, 200, 10));
  desenhaCampo();
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquetes();
  movimentaRaquetes();
  verificaColisaoRaquete();
  incluiPlacar();
  marcaPonto();
  mostraGol(xGol);
  mostraGol(xGolOponente);
}

