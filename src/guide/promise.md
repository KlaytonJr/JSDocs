---
title: Assincrona e Promise
icon: check
---

# Assincrona e Promise

## **Assíncronas em JavaScript:**

- **Definição:**
  - Operações assíncronas permitem que o programa continue a executar outras tarefas enquanto aguarda a conclusão de operações demoradas, como requisições de rede ou leitura de arquivos.

- **Mecanismos de Assincronicidade:**
  - Callbacks, Promises e Async/Await são mecanismos comuns para lidar com operações assíncronas.

## **Promises:**

- **Definição:**
  - Promises são objetos que representam a conclusão ou falha eventual de uma operação assíncrona. Elas fornecem uma maneira mais estruturada de lidar com o código assíncrono.

- **Estados:**
  - **Pendente:** Estado inicial, a operação ainda não foi concluída.
  - **Resolvida (Fulfilled):** A operação foi concluída com sucesso.
  - **Rejeitada (Rejected):** A operação falhou.

- **Métodos Principais:**
  - `then()`: Tratamento bem-sucedido.
  - `catch()`: Tratamento de falhas.
  - `finally()`: Executa sempre, independentemente do resultado.

- **Exemplo de Promise:**
  ```javascript
  const minhaPromise = new Promise((resolve, reject) => {
    // Simula uma operação assíncrona
    setTimeout(() => {
      const sucesso = true;
      if (sucesso) {
        resolve('Operação concluída com sucesso!');
      } else {
        reject('Erro na operação!');
      }
    }, 2000);
  });

  minhaPromise
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro))
    .finally(() => console.log('Sempre executado.'));
  ```

As Promises e a assincronicidade são fundamentais para lidar com operações demoradas de forma eficiente em JavaScript, garantindo uma execução suave e responsiva do código.

## **`setTimeout` e `clearTimeout`**

### **`setTimeout`:**

- **Definição:**
  - A função `setTimeout` é utilizada para agendar a execução de uma função ou código após um determinado intervalo de tempo, especificado em milissegundos.

- **Sintaxe:**
  ```javascript
  const timeoutId = setTimeout(funcao, tempoDeEspera);
  ```

- **Exemplo:**
  ```javascript
  function exibirMensagem() {
    console.log('Executado após 2000ms');
  }

  const timeoutId = setTimeout(exibirMensagem, 2000);
  ```

### **`clearTimeout`:**

- **Definição:**
  - A função `clearTimeout` é utilizada para cancelar a execução de uma função agendada com `setTimeout`, impedindo que ela ocorra.

- **Sintaxe:**
  ```javascript
  clearTimeout(timeoutId);
  ```

- **Exemplo:**
  ```javascript
  function exibirMensagem() {
    console.log('Executado após 2000ms');
  }

  const timeoutId = setTimeout(exibirMensagem, 2000);

  // Cancela a execução agendada
  clearTimeout(timeoutId);
  ```

### **Funcionamento:**

1. **`setTimeout`:**
   - Aguarda o tempo especificado (`tempoDeEspera`) e, em seguida, executa a função fornecida (`funcao`).

2. **`clearTimeout`:**
   - Utiliza o identificador de timeout (`timeoutId`) para cancelar a execução agendada antes que ela ocorra.

### **Uso Comum:**

- **Atrasos Assíncronos:**
  - Útil para criar atrasos em operações assíncronas ou para agendar tarefas após um intervalo específico.

- **Feedback ao Usuário:**
  - Pode ser usado para exibir mensagens temporárias ou notificações em interfaces de usuário.

### **Considerações Importantes:**

- **Identificador Único:**
  - O identificador retornado por `setTimeout` é único e é utilizado por `clearTimeout` para cancelar o timeout específico.

- **Atraso Mínimo:**
  - O tempo de espera em `setTimeout` não é garantido; a execução ocorre após, no mínimo, o tempo especificado.

- **Uso Responsável:**
  - Deve-se ter cuidado ao utilizar `setTimeout` para evitar ações indesejadas ou vazamentos de memória.

O `setTimeout` e o `clearTimeout` são ferramentas úteis para lidar com a execução de código em intervalos específicos ou para criar atrasos na execução de funções. Eles são frequentemente utilizados em cenários em que é necessário agendar tarefas para ocorrerem após um intervalo de tempo específico.

<!-- ## **setTimeout**

