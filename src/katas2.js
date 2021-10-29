// Tarefa 1 - Adição.
// Obs.: arg = argumento.

function add(arg1, arg2){

    return arg1 + arg2
}
add(3, 5)

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');






// Tarefa 2 - Multiplicação.
// Obs.: arg = argumento.

function multiply(arg1, arg2){

    let saida = 0
    
    for(let contador = 1; contador <= arg1; contador++) {
    
    saida = add(saida, arg2)
    
    }
    return saida
}
multiply(4, 6)

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');





// Tarefa 3 - Potenciação.
// Obs.: arg = argumento.

function power(arg1, arg2){

    let saida = 1

    for(let contador = 1; contador <= arg2; contador++) 
    
    saida = multiply(saida, arg1)

    return saida
}
power(3, 4)

console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');





// Tarefa 4 - Fatorial
// Obs.: arg = argumento.

function factorial(arg1){

    let saida = 1

    for(let contador = 1; contador <= arg2; contador++){ 
    
    saida = multiply(saida, arg1)

    }
    return saida
}
factorial(5)

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');







/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// Tarefa 5 - Fibonacci.

// Infelizmente não tive cabeça para fazer o bônus, mas adoraria que alguém pudesse me ajudar com isso, em breve.

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
