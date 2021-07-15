// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }

  function Pessoa (nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.andar = function() {
          console.log(nome + ' andou');
      }
  }
  
  // Crie 3 pessoas (Novos Objetos, que estão recebendo os atributos acima), João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  const joao = new Pessoa('Joao', 20);
  const maria = new Pessoa('Maria', 25);
  const bruno = new Pessoa('Bruno', 15);
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
  function Dom (seletor){
    const elementList = document.querySelectorAll(seletor);
    this.elementList = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
    this.removeClass = function(classe){
        elementList.forEach((element) =>{
            element.classList.add(classe);
        })
    }
  }

  const listaItens = new Dom('li');
const ul = new Dom('ul');
  listaItens.addClass('ativar');
  ul.addClass('ativar-ul');
//Liste 5 objetos nativos
Object
String
Array
Function
Number

//Liste 5 objetos do browser
window
history
Document
HTMLCollection
Nodelist
//Liste 2 Métodos, Propriedades ou Objetos
//presentes no chrome que não existem no firefox