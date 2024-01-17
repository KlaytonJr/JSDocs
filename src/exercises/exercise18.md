---
title: Exercício 18
icon: dumbbell
order: 18
category:
  - Exercises
tag:
  - exercise
---

## Contagem de Palavras

Faça um programa que conta o número de palavras em uma frase.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function contarPalavras(frase) {
        const palavras = frase.split(/\s+/).filter((palavra) => palavra.trim() !== '');
        return palavras.length;
    }

    const frase = 'Este é um programa simples para contar palavras em uma frase.';
    const numeroDePalavras = contarPalavras(frase);

    console.log(`A frase "${frase}" tem ${numeroDePalavras} ${numeroDePalavras === 1 ? 'palavra' : 'palavras'}.`);
  ```

  ### Explicação
  Neste programa, a função contarPalavras recebe uma frase como argumento. Utilizamos o método split com uma expressão regular (/\s+/) para dividir a frase em um array de palavras, removendo espaços em branco adicionais. Em seguida, usamos o método filter para excluir palavras vazias e contamos o número de palavras no array resultante.
</details>