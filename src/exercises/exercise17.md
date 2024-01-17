---
title: Exercício 17
icon: dumbbell
order: 17
category:
  - Exercises
tag:
  - exercise
---

## Calculadora Simples

Implemente uma calculadora simples que realiza operações básicas (adição, subtração, multiplicação, divisão).

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function calcular(operacao, numero1, numero2) {
        switch (operacao) {
            case 'adição':
                return numero1 + numero2;
            case 'subtração':
                return numero1 - numero2;
            case 'multiplicação':
                return numero1 * numero2;
            case 'divisão':
                if (numero2 !== 0) {
                    return numero1 / numero2;
                } else {
                    return 'Não é possível dividir por zero.';
                }
            default:
                return 'Operação inválida.';
        }
    }

    // Exemplos de uso
    const resultado1 = calcular('adição', 5, 3);
    console.log('5 + 3 =', resultado1);

    const resultado2 = calcular('subtração', 10, 4);
    console.log('10 - 4 =', resultado2);

    const resultado3 = calcular('multiplicação', 2, 6);
    console.log('2 * 6 =', resultado3);

    const resultado4 = calcular('divisão', 8, 2);
    console.log('8 / 2 =', resultado4);

    const resultado5 = calcular('divisão', 10, 0);
    console.log('10 / 0 =', resultado5);
  ```

  ### Explicação
  Nesta implementação, a função calcular recebe a operação desejada ('adição', 'subtração', 'multiplicação' ou 'divisão') e dois números como argumentos. A função utiliza um switch para realizar a operação correspondente e retorna o resultado. Há uma verificação para evitar a divisão por zero.
</details>