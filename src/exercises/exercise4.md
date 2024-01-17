---
title: Exercício 4
icon: dumbbell
order: 4
category:
  - Exercises
tag:
  - exercise
---

## Soma dos Números Ímpares

Faça um programa que soma todos os números ímpares de 1 a 100.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function somaImparesAte100() {
        let soma = 0;
        for (let i = 1; i <= 100; i += 2) {
            soma += i;
        }
        return soma;
    }

    const resultado = somaImparesAte100();
    console.log('A soma dos números ímpares de 1 a 100 é:', resultado);
  ```

  ### Explicação
  Nesta solução, usamos um loop for para percorrer os números de 1 a 100, incrementando de 2 em 2 (apenas números ímpares) e somando cada número à variável soma. No final, imprimimos a soma no console.
</details>