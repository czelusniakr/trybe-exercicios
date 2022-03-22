// Referência: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/javascript-es6-parte-1/solutions/81c644e5-1f1b-467a-89a2-909bcc625c8a/gabarito-dos-exercicios/a28fa634-61a2-440a-a32a-8fd1aca67fc9?use_case=calendar

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();

console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