---
title: Condicionais
icon: check
---

# Condicionais

## If, else if e else

Em JavaScript, as estruturas condicionais são usadas para controlar o fluxo do programa com base em condições booleanas. As principais estruturas condicionais são `if`, `else if` e `else`. Aqui está um resumo sobre essas construções:

1. **if:**
   - A declaração `if` é usada para executar um bloco de código se a condição associada a ela for avaliada como verdadeira (true).
   - Sintaxe:
     ```javascript
     if (condicao) {
         // Código a ser executado se a condição for verdadeira
     }
     ```

2. **else if:**
   - A declaração `else if` é usada para fornecer condições adicionais a serem verificadas se a condição anterior (`if` ou `else if` anterior) for falsa.
   - Você pode ter várias cláusulas `else if`.
   - Sintaxe:
     ```javascript
     if (condicao1) {
         // Código a ser executado se a condição1 for verdadeira
     } else if (condicao2) {
         // Código a ser executado se a condição2 for verdadeira
     } else {
         // Código a ser executado se nenhuma das condições anteriores for verdadeira
     }
     ```

3. **else:**
   - A declaração `else` é usada para fornecer um bloco de código a ser executado se todas as condições anteriores (`if` e `else if`) forem falsas.
   - Sintaxe:
     ```javascript
     if (condicao) {
         // Código a ser executado se a condição for verdadeira
     } else {
         // Código a ser executado se a condição for falsa
     }
     ```

Exemplo completo:
```javascript
let numero = 10;

if (numero > 0) {
    console.log("O número é positivo");
} else if (numero === 0) {
    console.log("O número é zero");
} else {
    console.log("O número é negativo");
}
```

Além disso, é importante mencionar o operador ternário (`? :`), que é uma forma concisa de expressar estruturas condicionais em uma única linha. Por exemplo:

```javascript
let resultado = (condicao) ? "Verdadeiro" : "Falso";
```

Essas estruturas condicionais são fundamentais para controlar o fluxo de execução em um programa JavaScript e são amplamente utilizadas para tomar decisões com base em diferentes cenários.

## Operadores

Em JavaScript, as estruturas de comparação são utilizadas para comparar valores e tomar decisões com base nessas comparações. Aqui está um resumo das principais estruturas de comparação:

1. **Operadores de Comparação:**
   - JavaScript fornece vários operadores de comparação, como `==`, `===`, `!=`, `!==`, `>`, `<`, `>=` e `<=`.
   - Os operadores `==` e `!=` comparam os valores, enquanto `===` e `!==` comparam os valores e os tipos.
   - Exemplo:
     ```javascript
     let a = 5;
     let b = "5";

     console.log(a == b);  // true (compara os valores)
     console.log(a === b); // false (compara valores e tipos)
     ```

    #### Diferença entre `Igualdade` e `Igualdade Estrita`
    
    Em JavaScript, `==` (igualdade) e `===` (igualdade estrita) são operadores de comparação utilizados para verificar a igualdade entre dois valores. No entanto, há uma diferença crucial entre eles:

   1. **`==` (Igualdade):**
      - O operador `==` verifica apenas a igualdade de valores, ignorando os tipos das variáveis.
      - Se os valores são de tipos diferentes, o JavaScript tentará converter um ou ambos os valores para um tipo comum antes de fazer a comparação.
      - Este processo de conversão pode levar a resultados inesperados, especialmente quando lidando com diferentes tipos de dados.
      - Exemplo:
        ```javascript
        5 == "5"    // true (JavaScript converte a string para número)
        true == 1   // true (JavaScript converte o booleano para número)
        ```

   2. **`===` (Igualdade Estrita):**
      - O operador `===` verifica tanto a igualdade de valores quanto de tipos. Os valores devem ser do mesmo tipo e ter o mesmo valor para a condição ser verdadeira.
      - Não ocorre conversão automática de tipos, o que pode tornar as comparações mais previsíveis.
      - Exemplo:
        ```javascript
        5 === "5"   // false (tipos diferentes)
        true === 1  // false (tipos diferentes)
        ```

   Em geral, é recomendável usar `===` (igualdade estrita) sempre que possível, pois isso ajuda a evitar resultados inesperados devido à conversão automática de tipos. Isso ajuda a garantir que tanto os valores quanto os tipos sejam idênticos para que a condição seja considerada verdadeira. A igualdade estrita é considerada uma prática mais segura e menos propensa a erros em comparações de valores em JavaScript.

2. **Operadores Lógicos:**
   - Os operadores lógicos, como `&&` (AND), `||` (OR) e `!` (NOT), são usados para combinar ou negar condições.
   - Exemplo:
     ```javascript
     let idade = 25;
     let possuiCarteiraDeMotorista = true;

     if (idade >= 18 && possuiCarteiraDeMotorista) {
         console.log("Pode dirigir");
     }
     ```

3. **Operador Ternário:**
   - O operador ternário (`? :`) é uma forma concisa de expressar uma estrutura condicional em uma única linha.
   - Exemplo:
     ```javascript
     let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
     ```

Essas estruturas de comparação são fundamentais para criar lógica condicional em programas JavaScript, permitindo que o código tome decisões dinâmicas com base nas condições encontradas durante a execução.

## Switch Case

   - A estrutura `switch` é usada quando se deseja comparar uma expressão com múltiplos valores possíveis e executar diferentes blocos de código com base nesses valores.

   - Exemplo:
     ```javascript
     let diaDaSemana = 3;

     switch (diaDaSemana) {
         case 1:
             console.log("Domingo");
             break;
         case 2:
             console.log("Segunda-feira");
             break;
         // ... outros casos ...
         default:
             console.log("Dia inválido");
     }
     ```
   
   Cada condição é verificada e, se for cumprida, será executado o que estiver especificado dentro de cada case.
    
   Normalmente, depois das instruções de cada case, é incluída a sentença break para interromper a execução do switch, mesmo que  não seja obrigatório.
    
   O que acontece se nenhum valor da variável do switch corresponde aos valores definidos em algum dos case? 
    
   Nesse caso, se utiliza o valor default para indicar as instruções que serão executadas quando nenhuma condição anterior for cumprida.
