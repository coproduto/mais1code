// Texto dentro de aspas duplas é uma string
// Strings são texto que pode ser manipulado pelo JS
// O objeto console representa o console do browser
// O comando log manda escrever algo no console.
console.log("Olá, mundo!")

// Também podemos trabalhar com números.
// Para usar um número é só escrever ele.
console.log(50 + 50)

// Variáveis servem para a gente guardar valores.
// Para criar uma variável, usamos a palavra-chave let.
let numeroCliques = 0

// Para criar uma função, fazemos assim:
// Primeiro vem a palavra-chave function, que indica
// que estamos criando uma função.
// Depois vem o nome da função. Depois colocamos os
// argumentos entre parênteses (nesse caso nenhum)
// e finalmente o corpo da função
function clique() {
  numeroCliques = numeroCliques + 1

  // O objeto document representa a página HTML.
  // Você pode usar ele pra manipular a página.
  // Nesse caso, usamos a função getElementById
  // que pega um elemento da página por seu ID.
  let elemento = document.getElementById("numero")

  // Todo elemento que pegamos da página
  // tem a propriedade innerText, que representa o texto
  // dentro daquele elemento.
  elemento.innerText = numeroCliques
}
