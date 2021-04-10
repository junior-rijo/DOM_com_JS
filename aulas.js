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

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
