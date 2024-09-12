// fantasia, aventura, drama
// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama
// As Aventuras de Pi, 10, drama, fantasia, aventura.

// Ladrões de bicicleta, 12, drama.


function setup() {
    createCanvas(800, 600)
    createSpan("Sua idade:");
    campoIdade = createInput("");
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}
function draw() {
    background("red")
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(10, 8000, 199));
    textAlign(CENTER, CENTER);
    textSize(100);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 100) {
        if (idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if (gostaDeFantasia) {
                return "As aventuras de pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de chihiro";
        } else {
            return "o feitiço do tempo "
        }
    }
}