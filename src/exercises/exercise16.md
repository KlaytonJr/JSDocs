---
title: Exercício 16
icon: dumbbell
order: 16
category:
  - Exercises
tag:
  - exercise
---

## Soma de Matrizes

Escreva uma função que realiza a soma de duas matrizes.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function somarMatrizes(matriz1, matriz2) {
        const linhas = matriz1.length;
        const colunas = matriz1[0].length;
        
        // Verifica se as matrizes têm as mesmas dimensões
        if (linhas !== matriz2.length || colunas !== matriz2[0].length) {
            return 'As matrizes têm dimensões diferentes e não podem ser somadas.';
        }

        // Inicializa uma matriz para armazenar a soma
        const resultado = [];

        for (let i = 0; i < linhas; i++) {
            resultado[i] = [];
            for (let j = 0; j < colunas; j++) {
            resultado[i][j] = matriz1[i][j] + matriz2[i][j];
            }
        }

        return resultado;
    }

    // Exemplo
    const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];

    const matrizB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
    ];

    const resultado = somarMatrizes(matrizA, matrizB);
    console.log('Matriz resultante da soma:', resultado);
  ```

  ### Explicação
  Nesta função, primeiro verificamos se as matrizes têm as mesmas dimensões (número de linhas e colunas) para garantir que possam ser somadas. Em seguida, percorremos cada elemento das matrizes, somamos os valores correspondentes e armazenamos o resultado em uma nova matriz.

  Você pode ajustar as matrizes matrizA e matrizB conforme necessário para testar a função com outras entradas.
</details>