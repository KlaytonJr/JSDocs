---
title: Exercício 1
icon: dumbbell
order: 1
category:
  - Exercises
tag:
  - exercise
---

## Média de Três Números

Escreva um programa que recebe três números como entrada e calcula a média.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function calcularMedia(num1, num2, num3) {
        const media = (num1 + num2 + num3) / 3;
        return media;
    }

    const resultado = calcularMedia(10, 20, 30);
    console.log('A média dos três números é:', resultado);
  ```

  ### Explicação
  Nesta solução, criamos uma função calcularMedia que recebe três números como parâmetros, calcula a média e a retorna. Em seguida, chamamos a função com os valores 10, 20 e 30 e imprimimos o resultado no console.
</details>

## E se ...

E se a questão não define-se uma quantidade estpecífica de números ? 

Segue abaixo duas soluções diferentes para resolver esse caso específico.


<details>
  <summary>Solução 1</summary>

  ### Código
  ```js
    function calcularMedia(...numeros) {
        if (numeros.length === 0) {
            return 'Nenhum número fornecido para calcular a média.';
        }

        const soma = numeros.reduce((total, num) => total + num, 0);
        const media = soma / numeros.length;

        return media;
    }

    const resultado = calcularMedia(10, 20, 30, 40, 50);
    console.log('A média dos números é:', resultado);
  ```

  ### Explicação
  Nesta solução, usamos a sintaxe de argumentos de rest (...numeros) para receber uma quantidade não definida de números como parâmetros. Verificamos se pelo menos um número foi fornecido, calculamos a soma usando reduce e, em seguida, calculamos a média. Por fim, chamamos a função com os valores 10, 20, 30, 40 e 50 e imprimimos o resultado no console.
</details>

<br>

<details>
  <summary>Solução 2</summary>

  ### Código
  ```js
    function calcularMedia() {
        if (arguments.length === 0) {
            return 'Nenhum número fornecido para calcular a média.';
        }

        const soma = Array.from(arguments).reduce((total, num) => total + num, 0);
        const media = soma / arguments.length;

        return media;
    }

    const resultado = calcularMedia(15, 25, 35, 45, 55);
    console.log('A média dos números é:', resultado);
  ```

  ### Explicação
  Nesta solução, usamos a variável implícita arguments para acessar os argumentos passados para a função, calculamos a soma usando reduce e, em seguida, calculamos a média. Também verificamos se pelo menos um número foi fornecido. Chamamos a função com os valores 15, 25, 35, 45 e 55 e imprimimos o resultado no console.
</details>