O `setTimeout` é uma função em JavaScript que permite agendar a execução de uma função ou a avaliação de uma expressão após um determinado intervalo de tempo. Essa função é comumente utilizada para criar atrasos ou para agendar a execução de código em um momento futuro.

### **Sintaxe:**

```javascript
setTimeout(funcaoOuExpressao, tempoDeEspera);
```

- `funcaoOuExpressao`: A função ou expressão a ser executada após o intervalo de tempo.
- `tempoDeEspera`: O tempo em milissegundos que deve decorrer antes da execução da função.

### **Exemplo Básico:**

```javascript
console.log('Início');

setTimeout(() => {
  console.log('Executado após 2000ms');
}, 2000);

console.log('Fim');
```

**Saída Esperada:**
```
Início
Fim
Executado após 2000ms
```

### **Funcionamento:**

1. A função `setTimeout` é chamada, passando a função a ser executada e o tempo de espera.
2. O código subsequente continua a ser executado sem esperar pela conclusão da operação agendada.
3. Após o intervalo de tempo especificado, a função fornecida é adicionada à fila de tarefas do navegador e será executada assim que possível.

### **Utilizações Comuns:**

1. **Atrasos em Operações Assíncronas:**
   - Útil para introduzir atrasos em operações assíncronas ou para agendar a execução de código após a conclusão de alguma tarefa.

   ```javascript
   fetch('https://api.example.com/data')
     .then(response => response.json())
     .then(data => {
       setTimeout(() => {
         console.log('Dados processados após 2000ms:', data);
       }, 2000);
     });
   ```

2. **Animações Simples:**
   - Pode ser usado para criar animações simples introduzindo pequenos atrasos entre as atualizações de propriedades CSS.

   ```javascript
   const elemento = document.getElementById('animado');
   setTimeout(() => {
     elemento.style.opacity = '1';
   }, 1000);
   ```

### **Considerações Importantes:**

- O tempo de espera especificado não é garantido; a execução da função ocorre após, no mínimo, o tempo de espera especificado.
- É possível cancelar o agendamento de uma função usando `clearTimeout`.
- Para ações periódicas, `setInterval` pode ser utilizado.

O `setTimeout` é uma ferramenta útil para lidar com a temporização de operações em JavaScript, proporcionando flexibilidade na execução de código assíncrono após um intervalo de tempo específico. -->

## **Comparação entre Síncrono e Assíncrono em JavaScript:**

### **Síncrono:**

1. **Execução Bloqueante:**
   - As operações são realizadas uma após a outra, bloqueando a execução até a conclusão de cada tarefa.
  
2. **Fluxo de Controle Linear:**
   - O código é executado de maneira sequencial, seguindo uma ordem específica.

3. **Possível Espera Ativa:**
   - Pode resultar em espera ativa, onde o programa aguarda a conclusão de uma tarefa antes de iniciar outra.

4. **Exemplo:**
   ```javascript
   console.log('Início');
   for (let i = 0; i < 3; i++) {
     console.log(i);
   }
   console.log('Fim');
   ```

   Saída:
   ```
   Início
   0
   1
   2
   Fim
   ```

### **Assíncrono:**

1. **Execução Não-Bloqueante:**
   - Permite que operações sejam realizadas em paralelo, sem bloquear a execução do restante do código.

2. **Callbacks, Promises, Async/Await:**
   - Mecanismos como callbacks, promises e async/await são utilizados para lidar com operações assíncronas.

3. **Melhor Desempenho em Operações Demoradas:**
   - Útil para operações que levam tempo, como requisições de rede, leitura de arquivos, etc.

4. **Exemplo com Callback:**
   ```javascript
   console.log('Início');

   setTimeout(() => {
     console.log('Tarefa Assíncrona Concluída');
   }, 2000);

   console.log('Fim');
   ```

   Saída:
   ```
   Início
   Fim
   Tarefa Assíncrona Concluída
   ```

### **Considerações Gerais:**

- **Síncrono:**
  - Simplicidade no fluxo de controle.
  - Bloqueio durante operações demoradas.

- **Assíncrono:**
  - Melhor desempenho em operações demoradas.
  - Complexidade adicional de gerenciamento de assincronicidade.

A escolha entre abordagens síncronas e assíncronas depende das necessidades específicas da aplicação. Operações rápidas e sequenciais podem se beneficiar da simplicidade síncrona, enquanto operações demoradas e paralelas podem ser mais eficientemente tratadas de forma assíncrona para evitar bloqueios desnecessários. O JavaScript oferece uma variedade de mecanismos para lidar com ambos os casos.

