// 1. Acesse o elemento elementoOndeVoceEsta .
const elemento = document.getElementById("elementoOndeVoceEsta");
// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elemento.parentNode;
pai.style.color = "red";
// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elemento.firstChild;
primeiroFilhoDoFilho.innerText = "Primeiro filho do filho";
// 4. Acesse o primeiroFilho a partir de pai .
const primeiroFilho = pai.firstChild;
// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
const primeiroFilho = elemento.parentNode.firstChild;
// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const atencao = elemento.nextSibling;
// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
const terceiroFilho = elemento.nextElementSibling;
// 8. Agora acesse o terceiroFilho a partir de pai .
const terceiroFilho = pai.lastChild.previousSibling;