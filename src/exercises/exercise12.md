---
title: Exercício 12
icon: dumbbell
order: 12
category:
  - Exercises
tag:
  - exercise
---

## Maior Elemento em um Array

Crie uma função que encontre e retorne o maior elemento em um array.

<details>
  <summary>Solução 1</summary>

  ### Código
  ```js
    function encontrarMaiorElemento1(array) {
        if (array.length === 0) {
            return 'O array está vazio.';
        }

        return Math.max(...array);
    }

    const numeros1 = [5, 12, 8, 3, 15];
    const maior1 = encontrarMaiorElemento1(numeros1);
    console.log('O maior elemento é:', maior1);
  ```

  ### Explicação
  Nesta solução, utilizamos o método Math.max junto com o operador de propagação (...) para encontrar o maior elemento no array. Verificamos se o array está vazio antes de chamar a função Math.max para evitar erros.
</details>

<br>

<details>
  <summary>Solução 2</summary>

  ### Código
  ```js
    function encontrarMaiorElemento2(array) {
        if (array.length === 0) {
            return 'O array está vazio.';
        }

        let maior = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] > maior) {
            maior = array[i];
            }
        }

        return maior;
    }

    const numeros2 = [10, 7, 25, 14, 18];
    const maior2 = encontrarMaiorElemento2(numeros2);
    console.log('O maior elemento é:', maior2);
  ```

  ### Explicação
  Nesta solução, utilizamos um loop for para percorrer o array e comparar cada elemento com a variável maior. Se encontrarmos um elemento maior, atualizamos a variável maior com esse valor.
</details>