---
title: Matrizes
icon: check
---

# Matrizes

### 1. **Criação de Matrizes:**
   - As matrizes em JavaScript são criadas usando arrays de arrays, onde cada array interno representa uma linha da matriz.

```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

### 2. **Acesso aos Elementos:**
   - Os elementos de uma matriz são acessados usando índices duplos, indicando a linha e a coluna.

```javascript
console.log(matriz[1][2]); // Saída: 6
```

### 3. **Iteração sobre Matrizes:**
   - Os loops `for` aninhados são frequentemente utilizados para iterar sobre os elementos de uma matriz.

```javascript
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
    }
}
```

### 4. **Métodos Úteis para Matrizes:**
   - **`map` - Transformar Elementos:**
```javascript
let novaMatriz = matriz.map(function (linha) {
return linha.map(function (elemento) {
    return elemento * 2;
});
});
```

   - **`flat` - Achatando a Matriz:**
```javascript
let matrizAchatada = matriz.flat();
```

   - **`concat` - Concatenar Matrizes:**
```javascript
let matriz2 = [[7, 8, 9], [10, 11, 12]];
let matrizConcatenada = matriz.concat(matriz2);
```

### 5. **Manipulação Dinâmica:**
   - As matrizes em JavaScript são dinâmicas e podem ser modificadas durante a execução do programa.

```javascript
matriz.push([10, 11, 12]); // Adicionando uma nova linha
matriz[0].push(0); // Adicionando um elemento à primeira linha
```

### 6. **Uso de Métodos de Iteração de Arrays:**
   - Métodos como `forEach` podem ser aplicados diretamente a matrizes para facilitar a iteração.

```javascript
matriz.forEach(function (linha) {
    linha.forEach(function (elemento) {
    console.log(elemento);
    });
});
```

### 7. **Matrizes de Objetos:**
   - As matrizes podem conter objetos como elementos, úteis para organizar dados complexos.

```javascript
let matrizDeObjetos = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 30 }
];
console.log(matrizDeObjetos[1].nome); // Saída: 'Bob'
```

As matrizes em JavaScript são uma estrutura versátil e poderosa, frequentemente utilizada para organizar dados tabulares, realizar cálculos matriciais, e representar estruturas de dados mais complexas em desenvolvimento de software.