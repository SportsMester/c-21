//Crie aqui as variáveis dos personagens e cenário
var papel, papelImg; 

var tesoura, tesouraImg;

function preload(){
  //Carregar imagens e sons
  
  //Carregar imagem variavel = loadImage("nome-do-arquivo.png")
  
  //Carregar animação variavel = loadAnimation("nome-do-arquivo.png","nome-do-arquivo1.png","nome-do-arquivo2.png")
  
  //Carregar sons  variavel = loadSound("nome-do-arquivo.mp3");
  
}

function setup(){
  //Configurar jogo
  createCanvas(windowWidth,windowHeight);
  
  //Crie sprites e adicione suas imagens
  papel = createSprite(200,200,14,16);
  
}

function draw() {
  background("white");

  if(keyDown("LEFT_ARROW")){
    papel.x = papel.x - 3
    
  }

  if(keyDown("RIGHT_ARROW")){
    papel.x = papel.x + 3
    
  }

  if(keyDown("UP_ARROW")){
    papel.y = papel.y - 3
    
  }

  if(keyDown("DOWN_ARROW")){
    papel.y = papel.y + 3
    
  }
  gerarInimigos();
  
  drawSprites();

}
 

function gerarInimigos(){
  if(frameCount %30 === 0){
    tesoura = createSprite(width,Math.round(random(0,height - 100)),30,30);
    tesoura.velocityX  = tesoura.velocityX - 8
  }
}
