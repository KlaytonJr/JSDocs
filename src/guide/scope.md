---
title: Escopo
icon: check
---

# Escopo

O escopo em JavaScript refere-se à visibilidade e acessibilidade de variáveis em diferentes partes do código. Existem dois tipos principais de escopo: escopo global e escopo local.

### Escopo Global:

1. **Variáveis Globais:**
   - Declaradas fora de qualquer função.
   - Acessíveis em todo o código, incluindo dentro de funções.

2. **Acessibilidade:**
   - Variáveis globais podem ser acessadas de qualquer lugar no código.

3. **Exemplo:**
   ```javascript
   const globalVar = 10;

   function exemplo() {
       console.log(globalVar); // Acesso à variável global
   }
   ```

### Escopo Local:

1. **Variáveis Locais:**
   - Declaradas dentro de uma função.
   - Limitadas ao escopo da função em que foram declaradas.

2. **Acessibilidade:**
   - Variáveis locais não são acessíveis fora da função.

3. **Exemplo:**
   ```javascript
   function exemplo() {
       const localVar = 20;
       console.log(localVar); // Acesso à variável local
   }

   console.log(localVar); // Erro: localVar não definida fora da função
   ```

### Hosting

O hoisting é um comportamento presente no JavaScript que faz com que declarações de variáveis e funções sejam "elevadas" para o topo do escopo em que são definidas. 

Isso significa que, independentemente de onde uma declaração de variável ou função apareça no código, ela será tratada como se estivesse no topo do escopo.

Enquanto o escopo se refere à visibilidade, o contexto se refere ao valor de this (“este”), ou seja, elemento atual em que se está escrevendo o código. 

Em uma analogia, pensando em nosso mundo, o contexto nada mais é do que o “espaço” que determinada variável ocupa no ambiente (variável no sentido mais amplo, podendo ser uma função também).


```javascript
//Original:
console.log(x);
var x = 5;

//Interpretação:
var x;
console.log(x);
x = 5;
```

### Escopo do `var`:

1. **Escopo de Função:**
   - `var` tem escopo de função, o que significa que é acessível em toda a função onde foi declarado.
   - Não tem escopo de bloco, o que pode levar a problemas de vazamento de variáveis.

2. **Içamento (Hoisting):**
   - Declarações `var` são "içadas" para o topo do seu contexto de execução durante a fase de compilação.
   - Isso significa que você pode acessar a variável mesmo antes da sua declaração no código.

3. **Exemplo:**
   ```javascript
   function exemplo() {
       if (true) {
           var localVar = 30;
           console.log(localVar); // Acesso à variável mesmo antes da declaração
       }

       console.log(localVar); // Acesso à variável fora do bloco
   }
   ```

4. **Problemas com o `var`:**
   - Pode levar a vazamento de variáveis, pois não respeita o escopo de bloco.
   - Difícil de rastrear e entender em situações mais complexas.

5. **Exemplo de Vazamento de Variável:**
   ```javascript
   function exemploVazamento() {
       if (true) {
           var vazamentoVar = 40;
       }
       console.log(vazamentoVar); // Acesso à variável mesmo fora do bloco
   }
   ```

O uso do `var` tem sido desencorajado em favor do `let` e `const` desde a introdução do ECMAScript 6, pois esses últimos fornecem um comportamento mais previsível e seguro em relação ao escopo de bloco.

### Escopo de Bloco (a partir do ECMAScript 6):

1. **`let` e `const`:**
   - `let` e `const` introduzem escopo de bloco.
   - Variáveis declaradas com `let` e `const` são limitadas ao bloco em que foram definidas.

2. **Exemplo:**
   ```javascript
   if (true) {
       let blockVar = 30;
       const constVar = 40;
       console.log(blockVar, constVar); // Acesso às variáveis dentro do bloco
   }

   console.log(blockVar); // Erro: blockVar não definida fora do bloco
   console.log(constVar); // Erro: constVar não definida fora do bloco
   ```

### Escopo Aninhado:

1. **Funções Dentro de Funções:**
   - Funções podem ser aninhadas, e o escopo é hierárquico.

2. **Exemplo:**
   ```javascript
   function externa() {
       const externaVar = 50;

       function interna() {
           const internaVar = 60;
           console.log(externaVar, internaVar);
       }

       interna();
   }

   // console.log(externaVar); // Erro: externaVar não definida fora da função externa
   // console.log(internaVar); // Erro: internaVar não definida fora da função interna
   ```

O entendimento do escopo é crucial para evitar problemas como vazamento de variáveis e garantir que as variáveis sejam utilizadas de maneira apropriada em diferentes partes do código JavaScript.

### Resumo
Aqui está a tabela com as informações fornecidas sobre `var`, `const`, e `let` em relação a escopo, global ou local, bloco, redeclarar, reatribuir, e hoisting:

|            | `var`        | `const`      | `let`        |
|------------|--------------|--------------|--------------|
| **Escopo** | Função       | Bloco        | Bloco        |
| **Global ou Local** | Ambos        | Local        | Local        |
| **Bloco**   | Não          | Sim          | Sim          |
| **Redeclarar** | Sim          | Não          | Não          |
| **Reatribuir** | Sim          | Não          | Sim          |
| **Hoisting** | Sim          | Não          | Não          |

Essa tabela resume as principais características e comportamentos associados a cada uma dessas palavras-chave em JavaScript.