## **Call Stack (Pilha de Chamadas)**

A call stack, ou pilha de chamadas, é uma estrutura de dados em JavaScript que gerencia a execução de funções. Ela segue o princípio Last In, First Out (LIFO), onde a última função adicionada à pilha é a primeira a ser removida. A call stack mantém o controle do contexto de execução durante a execução de um programa.

### **Funcionamento:**

1. **Chamada de Função:**
   - Quando uma função é chamada, um novo frame (quadro) é criado e colocado no topo da pilha, representando a execução dessa função.

2. **Execução:**
   - O código da função é executado dentro do contexto desse frame.

3. **Retorno da Função:**
   - Quando a função é concluída, seu frame é removido da pilha, retornando o controle para a função chamadora.

4. **LIFO (Last In, First Out):**
   - A pilha opera seguindo a lógica LIFO, onde a última função adicionada é a primeira a ser removida.

### **Exemplo Simples:**

```javascript
function funcaoA() {
  console.log('Função A');
}

function funcaoB() {
  funcaoA();
  console.log('Função B');
}

funcaoB();
```

**Pilha de Chamadas:**
1. `funcaoB` é chamada, adicionando seu frame à pilha.
2. `funcaoA` é chamada de dentro de `funcaoB`, adicionando seu frame à pilha.
3. `funcaoA` conclui sua execução, removendo seu frame da pilha.
4. `funcaoB` continua a execução após a chamada de `funcaoA` e conclui, removendo seu frame da pilha.

### **Uso na Detecção de Erros:**

- A call stack é fundamental para a detecção de erros e rastreamento de pilhas de chamadas em mensagens de erro, auxiliando na identificação de onde ocorreu um problema.

### **Considerações Importantes:**

- A pilha pode ficar cheia em casos de recursão excessiva ou loops infinitos, resultando em um erro de estouro de pilha (stack overflow).
- Operações assíncronas, como callbacks e promessas, são tratadas através da Web API e da fila de eventos, não diretamente na pilha de chamadas.

A call stack desempenha um papel crucial no gerenciamento do fluxo de execução em JavaScript, rastreando as chamadas de funções e garantindo que o código seja executado de maneira organizada e controlada.

## **Event Loop**

O Event Loop (Laço de Eventos) é um mecanismo essencial em linguagens de programação assíncronas, como JavaScript. Ele gerencia a execução de código, garantindo a não bloqueação do thread principal e permitindo a resposta a eventos assíncronos, como requisições de rede, operações de leitura/escrita e eventos do usuário.

### **Funcionamento Básico:**

1. **Call Stack (Pilha de Chamadas):**
   - O código JavaScript é executado na call stack, uma estrutura de dados que mantém o contexto de execução das funções.

2. **Eventos e Callbacks:**
   - Quando ocorrem eventos assíncronos (como cliques do mouse, requisições de rede ou temporizadores), os callbacks correspondentes são colocados em filas de eventos.

3. **Callback Queue (Fila de Callbacks):**
   - Os callbacks aguardam na fila de eventos até que a call stack esteja vazia.

4. **Verificação do Event Loop:**
   - O Event Loop verifica continuamente se a call stack está vazia. Se estiver vazia, ele pega o próximo callback da fila de eventos e o coloca na call stack para execução.

5. **Execução do Callback:**
   - O callback é executado, e o processo se repete.

### **Exemplo Simples:**

```javascript
console.log('Início');

setTimeout(() => {
  console.log('Temporizador Executado');
}, 2000);

console.log('Fim');
```

**Saída Esperada:**
```
Início
Fim
Temporizador Executado
```

### **Uso em Operações Assíncronas:**

- **Requisições de Rede:**
  - O Event Loop permite que o código continue executando enquanto aguarda a resposta de uma requisição de rede.

- **Temporizadores:**
  - Operações como `setTimeout` são gerenciadas pelo Event Loop, permitindo que outras tarefas sejam executadas durante a contagem regressiva.

### **Considerações Importantes:**

- **Single Thread:**
  - JavaScript é uma linguagem single-threaded, o que significa que tem apenas um thread de execução principal.

- **Não Bloqueante:**
  - O Event Loop torna o JavaScript não bloqueante, permitindo que operações assíncronas sejam tratadas sem interromper a execução do código.

- **Microtasks:**
  - Microtasks, como Promises, têm prioridade sobre macrotasks (callbacks de temporizadores, eventos do usuário) na fila de eventos.

