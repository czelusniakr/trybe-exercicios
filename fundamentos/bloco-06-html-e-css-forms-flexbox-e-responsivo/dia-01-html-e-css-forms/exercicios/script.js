// Referência: https://app.betrybe.com/course/fundamentals/html-e-css-forms-flexbox-e-responsivo/html-css-forms-gabarito/solutions/90e2949b-be3e-4901-b17d-09266c299d51/conteudos/29a45a92-f16f-417e-b78d-5e036dc900c0

// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', evento1);
INPUT_CHECKBOX.addEventListener('click', evento1);

function evento1(event) {
  event.preventDefault();
}

INPUT_TEXT.addEventListener('keypress', evento2);

function evento2(event) {
  const tecla = event.key;
  if (tecla !== 'a') {
    event.preventDefault();
  };
}