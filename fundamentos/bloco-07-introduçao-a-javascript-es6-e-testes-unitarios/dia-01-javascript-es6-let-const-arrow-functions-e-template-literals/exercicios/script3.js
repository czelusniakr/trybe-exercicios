// Referência: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/javascript-es6-parte-1/solutions/81c644e5-1f1b-467a-89a2-909bcc625c8a/gabarito-dos-exercicios/a28fa634-61a2-440a-a32a-8fd1aca67fc9?use_case=calendar

const factorial = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
    result *= index;
  }

  return result;
}