// Exercício Fácil:
// Escreva um programa em JavaScript que imprima todos os números de 1 a 10 utilizando um loop while.


// let numeros = 1;

// do {
//     console.log(numeros)
//     numeros++
// } while (numeros <= 10)



// Exercício Moderado:
// Escreva um programa em JavaScript que calcule a soma dos números de 1 a 100 utilizando um loop while. Imprima o resultado no final.


let soma = 0;   // Variável para armazenar a soma
let i = 1;      // Variável para o contador

do {
    soma += i;  // Adiciona o valor de i à soma
    i++;        // Incrementa o contador
    console.log(i, soma);  // Imprime o resultado
} while (i < 100);  // Continua enquanto i for menor ou igual a 100
