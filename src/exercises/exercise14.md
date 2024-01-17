---
title: Exercício 14
icon: dumbbell
order: 14
category:
  - Exercises
tag:
  - exercise
---

## Números Perfeitos

Um número perfeito é aquele cuja soma dos divisores próprios é igual ao próprio número. Escreva um programa que verifica se um número é perfeito.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function verificarNumeroPerfeito(numero) {
        if (numero <= 0) {
            return 'Por favor, insira um número positivo.';
        }

        let somaDivisores = 0;

        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
            somaDivisores += i;
            }
        }

        return somaDivisores === numero;
    }

    const numero1 = 28;
    const resultado1 = verificarNumeroPerfeito(numero1);
    console.log(`${numero1} é um número perfeito? ${resultado1 ? 'Sim' : 'Não'}`);

    const numero2 = 12;
    const resultado2 = verificarNumeroPerfeito(numero2);
    console.log(`${numero2} é um número perfeito? ${resultado2 ? 'Sim' : 'Não'}`);
  ```

  ### Explicação
  Neste programa, a função verificarNumeroPerfeito recebe um número como argumento e verifica se a soma dos seus divisores próprios é igual ao próprio número. A função retorna true se o número é perfeito e false caso contrário.

  Os exemplos com os números 28 e 12 são impressos no console para mostrar o resultado da verificação. Você pode substituir esses números por outros que deseja analisar.
</details>