O Event Loop é crucial para o funcionamento assíncrono eficiente do JavaScript, permitindo a execução de código assíncrono sem bloquear o thread principal. Ele desempenha um papel vital no gerenciamento de eventos e na manutenção da responsividade em aplicações web e outras operações assíncronas.

## **`setInterval` e `clearInterval`**

### **`setInterval`:**

- **Definição:**
  - A função `setInterval` é utilizada para repetir a execução de uma função ou código em intervalos regulares, especificados em milissegundos.

- **Sintaxe:**
  ```javascript
  const intervalId = setInterval(funcao, intervalo);
  ```

- **Exemplo:**
  ```javascript
  function exibirMensagem() {
    console.log('Executado a cada 1000ms');
  }

  const intervalId = setInterval(exibirMensagem, 1000);
  ```

### **`clearInterval`:**

- **Definição:**
  - A função `clearInterval` é usada para interromper a execução de um intervalo configurado com `setInterval`.

- **Sintaxe:**
  ```javascript
  clearInterval(intervalId);
  ```

- **Exemplo:**
  ```javascript
  function exibirMensagem() {
    console.log('Executado a cada 1000ms');
  }

  const intervalId = setInterval(exibirMensagem, 1000);

  // Após 5000ms, interrompe o intervalo
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Intervalo interrompido após 5000ms');
  }, 5000);
  ```

### **Funcionamento:**

1. **`setInterval`:**
   - Inicia a execução da função em intervalos regulares, criando um identificador de intervalo (`intervalId`).

2. **`clearInterval`:**
   - Utiliza o identificador do intervalo para interromper a execução repetitiva configurada com `setInterval`.

### **Uso Comum:**

- **Animações:**
  - Pode ser utilizado para criar animações com atualizações regulares.

- **Atualizações Periódicas:**
  - Útil para atualizar dados ou conteúdo em intervalos específicos.

### **Considerações Importantes:**

- **Atraso Inicial:**
  - O intervalo definido em `setInterval` é o tempo entre as execuções sucessivas, mas a primeira execução ocorre imediatamente.

- **Identificador Único:**
  - O identificador retornado por `setInterval` é único e é utilizado pelo `clearInterval` para interromper o intervalo específico.

- **Uso Responsável:**
  - Deve-se ter cuidado ao utilizar `setInterval` para evitar vazamentos de memória e garantir a eficiência do código.

O `setInterval` e o `clearInterval` são mecanismos úteis para a execução repetitiva de código em intervalos específicos. Eles são comumente utilizados em situações em que é necessário realizar ações de forma periódica, como animações ou atualizações automáticas.

## **`then`, `catch`, e `finally` em Promises**

### **`then`:**

- **Definição:**
  - O método `then` é usado em Promises para lidar com o resultado bem-sucedido de uma operação assíncrona.

- **Sintaxe:**
  ```javascript
  minhaPromise.then(
    // Função de sucesso (resolve)
    resultado => {
      // Código a ser executado em caso de sucesso
    }
  );
  ```

- **Uso:**
  - A função passada para `then` é executada quando a Promise é resolvida com sucesso, recebendo o resultado como argumento.

### **`catch`:**

- **Definição:**
  - O método `catch` é utilizado para lidar com erros (rejeições) em Promises.

- **Sintaxe:**
  ```javascript
  minhaPromise.catch(
    // Função de erro (reject)
    erro => {
      // Código a ser executado em caso de erro
    }
  );
  ```

- **Uso:**
  - A função passada para `catch` é executada quando a Promise é rejeitada, recebendo o motivo do erro como argumento.

### **`finally`:**

- **Definição:**
  - O método `finally` é usado para executar código independentemente de a Promise ser resolvida ou rejeitada.

- **Sintaxe:**
  ```javascript
  minhaPromise.finally(() => {
    // Código a ser executado sempre, seja resolvida ou rejeitada
  });
  ```

- **Uso:**
  - A função passada para `finally` será sempre executada, independentemente de a Promise ser resolvida ou rejeitada.

### **Encadeamento de `then` e `catch`:**

- **Encadeamento:**
  - É comum encadear vários `then` para lidar com resultados sucessivos e usar `catch` no final para lidar com qualquer erro que ocorra em qualquer ponto da cadeia.

  ```javascript
  minhaPromise
    .then(resultado1 => {
      // Código para resultado1
      return resultado2;
    })
    .then(resultado2 => {
      // Código para resultado2
      return resultado3;
    })
    .then(resultado3 => {
      // Código para resultado3
    })
    .catch(erro => {
      // Código para tratar erros em qualquer ponto da cadeia
    });
  ```

