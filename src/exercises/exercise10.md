---
title: Exercício 10
icon: dumbbell
order: 10
category:
  - Exercises
tag:
  - exercise
---

## Contagem de Vogais

Faça um programa que conta o número de vogais em uma string.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function contarVogais(texto) {
        const vogais = 'aeiouAEIOU';
        let contagem = 0;

        for (let i = 0; i < texto.length; i++) {
            if (vogais.includes(texto[i])) {
            contagem++;
            }
        }

        return contagem;
    }

    const frase = 'Olá, como está você?';
    const numeroDeVogais = contarVogais(frase);

    console.log(`A frase "${frase}" tem ${numeroDeVogais} vogais.`);
  ```

  ### Explicação
  Neste programa, a função contarVogais recebe uma string como argumento e percorre cada caractere da string. Se o caractere for uma vogal (verificado usando o método includes), incrementamos a contagem. Finalmente, o programa imprime o número total de vogais na frase.
</details>