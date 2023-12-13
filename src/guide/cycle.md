---
title: Ciclos e iterações
icon: check
---

# Ciclos e iterações

Os ciclos, também conhecidos como laços, loops ou iterações, são uma forma rápida e simples de fazer algo repetidamente.

Se temos que fazer alguma operação no programa mais de uma vez, de forma consecutiva, usaremos as estruturas de loop do JavaScript: for, while ou do...while.

Vamos analisar a sintaxe de cada um dos principais laços de repetição em JavaScript: "for", "while", e "do-while".

## Laços de Repetição

### 1. **For Loop:**
O laço "for" é frequentemente utilizado quando o número de iterações é conhecido antecipadamente.

```javascript
for (inicialização; condição; expressão de incremento) {
    // Bloco de código a ser repetido
}
```

- **Inicialização:** Declaração e/ou atribuição da variável de controle.
- **Condição:** A execução do bloco de código continua enquanto essa condição for verdadeira.
- **Expressão de Incremento/Decremento:** Operação que modifica a variável de controle a cada iteração.

Exemplo:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### 2. **While Loop:**
O laço "while" é utilizado quando o número de iterações não é conhecido antecipadamente e depende de uma condição booleana.

```javascript
while (condição) {
    // Bloco de código a ser repetido
}
```

- **Condição:** A execução do bloco de código continua enquanto essa condição for verdadeira.

Exemplo:
```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

#### Cuidado com Whille

`while (true)` é uma construção comumente utilizada para criar um loop infinito em linguagens de programação. A expressão `true` sempre será verdadeira, portanto, o bloco de código associado ao `while (true)` continuará a ser executado indefinidamente, a menos que seja interrompido por alguma instrução dentro do bloco ou por algum controle externo.

No entanto, o uso de loops infinitos, especialmente `while (true)`, pode levar a problemas sérios, como loops que não terminam, travamento de programas e alto consumo de recursos do sistema. Aqui estão alguns dos problemas associados a loops infinitos usando `while (true)`:

1. **Loop Infinito Acidental:**
   - É fácil criar um loop infinito acidentalmente se não houver uma instrução dentro do bloco do loop que eventualmente altere a condição para falsa. Isso pode ocorrer devido a erros de lógica ou condições que nunca são atendidas.

   Exemplo de loop infinito acidental:
   ```javascript
   while (true) {
       // Bloco de código sem instrução para alterar a condição
   }
   ```

2. **Consumo Excessivo de Recursos:**
   - Loops infinitos consomem recursos da CPU continuamente, o que pode levar a um desempenho ruim do sistema. Em casos extremos, isso pode até mesmo travar a execução do programa.

3. **Não Libera Recursos:**
   - Se um loop infinito estiver executando em um programa que utiliza recursos externos (como conexões de rede, arquivos, etc.), esses recursos podem não ser liberados adequadamente, resultando em vazamentos de recursos.

4. **Travamento de Aplicações:**
   - Em situações onde o loop infinito não é tratado corretamente, ele pode levar ao travamento completo da aplicação ou do sistema.

É importante ter cuidado ao usar `while (true)` e garantir que haja uma lógica adequada dentro do bloco do loop para eventualmente alterar a condição para falsa. Caso contrário, é recomendável usar construções de loop que têm condições de parada mais explícitas e controladas.

### 3. **Do-While Loop:**
Semelhante ao "while", mas garante que o bloco de código seja executado pelo menos uma vez antes de verificar a condição.

```javascript
do {
    // Bloco de código a ser repetido
} while (condição);
```

- **Condição:** A execução do bloco de código continua enquanto essa condição for verdadeira.

Exemplo:
```javascript
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);
```

Essas são as estruturas básicas dos laços de repetição em JavaScript. Cada tipo de laço tem sua aplicação específica, e a escolha entre eles depende das necessidades do problema a ser resolvido.

## Controle de Fluxo

Os controles de fluxo são instruções que alteram o comportamento normal da execução dos laços de repetição em JavaScript. Essas instruções são fundamentais para tomar decisões dentro do loop e personalizar o fluxo de execução. Os controles de fluxo mais comuns são "break" e "continue".

### 1. **Break:**
A instrução "break" é utilizada para interromper a execução do loop imediatamente quando uma condição específica é atendida. Isso é útil para sair antecipadamente de um loop quando uma determinada condição é satisfeita.

Exemplo:
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // O loop é interrompido quando i atinge 5
    }
    console.log(i);
}
```

### 2. **Continue:**
A instrução "continue" é usada para pular a iteração atual do loop e continuar com a próxima iteração. Isso é útil quando se deseja ignorar parte do código em uma iteração específica.

Exemplo:
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Pula a iteração quando i é igual a 2
    }
    console.log(i);
}
```

### 3. **Rotulagem (Labeling):**
JavaScript também permite rotular loops, o que pode ser útil ao usar loops aninhados. Um rótulo é um identificador seguido por dois pontos (`:`), colocado antes do loop. Em seguida, você pode usar "break" e "continue" com o rótulo para afetar um loop específico.

Exemplo:
```javascript
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Interrompe o loop externo quando i é 1 e j é 1
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
```

Estes controles de fluxo adicionam flexibilidade aos laços de repetição, permitindo ajustar o comportamento do loop com base em condições específicas. Eles são ferramentas poderosas para lidar com casos especiais e otimizar a execução do código.