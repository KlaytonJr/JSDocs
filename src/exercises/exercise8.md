---
title: Exercício 8
icon: dumbbell
order: 8
category:
  - Exercises
tag:
  - exercise
---

## Ordenação de Array

Implemente uma função para ordenar um array de números.

<details>
  <summary>Solução 1</summary>

  ### Código
  ```js
    function ordenarArray(array) {
        return array.slice().sort((a, b) => a - b);
    }

    const numeros1 = [5, 2, 8, 1, 4];
    const resultado1 = ordenarArray(numeros1);
    console.log('Array ordenado:', resultado1);
  ```

  ### Explicação
  Nesta solução, utilizamos o método slice() para criar uma cópia do array original e, em seguida, o método sort() com uma função de comparação que compara os elementos numericamente. Isso garante que a ordem seja crescente.
</details>

<br>

<details>
  <summary>Solução 2</summary>

  ### Código
  ```js
    function ordenarArray(array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Troca de valores
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            }
        }
        return array;
    }

    const numeros2 = [12, 6, 3, 9, 2];
    const resultado2 = ordenarArray(numeros2);
    console.log('Array ordenado:', resultado2);
  ```

  ### Explicação
  Nesta solução, utilizamos o algoritmo de ordenação Bubble Sort, que percorre o array várias vezes, comparando e trocando os elementos adjacentes até que o array esteja ordenado.
</details>