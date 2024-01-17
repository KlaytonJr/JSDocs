---
title: Exercício 7
icon: dumbbell
order: 7
category:
  - Exercises
tag:
  - exercise
---

## Troca de Valores

Crie um algoritmo que troque os valores de duas variáveis.

<details>
  <summary>Solução 1</summary>

  ### Código
  ```js
    let a = 5;
    let b = 10;

    console.log('Antes da troca: a =', a, 'e b =', b);

    // Troca de valores usando uma variável temporária
    let temp = a;
    a = b;
    b = temp;

    console.log('Após a troca: a =', a, 'e b =', b);
  ```

  ### Explicação
  Nesta solução, usamos uma variável temporária (temp) para armazenar temporariamente o valor de uma das variáveis enquanto trocamos os valores das variáveis a e b.
</details>

<br>

<details>
  <summary>Solução 2</summary>

  ### Código
  ```js
    let a = 5;
    let b = 10;

    console.log('Antes da troca: a =', a, 'e b =', b);

    // Troca de valores sem variável temporária usando desestruturação
    [a, b] = [b, a];

    console.log('Após a troca: a =', a, 'e b =', b);
  ```

  ### Explicação
  Nesta solução, usamos a desestruturação de arrays para trocar os valores das variáveis a e b sem a necessidade de uma variável temporária. Isso é possível ao criar um array [b, a] e desestruturá-lo na ordem inversa nas variáveis a e b.
</details>