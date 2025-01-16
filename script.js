/*
2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".

3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.

4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.

5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.

6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.

7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.

8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".

9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.

10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.

11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.

12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.

13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.

14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.

15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/

/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.
*/

// let resultado;
// let numberOne = parseInt(document.getElementById("numberOne").value);
// let numberTwo = parseInt(document.getElementById("numberTwo").value);

// function sum (numberOne, numberTwo) {
//     numberOne = numberOne.value
//     numberTwo = numberTwo.value
//     resultado = numberOne + numberTwo;
//     window.alert(resultado);
// }

function sum(){
    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);
    let result = numberOne + numberTwo;
    alert("Resultado: " + result);
}

function imparOUpar(){
    let number = parseInt(document.getElementById("imparOUpar").value);
    var result = number % 2 == 0 ? "PAR" : "IMPAR"
    alert("Este numero é: " + result);
}

function sequenciaFor() {
    for (var i = 0; i < 11; i++) {
        console.log(i);
    }
}

function sequenciaWhile() {
    let i = 0;
    while (i <= 10){
        console.log(i);
        i++;
    }
}

function tabuada(){
    let number = document.querySelector("#tabuadaValor").value;

    for (let i = 0; i <= 10; i++) {
        console.log(number,' x ', i, ' = ', number * i)
    }
}

function lerArray() {
    const myArrayList = [3, 7, 2, 9, 5];
    let numMaior = 0;

    for (numero of myArrayList){
        if (numero > numMaior) {
            numMaior = numero;
        }
    }
    alert(numMaior)
}

function inverterPalavra() {
    let palavra = document.querySelector("#palavraInvertida").value.split('');

    let palavraInvertida = palavra.reverse();

    alert(palavraInvertida.join(''))
}

function somarArray(){
    const myArray = [1, 2, 3, 4, 5];
    let sumArray = 0;
    for (numero of myArray) {
        sumArray = sumArray + numero;
    }
    alert(sumArray)
}

function verificarPrimo() {
    let numero = parseInt(document.querySelector("#numeroPrimo").value);
    if (numero <= 1) {
        document.getElementById("primoResultado").textContent = `Não é primo. É divisível por ${i}`;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            document.getElementById("primoResultado").textContent = `Não é primo. É divisível por ${i}`;
        }
    }

    document.getElementById("primoResultado").textContent = `É PRIMOOOO`;
    //consegui fazer nao prof 
} 

let botaoFatorial = document.getElementById("fatorialBotao");
let numInput = document.querySelector("#fatorialQuestao"); 

botaoFatorial.addEventListener("click", () => {
  let num = parseInt(numInput.value); 

  function fatorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * fatorial(n - 1);
    }
  }
  let resultado = fatorial(num);
  document.getElementById("resultadoFatorial").textContent = `O fatorial de ${num} é: ${resultado}`; 
});


function verificarPalindromo() {
    let arrayPalindromo = document.querySelector("#palindromo").value;
    let arrayCortado = arrayPalindromo.split('');
    const arrayPalindroInvertido = arrayCortado.reverse();
    
    if (arrayPalindromo != arrayPalindroInvertido.join('')){
        document.getElementById("mostrarPalindromo").textContent = `NÃO É PALINDROMO`; 
    } else {
        document.getElementById("mostrarPalindromo").textContent = `É PALINDROMO`; 
    }

}

function gerarNumeroAleatorio(){
    console.log(gerarNumero(100))

    function gerarNumero(num){
        return Math.floor(Math.random() * num)
    }
}

function contarVogal(){
    const inputVogal = document.querySelector("#inputVogal").value
    vogais = {
        a = 'a'

    }
}