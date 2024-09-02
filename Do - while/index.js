// Exercício Fácil:
// Escreva um programa em JavaScript que imprima todos os números de 1 a 10 utilizando um loop while.


// let numeros = 1;

// do {
//     console.log(numeros)
//     numeros++
// } while (numeros <= 10)



// Exercício Moderado:
// Escreva um programa em JavaScript que calcule a soma dos números de 1 a 100 utilizando um loop while. Imprima o resultado no final.


let soma = 0;
let i = 1;

while (i < 100) {
    soma += i;
    console.log(`a soma de ${i} + ${soma} é, ${soma + i}`);
    i++;
}; 
