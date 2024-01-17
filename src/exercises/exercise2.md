---
title: Exercício 2
icon: dumbbell
order: 2
category:
  - Exercises
tag:
  - exercise
---

## Verificação de Número Primo

Crie uma função que verifica se um número é primo ou não.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function isPrimo(numero) {
        if (numero <= 1) {
            return false;
        }

        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
            return false;
            }
        }

        return true;
    }

    const numero1 = 17;
    const resultado1 = isPrimo(numero1);
    console.log(`${numero1} é primo? ${resultado1 ? 'Sim' : 'Não'}`);

    const numero2 = 25;
    const resultado2 = isPrimo(numero2);
    console.log(`${numero2} é primo? ${resultado2 ? 'Sim' : 'Não'}`);
  ```

  ### Explicação
  Nesta solução, também criamos uma função isPrimo que verifica se um número é primo. Ela retorna false se o número for menor ou igual a 1. Utilizamos um loop para verificar se o número é divisível por algum outro número até o próprio número menos 1. Se for divisível, o número não é primo; caso contrário, é primo. Chamamos a função com os números 17 e 25 e imprimimos os resultados no console.
</details>