// Exercício Fácil
// Escreva um programa em JavaScript que recebe uma cor em inglês e retorna o seu nome em português. As cores podem ser: "red" (vermelho), "blue" (azul), "green" (verde), "yellow" (amarelo) e "black" (preto).

const color = 'black'

switch (color) {
    case 'red':
        console.log('Vermelho')
        break;
    
    case 'blue':
        console.log('Azul')
        break;
    
    case 'green':
        console.log('Verde')
        break;

    case 'yellow':
        console.log('Amarelo')
        break;

    case 'black':
        console.log('Preto')
        break;

    default:
        console.log('Essa cor não é válida')
        break;
}




// Exercício Moderado
// Escreva um programa em JavaScript que recebe um número de 1 a 12 e retorna o mês correspondente. Caso seja um número inválido retorna "Número inválido.”





// Exercício Intermediário
// Escreva um programa em JavaScript que recebe uma letra do alfabeto e retorna se é uma vogal ou uma consoante.





// Exercício Avançado
// Crie um programa em JavaScript que implemente uma calculadora básica. A função `calculadora` receberá dois números como parâmetro e um terceiro parâmetro indicando a ação a ser executada. As ações possíveis são: "somar", "subtrair", "dividir" e "multiplicar". O resultado da operação deve ser retornado pela função.
// **Exemplo de uso:** `calculadora(5, 3, "somar")` deve retornar 8.






// Exercício Desafiado
// Escreva um programa em JavaScript que recebe um número de 1 a 7 e retorna o dia da semana correspondente. 
// Além disso, implemente uma verificação adicional utilizando `if-else` para retornar "Fim de semana" caso o número seja 1 ou 7 (domingo ou sábado), e "Dia útil" caso contrário.

// **Exemplo de uso:** `verificarDiaSemana(3)` deve retornar "Quarta-feira, Dia útil".

// **Dica:** Utilize os valores de 1 a 7 para representar os dias da semana, sendo 1 para domingo, 2 para segunda-feira e assim por diante.