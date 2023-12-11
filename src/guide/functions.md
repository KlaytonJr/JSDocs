---
title: Funções
icon: check
---

# Funções

Função é um conjunto de instruções que se agrupam para realizar uma tarefa concreta.

## Vantagens de usar funções
- Evitam instruções duplicadas ([Princípio DRY](https://pt.wikipedia.org/wiki/Don't_repeat_yourself))
- Solucionam um problema complexo utilizando tarefas simples ([Princípio KISS](https://pt.wikipedia.org/wiki/Princ%C3%ADpio_KISS))
- Focam nas tarefas prioritárias para o programa ([Princípio YAGNI](https://pt.wikipedia.org/wiki/YAGNI))
- Fornecem maior organização e clareza ao código
- Proporcionam facilidade e rapidez para fazer modificações

### Declaração de Função

A declaração de funções no JavaScript é uma maneira fundamental de organizar e reutilizar blocos de código. Aqui está um resumo sobre como declarar e usar funções em JavaScript:

1. **Declaração de Função Simples:**
   ```javascript
   function nomeDaFuncao(parametro1, parametro2) {
       // corpo da função
   }
   ```

2. **Declaração de Função Anônima:**
   ```javascript
   const nomeDaFuncao = function(parametro1, parametro2) {
       // corpo da função
   };
   ```

3. **Arrow Function (Função de seta):**
   ```javascript
   const nomeDaFuncao = (parametro1, parametro2) => {
       // corpo da função
   };
   ```
 
> As funções pode ter ou não ter parametros.

### Chamada de Função:

1. **Chamada Simples:**
   ```javascript
   nomeDaFuncao(argumento1, argumento2);
   ```

2. **Atribuição do Resultado:**
   ```javascript
   const resultado = nomeDaFuncao(argumento1, argumento2);
   ```

   Atribui a variável o retorno da função chamada.

### Parâmetros e Argumentos:

- **Parâmetros:** São variáveis listadas na declaração da função.
- **Argumentos:** São os valores reais passados para a função durante a chamada.

### Retorno de Valor:

- As funções podem ou não retornar valores.
- Use a palavra-chave `return` para especificar o valor retornado.

### Exemplo Completo:

```javascript
// Declaração da função
function soma(a, b) {
    return a + b;
}

// Chamada da função
const resultadoSoma = soma(3, 5);

console.log(resultadoSoma); // Saída: 8
```

### Funções de Setas (Arrow Functions):

```javascript
const quadrado = (x) => x * x;

const resultadoQuadrado = quadrado(4);

console.log(resultadoQuadrado); // Saída: 16
```

Esses são conceitos básicos de declaração e uso de funções em JavaScript. Elas desempenham um papel crucial na estruturação do código, facilitando a modularidade e a reutilização de código.