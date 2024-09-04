// fantasia, aventura, romance, drama

// Harry Potter e a pedra filosofal, LIVRE, aventura, fantasia
// Donzela, 12, aventura, fantasia
// Sociedade dos poetas mortos, 12, drama
// Escola do bem e do mal, 14, aventura, fantasia
// Naruto, 10, aventura
// O senhor dos aneis, 12, aventura
// Para todos os garotos que já amei

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(600, 400);
  createElement("h1", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  fill(color("black"));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Sociedade da neve";
    } else {
      if (idade >= 12) {
        if (gostaDeFantasia || gostaDeAventura) {
          return "Donzela";
        } else {
          return "Sociedade dos poetas mortos";
        }
      } else {
        if (gostaDeFantasia) {
          return "O senhor dos aneis"
      } else {
       return "Para todos os garotos que já amei"
      }
    }
    }
  } else {
    if (gostaDeFantasia) {
      return "Harry Potter e a pedra filosofal";
  } else {
  return "Naruto";
}
}
}
