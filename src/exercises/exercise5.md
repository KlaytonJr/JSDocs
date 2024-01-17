---
title: Exercício 5
icon: dumbbell
order: 5
category:
  - Exercises
tag:
  - exercise
---

## Palíndromo

Crie uma função que verifica se uma palavra é um palíndromo.

<details>
  <summary>Solução 1</summary>

  ### Código
  ```js
    function ehPalindromo(palavra) {
        const palavraInvertida = palavra.split('').reverse().join('');
        return palavra === palavraInvertida;
    }

    const palavra1 = 'radar';
    const resultado1 = ehPalindromo(palavra1);
    console.log(`${palavra1} é um palíndromo? ${resultado1 ? 'Sim' : 'Não'}`);

    const palavra2 = 'javascript';
    const resultado2 = ehPalindromo(palavra2);
    console.log(`${palavra2} é um palíndromo? ${resultado2 ? 'Sim' : 'Não'}`);
  ```

  ### Explicação
  Nesta solução, criamos uma função ehPalindromo que recebe uma palavra como parâmetro. A função inverte a palavra usando os métodos split, reverse, e join, e então verifica se a palavra original é igual à palavra invertida. Chamamos a função com as palavras 'radar' e 'javascript' e imprimimos os resultados no console.
</details>

<br>

<details>
  <summary>Solução 2</summary>

  ### Código
  ```js
    function ehPalindromo(palavra) {
        const tamanho = palavra.length;
        for (let i = 0; i < tamanho / 2; i++) {
            if (palavra[i] !== palavra[tamanho - 1 - i]) {
            return false;
            }
        }
        return true;
    }

    const palavra1 = 'level';
    const resultado1 = ehPalindromo(palavra1);
    console.log(`${palavra1} é um palíndromo? ${resultado1 ? 'Sim' : 'Não'}`);

    const palavra2 = 'openai';
    const resultado2 = ehPalindromo(palavra2);
    console.log(`${palavra2} é um palíndromo? ${resultado2 ? 'Sim' : 'Não'}`);
  ```

  ### Explicação
  Nesta solução, criamos uma função ehPalindromo que utiliza um loop para comparar os caracteres da palavra original com seus correspondentes na posição oposta. Se em algum ponto esses caracteres não coincidirem, a função retorna false; caso contrário, retorna true. Chamamos a função com as palavras 'level' e 'openai' e imprimimos os resultados no console.
</details>