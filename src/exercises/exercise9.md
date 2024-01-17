---
title: Exercício 9
icon: dumbbell
order: 9
category:
  - Exercises
tag:
  - exercise
---

## Conversão de Temperatura

Crie um programa que converte a temperatura de Celsius para Fahrenheit.

A fórmula para converter a temperatura de Celsius para Fahrenheit é:

F = 9/5 * C + 32

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function converterCelsiusParaFahrenheit(celsius) {
        const fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit;
    }

    const temperaturaCelsius = 25;
    const temperaturaFahrenheit = converterCelsiusParaFahrenheit(temperaturaCelsius);

    console.log(`${temperaturaCelsius} graus Celsius é igual a ${temperaturaFahrenheit} graus Fahrenheit.`);
  ```

  ### Explicação
  Neste programa, a função `converterCelsiusParaFahrenheit` recebe a temperatura em Celsius como argumento e retorna a temperatura equivalente em Fahrenheit usando a fórmula mencionada. Em seguida, chamamos a função com uma temperatura de 25 graus Celsius e imprimimos o resultado no console.

  Você pode alterar o valor de `temperaturaCelsius` ou utilizar a função com diferentes temperaturas conforme necessário.
</details>