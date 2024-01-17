---
title: Exercício 11
icon: dumbbell
order: 11
category:
  - Exercises
tag:
  - exercise
---

## Soma dos Dígitos

Escreva um programa que calcula a soma dos dígitos de um número inteiro.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function somaDosDigitos(numero) {
        let soma = 0;

        // Converte o número para uma string para iterar pelos dígitos
        const numeroString = Math.abs(numero).toString();

        for (let i = 0; i < numeroString.length; i++) {
            soma += parseInt(numeroString[i], 10);
        }

        return soma;
    }

    const numero = 12345;
    const resultado = somaDosDigitos(numero);

    console.log(`A soma dos dígitos de ${numero} é: ${resultado}`);
  ```

  ### Explicação
  Neste programa, a função somaDosDigitos recebe um número inteiro como argumento. Ele converte o número para uma string para iterar pelos dígitos. A cada iteração, converte o caractere de volta para um número usando parseInt e adiciona à soma. O resultado é então impresso no console.
</details>