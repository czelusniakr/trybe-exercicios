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