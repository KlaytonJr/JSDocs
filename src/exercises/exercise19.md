---
title: Exercício 19
icon: dumbbell
order: 19
category:
  - Exercises
tag:
  - exercise
---

## Conversão de Binário para Decimal

Escreva um programa que converte um número binário para decimal.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function binarioParaDecimal(binario) {
        // Verifica se o número binário é válido
        if (!/^[01]+$/.test(binario)) {
            return 'Número binário inválido.';
        }

        // Converte o número binário para decimal
        const decimal = parseInt(binario, 2);
        return decimal;
    }

    // Exemplo de uso
    const numeroBinario = '101010';
    const numeroDecimal = binarioParaDecimal(numeroBinario);

    console.log(`O número binário ${numeroBinario} é igual a ${numeroDecimal} em decimal.`);
  ```

  ### Explicação
  Neste programa, a função binarioParaDecimal recebe um número binário como argumento. Primeiro, verifica se o número binário é válido (composto apenas por 0s e 1s). Em seguida, utiliza o método parseInt com a base 2 para converter o número binário para decimal.
</details>