//For Each
//const imgs = document.querySelectorAll('img')
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
/*const img = document.querySelector('img')

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




/* Eventos 1 e 2 
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
*/
//EXERCÍCIO
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
/*const linksInternos = document.querySelectorAll('a[href^=#]')

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
*/
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

//const todosElementos = do.querySelectorAll('body *')

//function handleElemento(event){
//console.log(event.currentTarget);
//}

/*todosElementos.forEach((elemento) =>{
    elemento.addEventListener('click', handleElemento);
})*/

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

Clonar Elementos

Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);
*/
//Exercicio
// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)//clonando o menu
copy.appendChild(cloneMenu)//movendo o menu para baico
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')
// Selecione o DD referente ao primeiro DT
const procimoDD = primeiroDt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML;

/* Objetos*/

//Função Construtora de Objetos
function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida
  this.preco = precoAtribuido
}

//Atribuindo valores para o objeto.
const honda = new type('Honda', 3000);
const fiat = new type('Fiat', 2500);

//this para retornar o objeto 
function Carro2(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida
  this.preco = precoAtribuido
}
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$', '')// o sinal de '+' transforma a string em número e o replace esta retirando o cifrão para efetuar a somna no final da função
  if (item.descricao.slice(0, 4) === 'Taxa')
    taxaTotal += item.valor//retornando a soma da função
})
console.log(taxaTotal)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';')

console.log(arrayTransportes)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
html = html.split('span').join('a')//pego o span e transforme em a
console.log(html)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase[frase.length - 1])

// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes.forEach((item) => {
  item = item.toLowerCase();
  item = item.trim();
  item = item.slice(0, 4);

  if (item === 'taxa') {
    taxasTotal++
  }

})

console.log(taxasTotal)

/*É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

const ano = 2018;
const preco = new Number(99);
COPIAR
NUMBER.ISNAN() E NUMBER.ISINTEGER();
isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.

Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false
COPIAR
NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100
COPIAR
Float possui decimal, Integer não.

N.TOFIXED(DECIMAIS)
Arredonda o número com base no total de casas decimais do argumento.

const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

const preco2 = 1499.49;
preco2.toFixed() // 1499
COPIAR
N.TOSTRING(RADIX)
Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const preco = 2.99;
preco.toString(10); // '2.99'
COPIAR
N.TOLOCALESTRING(LANG, OPTIONS);
Formata o número de acordo com a língua e opções passadas.

const preco = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49
COPIAR
MATH
É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.303
COPIAR
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()
abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4
COPIAR
MATH.MAX(), MATH.MIN() E MATH.RANDOM();
max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;
COPIAR
EXERCÍCIOS
// Retorne um número aleatório
// entre 1050 e 2000


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
*/
/*Anotações Aulas */
console.log(Number.isNaN('ds'))
console.log()
parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100

const preco = 10.32565
console.log(preco.toFixed())//fixa as casas decimais ao colocar o número dentro ().

//toLocaleString(lang, options) transforma os números em moedas conforme a linguagem passada.

let valor = 48.49
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(valor)

//Math é um objeto nativo
console.log(Math.PI)
/*Math.abs() transforma negativos em positivos
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4
*/

/*
Math.max(5,3,10,42,2); // 42 <-- retorna o maior valor
Math.min(5,3,10,42,2); // 2 <- retorna o meno

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;



*/

EXERCÍCIOS
// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050 ) 

console.log(aleatorio)

// Retorne o maior número da lista abaixo
const numeros = '40, 5, 20, 8, 9';

const arrayNumeros = numeros.split(', ')

//Math.max(5,3,10,42,2); // 42 <-- retorna o maior valor
console.log(Math.max(...arrayNumeros))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco (preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')//retirando espaços , R$ e mudando virgula e ponto e colocamos o + para transformar em números
  preco = +preco.toFixed(2)
  return preco
} 
let soma = 0
listaPrecos.forEach((preco) =>{
  soma += limparPreco(preco)
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

limparPreco(listaPrecos[1])                    