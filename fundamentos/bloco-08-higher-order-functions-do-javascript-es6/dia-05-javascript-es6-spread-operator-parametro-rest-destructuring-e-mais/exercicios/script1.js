// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maca', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['iogurte', 'granola', 'mel'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruitSaladWithAdditional = [...fruit, ...additional];
  return fruitSaladWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));