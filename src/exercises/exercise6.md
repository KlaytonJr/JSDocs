---
title: Exercício 6
icon: dumbbell
order: 6
category:
  - Exercises
tag:
  - exercise
---

## Sequência de Fibonacci

Escreva um programa para gerar os primeiros N termos da sequência de Fibonacci.

<details>
  <summary>Solução 1</summary>

  ### Código
  ```js
    function fibonacciAteN(n) {
        const sequencia = [0, 1];

        for (let i = 2; i < n; i++) {
            sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
        }

        return sequencia;
    }

    const n1 = 8;
    const resultado1 = fibonacciAteN(n1);
    console.log(`Os primeiros ${n1} termos da sequência de Fibonacci são:`, resultado1);
  ```

  ### Explicação
  Nesta solução, criamos uma função fibonacciAteN que gera os primeiros N termos da sequência de Fibonacci. Utilizamos um loop para calcular cada termo com base nos dois termos anteriores. Chamamos a função com N = 8 e imprimimos os resultados no console.
</details>

<br>

<details>
  <summary>Solução 2</summary>

  ### Código
  ```js
    function fibonacciAteN(n) {
        if (n <= 0) {
            return 'N deve ser um número positivo.';
        }

        const sequencia = [0, 1];

        while (sequencia.length < n) {
            const proximoTermo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
            sequencia.push(proximoTermo);
        }

        return sequencia;
    }

    const n2 = 10;
    const resultado2 = fibonacciAteN(n2);
    console.log(`Os primeiros ${n2} termos da sequência de Fibonacci são:`, resultado2);
  ```

  ### Explicação
  Nesta solução, usamos um loop while para gerar os primeiros N termos da sequência de Fibonacci. Verificamos se N é um número positivo e, em seguida, calculamos e adicionamos os termos à sequência. Chamamos a função com N = 10 e imprimimos os resultados no console.
</details>