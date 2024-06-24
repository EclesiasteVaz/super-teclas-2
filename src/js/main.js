var paragraph = document.querySelector("#letters-dynamic");
var phrases = [
  "Chegou a nova versão do jogo, venha vais curtir bué!",
  "Super Teclas, não fique de fora experimente e compartilhe com os Kambas!",
];
var index = 0;
var phrasesWrote = 0;
var text = "";
var timePaused = 0;


function startAnimations() {
  if (timePaused == 0) {
    text += phrases[phrasesWrote][index];
    paragraph.innerHTML = text;
    index++;
  }
  if (index >= phrases[phrasesWrote].length) {
    phrasesWrote = phrasesWrote == 1 ? 0 : 1;
    index = 0;
    text = "";
    timePaused = 5;
  }
  timePaused = timePaused - 1 > 0 ? timePaused - 1 : 0;
}

setInterval(startAnimations, 200);
