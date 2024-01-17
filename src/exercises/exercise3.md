---
title: Exercício 3
icon: dumbbell
order: 3
category:
  - Exercises
tag:
  - exercise
---

## Fatorial de um Número

Implemente uma função para calcular o fatorial de um número.

<details>
  <summary>Solução 1</summary>

  ### Código
  ```js
    function calcularFatorial(numero) {
        if (numero < 0) {
            return 'Não é possível calcular o fatorial de um número negativo.';
        }

        if (numero === 0 || numero === 1) {
            return 1;
        }

        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }

        return resultado;
    }

    const numero1 = 5;
    const resultado1 = calcularFatorial(numero1);
    console.log(`O fatorial de ${numero1} é: ${resultado1}`);

    const numero2 = 0;
    const resultado2 = calcularFatorial(numero2);
    console.log(`O fatorial de ${numero2} é: ${resultado2}`);
  ```

  ### Explicação
  Nesta solução, criamos uma função calcularFatorial que calcula o fatorial de um número. Verificamos se o número é negativo, retornando uma mensagem apropriada. Em seguida, usamos um loop para calcular o fatorial. Chamamos a função com os números 5 e 0 e imprimimos os resultados no console.
</details>

<br>

<details>
  <summary>Solução 2 (Função recursiva)</summary>

  ### Código
  ```js
    function calcularFatorial(numero) {
        if (numero < 0) {
            return 'Não é possível calcular o fatorial de um número negativo.';
        }

        return numero === 0 || numero === 1 ? 1 : numero * calcularFatorial(numero - 1);
    }

    const numero1 = 6;
    const resultado1 = calcularFatorial(numero1);
    console.log(`O fatorial de ${numero1} é: ${resultado1}`);

    const numero2 = 3;
    const resultado2 = calcularFatorial(numero2);
    console.log(`O fatorial de ${numero2} é: ${resultado2}`);
  ```

  ### Explicação
  Nesta solução, usamos uma abordagem recursiva para calcular o fatorial. A função verifica se o número é negativo e retorna uma mensagem apropriada. Em seguida, utiliza uma expressão condicional ternária para calcular o fatorial recursivamente. Chamamos a função com os números 6 e 3 e imprimimos os resultados no console.
</details>