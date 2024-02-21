---
title: Exercício 23
icon: dumbbell
order: 23
category:
  - Exercises
tag:
  - exercise
---

## Manipulando Datas 12

Sua tarefa é realizar manipulações em datas utilizando JavaScript. Crie uma função que realiza as seguintes operações:

1. Pegue a data atual e zere o horário e minutos.

2. Gere uma data no formato 'YYYY-MM-DDTHH:mm:ss' com horas e minutos zerados, por exemplo, '2024-02-20T00:00:00'.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function manipularDatas() {
        // Pegar a data atual
        const dataAtual = new Date();

        // Zerar o horário e minutos da data atual
        dataAtual.setHours(0, 0, 0, 0);

        // Obter o offset do fuso horário em minutos
        const offsetMinutos = dataAtual.getTimezoneOffset();

        // Ajustar a data para compensar o fuso horário
        const dataAtualZerada = new Date(dataAtual.getTime() - offsetMinutos * 60000);

        // Formatar a data no formato desejado
        const dataZeradaFormatada = dataAtualZerada.toISOString().slice(0, -5);

        return { dataAtual: dataAtualZerada.toISOString(), dataZerada: dataZeradaFormatada };
    }

    // Exemplo de uso da função
    const resultado = manipularDatas();
    console.log("Data Atual:", resultado.dataAtual);
    console.log("Data Zerada:", resultado.dataZerada);
  ```

  ### Explicação
  Esta função utiliza o objeto Date para manipulação de datas e horas. A função toISOString() é usada para obter uma string no formato UTC, e slice(0, -5) é utilizado para remover a parte dos milissegundos da string resultante.
</details>
