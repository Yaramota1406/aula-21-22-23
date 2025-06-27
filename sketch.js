//Fantasia, aventura, drama

// A viagem de chihiro, LIVRE, fantasia, aventura
// Paddington, LIVRE, fantasia, aventura
// As aventuras de pi, 10, drama, fantasia, aventura
// Guardiões da galáxia, 12, fantasia, aventura
// Ladrões de bicicleta, 12, drama
// O menino que descobriu o vento, 14, drama


let campoIdade;

function setup() {
  createCanvas(600, 400);
  campoIdade =createInput();
}

function draw() {
  background(220);
  
  fill("#1C1C1C")
  textSize(20);
  text("C.E.C.M. Padre Manuel da Nóbrega",180,20)
  text("Aluno: Márcio José Barrada de Abreu",195,60)
  
  fill("#FFC107")
  text("Criando a lista de filmes:",30,100)
  
  fill("blue")
  text("O Filme adequado a sua idade é:", 0,200)
  text("Digite sua idade abaixo:", 10,390)
  
  
  fill("red");
  let idade = campoIdade.value();
  let recomendacao =  geraRecomendacao(idade);
  
  text (recomendacao, width/2, height/2)
}

function geraRecomendacao(idade){
  if (idade >= 10){
    if(idade >=14){
      return "O menino que descobriu o vento"
    }
    else {
    return "As aventuras de PI";
  }
  }
  else {
    return "A viagem de chihiro";
  }
  }