### **Uso Típico:**

- **Operações Assíncronas:**
  - `then` é usado para tratar o sucesso de uma operação assíncrona.
  - `catch` é utilizado para lidar com erros durante a execução da operação.
  - `finally` é empregado para executar código que deve ser realizado independentemente do resultado da Promise.

### **Considerações Importantes:**

- **Ordem de Execução:**
  - As funções passadas para `then`, `catch` e `finally` são enfileiradas para execução após

a conclusão da Promise correspondente.

- **Encadeamento Assíncrono:**
  - O encadeamento de `then` permite criar sequências assíncronas, garantindo que cada parte do código aguarde a resolução anterior.

- **Propagação de Erros:**
  - Erros não tratados em qualquer ponto do encadeamento serão capturados pelo primeiro bloco `catch` encontrado na cadeia.

- **`finally` e Encadeamento:**
  - O bloco `finally` pode ser usado no final do encadeamento para realizar ações independentemente do sucesso ou falha, evitando repetições de código.

Os métodos `then`, `catch`, e `finally` são fundamentais no trabalho com Promises em JavaScript, proporcionando controle eficiente sobre o fluxo de execução assíncrona e permitindo o tratamento adequado de resultados bem-sucedidos, erros e ações que devem ser realizadas independentemente do resultado da Promise.

## **`try` e `catch`**

### **`try`:**

- **Definição:**
  - O bloco `try` é usado para envolver uma seção de código onde exceções (erros) podem ocorrer.

- **Sintaxe:**
  ```javascript
  try {
    // Código onde exceções podem ocorrer
  } catch (erro) {
    // Bloco executado em caso de exceção
  }
  ```

- **Uso:**
  - O código dentro do bloco `try` é monitorado quanto a erros. Se ocorrer algum erro, a execução é interrompida, e o controle passa para o bloco `catch`.

### **`catch`:**

- **Definição:**
  - O bloco `catch` é utilizado para lidar com exceções (erros) que podem ocorrer dentro do bloco `try`.

- **Sintaxe:**
  ```javascript
  try {
    // Código onde exceções podem ocorrer
  } catch (erro) {
    // Bloco executado em caso de exceção
    // 'erro' contém informações sobre a exceção
  }
  ```

- **Uso:**
  - O código dentro do bloco `catch` é executado se ocorrer uma exceção no bloco `try`. O parâmetro `erro` contém informações sobre a exceção.

### **Exemplo:**

```javascript
try {
  // Código potencialmente problemático
  const resultado = dividir(10, 0);
  console.log('Resultado:', resultado);
} catch (erro) {
  // Tratamento de exceção
  console.error('Erro:', erro.message);
}

function dividir(dividendo, divisor) {
  if (divisor === 0) {
    throw new Error('Divisão por zero não permitida');
  }
  return dividendo / divisor;
}
```

### **Uso Típico:**

- **Tratamento de Exceções:**
  - Utilizado para encapsular código onde podem ocorrer exceções e fornecer um mecanismo de tratamento para lidar com essas exceções.

- **Evitar Interrupção:**
  - Ajuda a evitar que um erro em uma parte do código interrompa a execução global do programa.

### **Considerações Importantes:**

- **Lançamento de Exceções:**
  - O operador `throw` é utilizado para lançar exceções dentro do bloco `try`, e o controle é transferido para o bloco `catch`.

- **Múltiplos Blocos `catch`:**
  - É possível ter vários blocos `catch` para tratar diferentes tipos de exceções.

```javascript
try {
  // Código problemático
} catch (erro1) {
  // Tratamento para erro1
} catch (erro2) {
  // Tratamento para erro2
}
```

- **Bloco `finally`:**
  - Pode ser utilizado em conjunto com `try` e `catch` para definir código que será executado independentemente de ocorrerem ou não exceções.

```javascript
try {
  // Código problemático
} catch (erro) {
  // Tratamento de exceção
} finally {
  // Código a ser executado sempre
}
```

Os blocos `try` e `catch` são fundamentais para o tratamento de exceções em JavaScript, proporcionando uma maneira estruturada de lidar com situações inesperadas e manter o controle sobre o fluxo de execução mesmo quando ocorrem erros.