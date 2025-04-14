const tabuleiro = document.getElementById('tabuleiro');
let selecionada = null;


const pecasIniciais = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];


for (let linha = 0; linha < 8; linha++) {
  for (let coluna = 0; coluna < 8; coluna++) {
    const casa = document.createElement('div');
    casa.classList.add('casa');

    const cor = (linha + coluna) % 2 === 0 ? 'branca' : 'preta';
    casa.classList.add(cor);

    casa.dataset.linha = linha;
    casa.dataset.coluna = coluna;

    casa.textContent = pecasIniciais[linha][coluna];

    casa.addEventListener('click', () => {
      if (selecionada) {
        casa.textContent = selecionada.textContent;
        selecionada.textContent = "";
        selecionada.classList.remove('selecionada');
        selecionada = null;
      } else if (casa.textContent !== "") {
        selecionada = casa;
        casa.classList.add('selecionada');
      }
    });

    tabuleiro.appendChild(casa);
  }
}
