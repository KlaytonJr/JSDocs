---
title: Exercício 22
icon: dumbbell
order: 22
category:
  - Exercises
tag:
  - exercise
---

## Manipulando Datas 1

Você está desenvolvendo um programa que manipula datas e horas. Sua tarefa é criar uma função que recebe duas datas no formato "YYYY-MM-DDTHH:mm:ss", por exemplo, "2024-02-15T22:40:00" e "2024-02-18T15:30:00". A função deve realizar as seguintes operações:

Retirar as horas da primeira data e adicionar as horas da segunda data, resultando em uma nova data, por exemplo, "2024-02-18T22:40:00".

Em seguida, gere uma nova variável com a data obtida no passo anterior e adicione 10 minutos a essa nova data.

Crie a função que realiza essas operações e retorne a data resultante.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    const combinarDataEHora = (dataString, horaString) => new Date(`${dataString.split('T')[0]}T${horaString.split('T')[1]}`).toISOString().slice(0, 19).replace('T', ' ');

    const dataOriginal = '2024-02-15T07:10:00';
    const horaNova = '2024-02-20T20:30:00';

    const novaData = combinarDataEHora(dataOriginal, horaNova);
    console.log(novaData);
  ```

  ### Explicação
  Esta implementação utiliza o split para fatiar as strings e pegar pedaços específicos para montar uma nova string e gerar um new Date.

  ### Código
  ```js
    function manipularDatas(data1, data2) {
        // Convertendo as strings de data para objetos Date
        const data1Obj = new Date(data1);
        const data2Obj = new Date(data2);

        // Retirar as horas da primeira data e adicionar as horas da segunda data
        const novaData = new Date(data1Obj.getFullYear(), data1Obj.getMonth(), data1Obj.getDate(), data2Obj.getHours(), data2Obj.getMinutes(), data2Obj.getSeconds());

        // Adicionar 10 minutos à nova data
        novaData.setMinutes(novaData.getMinutes() + 10);

        // Formatando a nova data como uma string no formato desejado
        const resultado = novaData.toISOString().slice(0, -5);

        return resultado;
    }

    // Exemplo de uso da função
    const dataResultante = manipularDatas("2024-02-15T22:40:00", "2024-02-18T15:30:00");
    console.log(dataResultante);
  ```

  ### Explicação
  Esta implementação utiliza o objeto Date para manipulação de datas e horas. A função toISOString() é usada para obter uma string no formato UTC, e slice(0, -5) é utilizado para remover a parte dos milissegundos da string resultante.
</details>
