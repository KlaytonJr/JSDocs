---
title: Exercício 13
icon: dumbbell
order: 13
category:
  - Exercises
tag:
  - exercise
---

## Inversão de Palavras

Implemente um programa que inverte a ordem das palavras em uma frase.

<details>
  <summary>Solução 1</summary>

  ### Código
  ```js
    function inverterOrdemDasPalavras1(frase) {
        const palavras = frase.split(' ');
        const fraseInvertida = palavras.reverse().join(' ');
        return fraseInvertida;
    }

    const frase1 = 'Programação é incrível';
    const resultado1 = inverterOrdemDasPalavras1(frase1);
    console.log('Frase invertida:', resultado1);
  ```

  ### Explicação
  Nesta solução, usamos o método split para dividir a frase em um array de palavras, o método reverse para inverter a ordem do array e, finalmente, o método join para unir as palavras novamente em uma frase invertida.
</details>

<br>

<details>
  <summary>Solução 2</summary>

  ### Código
  ```js
    function inverterOrdemDasPalavras2(frase) {
        const palavras = frase.split(' ');
        const fraseInvertida = palavras.reduceRight((acc, palavra) => acc + ' ' + palavra);
        return fraseInvertida.trim();
    }

    const frase2 = 'JavaScript é poderoso';
    const resultado2 = inverterOrdemDasPalavras2(frase2);
    console.log('Frase invertida:', resultado2);
  ```

  ### Explicação
  Nesta solução, utilizamos o método split para dividir a frase em um array de palavras e o método reduceRight para iterar sobre o array de palavras da direita para a esquerda, construindo a frase invertida.
</details>