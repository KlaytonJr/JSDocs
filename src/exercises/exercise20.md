---
title: Exercício 20
icon: dumbbell
order: 20
category:
  - Exercises
tag:
  - exercise
---

## Encontrar Números Únicos

Crie uma função que recebe um array de números inteiros, no qual todos os números aparecem duas vezes, exceto dois. A função deve encontrar e retornar esses dois números únicos.

<details>
  <summary>Solução 1</summary>

  ### Código
  ```js
    function encontrarNumerosUnicos(array) {
        // Verifica se o array tem pelo menos 4 elementos
        if (array.length < 4) {
            return 'O array deve ter pelo menos quatro elementos.';
        }

        // Calcula a soma total e a soma única dos elementos do array
        const somaTotal = array.reduce((acc, num) => acc + num, 0);
        const somaUnica = Array.from(new Set(array)).reduce((acc, num) => acc + num, 0);

        // Calcula a soma dos dois números únicos
        const somaNumerosUnicos = (somaTotal - somaUnica) / 2;

        // Encontra os dois números únicos
        const numerosUnicos = [
            somaNumerosUnicos - somaUnica,
            somaNumerosUnicos
        ];

        return numerosUnicos;
    }

    // Exemplo de uso
    const numeros = [2, 4, 7, 2, 7, 5];
    const numerosUnicos = encontrarNumerosUnicos(numeros);

    console.log('Os números únicos são:', numerosUnicos);
  ```

  ### Explicação
  Nesta abordagem, a função calcula a soma total e a soma única dos elementos do array. A diferença entre essas somas é duas vezes a soma dos dois números únicos. Então, ao dividir por 2, obtemos a soma dos dois números únicos. Depois, encontramos esses dois números subtraindo a soma única.
</details>

<br>

<details>
  <summary>Solução 2</summary>

  ### Código
  ```js
    function encontrarNumerosUnicos(array) {
        // Verifica se o array tem pelo menos 4 elementos
        if (array.length < 4) {
            return 'O array deve ter pelo menos quatro elementos.';
        }

        // Realiza a operação XOR em todos os elementos do array
        let xorResult = array[0];
        for (let i = 1; i < array.length; i++) {
            xorResult ^= array[i];
        }

        // Encontra o bit menos significativo definido no resultado XOR
        const bitMenosSignificativo = xorResult & -xorResult;

        // Divide os números originais em dois grupos com base no bit encontrado
        let grupo1 = 0;
        let grupo2 = 0;

        for (const numero of array) {
            if ((numero & bitMenosSignificativo) !== 0) {
            grupo1 ^= numero;
            } else {
            grupo2 ^= numero;
            }
        }

        return [grupo1, grupo2];
    }

    // Exemplo de uso
    const numeros = [2, 4, 7, 2, 7, 5];
    const numerosUnicos = encontrarNumerosUnicos(numeros);

    console.log('Os números únicos são:', numerosUnicos);
  ```

  ### Explicação
  Nesta função, utilizamos a operação XOR (ou exclusivo) para encontrar os dois números únicos. A estratégia envolve encontrar o bit menos significativo definido no resultado da operação XOR, dividir os números originais em dois grupos com base nesse bit e, finalmente, realizar a operação XOR em cada grupo para obter os dois números únicos.
</details>