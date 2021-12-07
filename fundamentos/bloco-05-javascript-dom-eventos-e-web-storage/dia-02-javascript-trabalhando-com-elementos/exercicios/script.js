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
elemento.parentNode.firstChild;
// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const atencao = elemento.nextSibling;
// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
const terceiroFilho = elemento.nextElementSibling;
// 8. Agora acesse o terceiroFilho a partir de pai .
pai.lastChild.previousSibling;
// 1. Crie um irmão para elementoOndeVoceEsta .
let irmaoTexto = "Irmão";
let irmaoElemento = document.createElement("p");
irmaoElemento.innerText = irmaoTexto;
elemento.parentNode.appendChild(irmaoElemento);
// 2. Crie um filho para elementoOndeVoceEsta .
let filhoTexto = "Filho";
let filhoElemento = document.createElement("p");
filhoElemento.innerText = filhoTexto;
elemento.appendChild(filhoElemento);
// 3. Crie um filho para primeiroFilhoDoFilho .
let filhoDoPrimeiroFilhoDoFilhoTexto = "Filho do primeiro filho do filho";
let filhoDoPrimeiroFilhoDoFilhoElemento = document.createElement("p");
filhoDoPrimeiroFilhoDoFilhoElemento.innerText = filhoDoPrimeiroFilhoDoFilhoTexto;
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilhoElemento);
// 4. A partir desse filho criado, acesse terceiroFilho .
let terceiroFilhoAPartirDeFilhoCriado = filhoDoPrimeiroFilhoDoFilhoElemento.parentNode.parentNode.nextElementSibling;
