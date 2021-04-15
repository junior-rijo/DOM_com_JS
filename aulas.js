//For Each
const imgs = document.querySelectorAll('img')
//a cada imagem a funcão abaixo é executada
/*let i = 0
imgs.forEach(function(){
    console.log(i++)
})*/
//selecionando as imagens "itens"
/*let i = 0
imgs.forEach(function(item, index, array){
    console.log(item, index, array)
    //posso passa item , index ou array
})
//Arrow function resumidamente substitui o function por =>
imgs.forEach(() => console.log(i++))
/*Exercicio 
//Mostre no console cada paragrafo
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

//mostrando os itens('P')
paragrafos.forEach((item) =>{
    console.log(item)
})
//Mostrando só os textos do P
paragrafos.forEach((item) =>{
    console.log(item.innerText)
})

*/
//Aulas Classe e atrubutos

/*const menu = document.querySelector('.menu')

menu.classList.add('ativo')
menu.classList.remove('ativo')
menu.classList.toggle('ativo')

//Atributes
const img = document.querySelector('img');

console.log(img.getAttribute('src')); // valor do src
console.log(img.setAttribute('alt', 'Texto Alternativo')); // muda o alt
console.log(img.hasAttribute('id')); // true / false
console.log(img.removeAttribute('alt')); // remove o alt

console.log(img.hasAttributes()); // true / false se tem algum atributo
*/
// Adicione a classe ativo a todos os itens do menu
/*const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) =>{
    item.classList.add('ativo')
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) =>{
    item.classList.remove('ativo')
})
itensMenu[0].classList.add('ativo')
*/
// Verifique se as imagens possuem o atributo alt
/*const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt')
    console.log(img, possuiAtributo)
})
// Modifique o href do link externo no menu

/*const animaisTop = listaAnimais.offset

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll



window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
*/
// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')

const imgTop = img.offsetTop

console.log('mostrou o top da em relação a primeira Imagem ' + imgTop)

// Retorne a soma da largura de todas as imagens

function somaImagens(){

    const images = document.querySelectorAll('img');
    let soma = 0;

    images.forEach((imagem) =>{//usa o forEach para falar com cada elemento
    soma += imagem.offsetWidth;
});

    console.log(soma)
}

window.onload = function(){//serve para carregar o js após o carregamento da função da imagens solicitadas na função abaixo.
    somaImagens();
}




/* Eventos 1 e 2 */
const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');//add evento de click
})

//

const img = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img.addEventListener('click', callback); // 🚀
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function() {
  console.log('Clicou');
})
img.addEventListener('click', () => {
  console.log('Clicou');
})

//EVENT
//O primeiro parâmetro do callback é referente ao evento que ocorreu.

const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

img.addEventListener('click', callback);

//Geralmente utilizam e como nome do parâmetro

//PROPRIEDADES DO EVENT
const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

//EVENT.PREVENTDEFAULT()
//Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

//THIS
//A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

const img = document.querySelector('img');

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);

//Geralmente igual ao event.currentTarget

//DIFERENTES EVENTOS
//Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.

const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);

https://developer.mozilla.org/en-US/docs/Web/Events

//KEYBOARD
//Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', callback);

//FOREACH E EVENTOS
//O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

//EXERCÍCIO
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^=#]')

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) =>{
        link.classList.remove('ativo');
    })

    event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) =>{
    linksInternos.addEventListener('click', handleLink)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = do.querySelectorAll('body *')

function handleElemento(event){
    console.log(event.currentTarget);
}

todosElementos.forEach((elemento) =>{
    elemento.addEventListener('click', handleElemento);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site.

//Como navegar pelo dom

/*const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho
*/
//Manipulando ELementos
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); // substitui titulo por lista
//Para criar novo elementos
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');//criou um novo h1
novoH1.innerText = 'Novo Título';//adcionando texto
novoH1.classList.add('titulo');//adcionou uma classe

animais.appendChild(novoH1);//inserido na visualização.
