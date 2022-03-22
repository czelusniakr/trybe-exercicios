const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (objeto, chave, valor) => {
  objeto.chave = valor;
};

const listaKeys = objeto => Object.keys(objeto);

const tamanhoObjeto = objeto => Object.keys(objeto).length;

const valoresObjeto = objeto => Object.values(objeto);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const totalEstudantes = objeto => {
  let total = 0;
  const array = Object.keys(objeto);
  for (index in array) {
    total += objeto[array[index]].numeroEstudantes;
  }
  return total;
};

const valorPosicao = (objeto, posicao) => Object.values(objeto)[posicao];

const chaveValor = (objeto, chave, valor) => {
  const array = Object.entries(objeto);
  let isEqual = false;
  for (let index in array) {
    if (array[index][0] === chave && array[index][1] === valor) isEqual = true;
  }
  return isEqual;
};